"use server";

import prisma from "@/lib/db";

export async function createUser(params: {
  id: string;
  username: string;
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
  id: string,
  params: {
    email?: string;
    username?: string;
    firstName?: string;
    lastName?: string;
    imageUrl?: string;
  }
) {
  try {
    return await prisma.user.update({
      where: { id },
      data: params,
    });
  } catch (error) {
    console.error("Error in updateUser:", error);
    throw new Error("Failed to update user");
  }
}

export async function deleteUser(id: string) {
  try {
    return await prisma.user.delete({
      where: { id },
    });
  } catch (error) {
    console.error("Error in deleteUser:", error);
    throw new Error("Failed to delete user");
  }
}
