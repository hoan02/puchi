"use server";

import prisma from "@/lib/db";
import { auth } from "@clerk/nextjs/server";

export async function getUserLessonsInProgress() {
  try {
    const { userId } = await auth();
    if (!userId) return null;

    const userLessons = await prisma.userProgress.findMany({
      where: { userId },
      select: {
        lesson: {
          select: {
            id: true,
            type: true,
            unit: {
              select: {
                title: true,
                section: {
                  select: {
                    title: true,
                  },
                },
              },
            },
            totalSteps: true,
          },
        },
        currentStep: true,
        progressPercentage: true,
      },
    });

    return userLessons.map((progress) => ({
      lessonId: progress.lesson.id,
      lessonType: progress.lesson.type,
      unitTitle: progress.lesson.unit.title,
      sectionTitle: progress.lesson.unit.section.title,
      currentStep: progress.currentStep,
      totalSteps: progress.lesson.totalSteps,
      progressPercentage: progress.progressPercentage,
    }));
  } catch (error) {
    console.error("Error in getUserLessonsInProgress:", error);
    throw new Error("Failed to fetch user lessons in progress");
  }
}
