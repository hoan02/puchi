import prisma from "@/lib/db";

export async function createUser(params: {
  clerkUserId: string;
  email: string;
  firstName: string;
  lastName: string;
  imageUrl: string;
}) {
  try {
    return await prisma.user.create({
      data: params,
    });
  } catch (error) {
    console.error("Error in createUser:", error);
    throw new Error("Failed to create user");
  }
}

export async function updateUser(
  clerkUserId: string,
  params: {
    email?: string;
    firstName?: string;
    lastName?: string;
    imageUrl?: string;
  }
) {
  try {
    return await prisma.user.update({
      where: { clerkUserId },
      data: params,
    });
  } catch (error) {
    console.error("Error in updateUser:", error);
    throw new Error("Failed to update user");
  }
}

export async function deleteUser(clerkUserId: string) {
  try {
    return await prisma.user.delete({
      where: { clerkUserId },
    });
  } catch (error) {
    console.error("Error in deleteUser:", error);
    throw new Error("Failed to delete user");
  }
}
