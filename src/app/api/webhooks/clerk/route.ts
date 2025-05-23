// DOCS: https://clerk.com/docs/webhooks/sync-data

import { Webhook } from "svix";
import { headers } from "next/headers";
import { WebhookEvent } from "@clerk/nextjs/server";

import { createUser, updateUser, deleteUser } from "@/services/user.service";

export async function GET() {
  return new Response("Welcome to the Webhook CLERK API!", {
    status: 200,
  });
}

export async function POST(req: Request) {
  const webhookSecret = process.env.CLERK_WEBHOOK_SECRET;

  if (!webhookSecret) {
    throw new Error(
      "Error: Please add CLERK_WEBHOOK_SECRET from Clerk Dashboard to .env or .env.local"
    );
  }

  const headerPayload = await headers();
  const svix_id = headerPayload.get("svix-id");
  const svix_timestamp = headerPayload.get("svix-timestamp");
  const svix_signature = headerPayload.get("svix-signature");

  if (!svix_id || !svix_timestamp || !svix_signature) {
    return new Response("Error occurred -- no svix headers", {
      status: 400,
    });
  }

  const payload = await req.json();
  const body = JSON.stringify(payload);

  const wh = new Webhook(webhookSecret);

  let evt: WebhookEvent;

  try {
    evt = wh.verify(body, {
      "svix-id": svix_id,
      "svix-timestamp": svix_timestamp,
      "svix-signature": svix_signature,
    }) as WebhookEvent;
  } catch (err) {
    console.error("Error verifying webhook:", err);
    return new Response("Error occurred", {
      status: 400,
    });
  }

  const eventType = evt.type;

  try {
    if (eventType === "user.created") {
      const eventData = evt?.data as typeof evt.data;
      const {
        id,
        username,
        first_name,
        last_name,
        image_url,
        email_addresses,
      } = eventData;

      if (!id || !username || !image_url || !email_addresses) {
        return new Response("Error occurred", {
          status: 400,
        });
      }

      await createUser({
        id,
        username,
        firstName: first_name || "",
        lastName: last_name || "",
        imageUrl: image_url,
        email: email_addresses[0].email_address,
      });

      return new Response("User is created", {
        status: 200,
      });
    }

    if (eventType === "user.updated") {
      const eventData = evt?.data as typeof evt.data;
      const { id, first_name, last_name, image_url, email_addresses } =
        eventData;

      if (!id || !email_addresses) {
        return new Response("Error occurred", {
          status: 400,
        });
      }

      await updateUser(id, {
        firstName: first_name || "",
        lastName: last_name || "",
        imageUrl: image_url,
        email: email_addresses[0].email_address,
      });

      return new Response("User is updated", {
        status: 200,
      });
    }

    if (eventType === "user.deleted") {
      if (evt?.data && evt.data.id) {
        const id: string = evt.data.id;
        await deleteUser(id);
      }

      return new Response("User is deleted", {
        status: 200,
      });
    }

    return new Response("Invalid event type", {
      status: 400,
    });
  } catch (err) {
    console.error("Error processing webhook:", err);
    return new Response("Error occurred", {
      status: 500,
    });
  }
}
