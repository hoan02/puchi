"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { dictationService } from "@/services/dictation.service";
import type { DictationLesson, DictationAnswer } from "@/types/dictation";
import DictationLessonComponent from "../_components/DictationLesson";

interface DictationPageClientProps {
  lessonId: string;
}

const DictationPageClient = ({ lessonId }: DictationPageClientProps) => {
  const [lesson, setLesson] = useState<DictationLesson | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    const fetchLessonData = async () => {
      try {
        setLoading(true);
        const lessonData = await dictationService.getLesson(lessonId);
        setLesson(lessonData);
      } catch (err) {
        setError("Failed to load lesson");
        console.error("Error fetching lesson:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchLessonData();
  }, [lessonId]);

  const handleLessonComplete = async (completedLesson: DictationLesson) => {
    try {
      // Submit lesson completion to backend
      const answers: DictationAnswer[] = []; // You would collect answers during the lesson
      await dictationService.completeLesson(lessonId, answers);

      // Navigate to lesson completion page or show success
      console.log("Lesson completed with score:", completedLesson.score);
    } catch (err) {
      console.error("Error completing lesson:", err);
    }
  };

  const handleLessonFailed = () => {
    // Handle lesson failure (out of lives)
    console.log("Lesson failed - out of lives");
  };

  const handleExit = () => {
    router.back();
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto mb-4"></div>
          <p className="text-muted-foreground">Loading lesson...</p>
        </div>
      </div>
    );
  }

  if (error || !lesson) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-xl font-bold mb-4">Error</h1>
          <p className="text-muted-foreground mb-4">
            {error || "Failed to load lesson"}
          </p>
          <button
            onClick={handleExit}
            className="px-4 py-2 bg-primary text-primary-foreground rounded-lg"
          >
            Go Back
          </button>
        </div>
      </div>
    );
  }

  return (
    <DictationLessonComponent
      lesson={lesson}
      onLessonComplete={handleLessonComplete}
      onLessonFailed={handleLessonFailed}
      onExit={handleExit}
    />
  );
};

export default DictationPageClient;
