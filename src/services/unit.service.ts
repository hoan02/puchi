"use server";

import prisma from "@/lib/db";

export async function getLessonData(lessonId: string) {
  try {
    const lesson = await prisma.lesson.findUnique({
      where: { id: lessonId },
      include: {
        unit: {
          include: {
            sentences: {
              include: {
                words: true,
              },
            },
          },
        },
      },
    });

    if (!lesson) {
      throw new Error("Lesson not found");
    }

    return lesson;
  } catch (error) {
    console.error("Error fetching lesson data:", error);
    throw new Error("Failed to fetch lesson data");
  }
}
