"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { X, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import type { DictationLesson, DictationAnswer } from "@/types/dictation";
import { DictationWord } from "@/types/dictation";
import { motion, AnimatePresence, LayoutGroup } from "framer-motion";
import { dictationService } from "@/services/dictation.service";

interface DictationLessonProps {
  lesson: DictationLesson;
  lessonId: string;
}

const DictationLessonComponent = ({
  lesson: initialLesson,
  lessonId,
}: DictationLessonProps) => {
  const router = useRouter();
  const [lesson, setLesson] = useState<DictationLesson>(initialLesson);
  const [selectedWords, setSelectedWords] = useState<DictationWord[]>([]);
  const [isChecking, setIsChecking] = useState(false);
  const [showResult, setShowResult] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);

  const currentQuestion = lesson.questions[lesson.currentQuestionIndex];
  const progress =
    ((lesson.currentQuestionIndex + 1) / lesson.totalQuestions) * 100;

  // Tách các từ chưa chọn
  const remainingWords = currentQuestion.wordOptions.filter(
    (w) => !selectedWords.some((sw) => sw.id === w.id)
  );

  const handleLessonComplete = async () => {
    try {
      const answers: DictationAnswer[] = []; // Collect answers from lesson
      await dictationService.completeLesson(lessonId, answers);
      // Optionally redirect or show success message
      router.push("/dictation"); // or wherever you want to redirect
    } catch (error) {
      console.error("Failed to complete lesson:", error);
    }
  };

  const handleLessonFailed = () => {
    // Handle lesson failure (out of lives)
    console.log("Lesson failed - out of lives");
    // Optionally redirect or show failure message
    router.push("/dictation"); // or wherever you want to redirect
  };

  const handleExit = () => {
    router.back();
  };

  const handleWordSelect = (word: DictationWord) => {
    if (isChecking) return;
    setSelectedWords((prev) => [...prev, word]);
  };

  const handleWordRemove = (word: DictationWord) => {
    if (isChecking) return;
    setSelectedWords((prev) => prev.filter((w) => w.id !== word.id));
  };

  const handleCheck = () => {
    if (selectedWords.length === 0) return;
    setIsChecking(true);
    const userAnswer = selectedWords.map((w) => w.text).join(" ");

    // Get all correct answers from word options
    const correctAnswers = currentQuestion.wordOptions
      .filter((w) => w.isCorrect)
      .map((w) => w.text.toLowerCase());

    // Check if user answer matches any correct answer
    const correct = correctAnswers.includes(userAnswer.toLowerCase());

    setIsCorrect(correct);
    setShowResult(true);
    setTimeout(() => {
      setShowResult(false);
      setIsChecking(false);
      setSelectedWords([]);
      if (correct) {
        if (lesson.currentQuestionIndex < lesson.totalQuestions - 1) {
          const updatedLesson = {
            ...lesson,
            currentQuestionIndex: lesson.currentQuestionIndex + 1,
            progress:
              ((lesson.currentQuestionIndex + 2) / lesson.totalQuestions) * 100,
            score: lesson.score + 10,
          };
          setLesson(updatedLesson);
        } else {
          const completedLesson = {
            ...lesson,
            isCompleted: true,
            score: lesson.score + 10,
          };
          setLesson(completedLesson);
          handleLessonComplete();
        }
      } else {
        const failedLesson = {
          ...lesson,
          lives: lesson.lives - 1,
        };
        setLesson(failedLesson);
        if (failedLesson.lives <= 0) {
          handleLessonFailed();
        }
      }
    }, 2000);
  };

  const handleSkip = () => {
    if (isChecking) return;
    const updatedLesson = {
      ...lesson,
      lives: lesson.lives - 1,
      currentQuestionIndex: lesson.currentQuestionIndex + 1,
      progress:
        ((lesson.currentQuestionIndex + 2) / lesson.totalQuestions) * 100,
    };
    setLesson(updatedLesson);
    setSelectedWords([]);
    if (updatedLesson.lives <= 0) {
      handleLessonFailed();
    }
  };

  if (lesson.isCompleted) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center p-4">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Lesson Completed!</h1>
          <p className="text-muted-foreground mb-4">Score: {lesson.score}</p>
          <Button onClick={handleExit}>Exit</Button>
        </div>
      </div>
    );
  }

  if (lesson.lives <= 0) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center p-4">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Out of Lives!</h1>
          <p className="text-muted-foreground mb-4">Try again later</p>
          <Button onClick={handleExit}>Exit</Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen max-w-screen-lg w-full mx-auto bg-background flex flex-col">
      {/* Top Bar */}
      <div className="flex items-center justify-between p-4 border-b border-border">
        <Button variant="ghost" size="icon" onClick={handleExit}>
          <X className="h-5 w-5" />
        </Button>
        <div className="flex-1 mx-4">
          <Progress value={progress} className="h-2" />
        </div>
        <div className="flex items-center gap-1">
          <Heart className="h-5 w-5 text-red-500 fill-red-500" />
          <span className="text-sm font-medium">{lesson.lives}</span>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col items-center justify-center p-6 mx-auto w-full">
        {/* Question Type Badge */}
        <div className="flex items-center gap-2 mb-6">
          <div className="bg-purple-500 text-white px-3 py-1 rounded-full text-xs font-medium">
            {currentQuestion.type === "new_word" ? "NEW WORD" : "REVIEW"}
          </div>
          {currentQuestion.type === "new_word" && (
            <div className="w-4 h-4 bg-purple-500 rounded-full flex items-center justify-center">
              <span className="text-white text-xs">💀</span>
            </div>
          )}
        </div>

        {/* Instruction */}
        <h2 className="text-xl font-bold text-center mb-4">
          {currentQuestion.instruction}
        </h2>

        {/* Target Word */}
        <div className="text-center mb-8">
          <div className="text-2xl font-bold text-purple-500 mb-2">
            {currentQuestion.targetWord}
          </div>
        </div>

        {/* Answer Line (Selected Words) */}
        <div className="relative w-full flex flex-col items-center mb-8">
          <div className="flex flex-wrap gap-2 min-h-[48px] items-center justify-center w-full z-10">
            <AnimatePresence>
              {selectedWords.map((word) => (
                <motion.div
                  key={word.id}
                  layout
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.8, opacity: 0 }}
                  transition={{
                    type: "spring",
                    stiffness: 500,
                    damping: 30,
                    mass: 1,
                  }}
                >
                  <Button
                    variant="secondary"
                    size="sm"
                    className="min-w-fit px-4 py-2 text-base"
                    onClick={() => handleWordRemove(word)}
                    disabled={isChecking}
                  >
                    {word.text}
                  </Button>
                </motion.div>
              ))}
            </AnimatePresence>
            {selectedWords.length === 0 && (
              <motion.div
                key="placeholder"
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.4 }}
                exit={{ opacity: 0 }}
                className="h-10"
              />
            )}
          </div>
          {/* Baseline border-b luôn hiển thị */}
          <div className="absolute left-0 right-0 bottom-0 w-full max-w-md mx-auto h-0.5 border-b border-muted-foreground pointer-events-none" />
        </div>

        {/* Word Options (Remaining) */}
        <LayoutGroup>
          <div className="flex flex-wrap gap-2 w-full justify-center mb-8">
            <AnimatePresence>
              {remainingWords.map((word) => (
                <motion.div
                  key={word.id}
                  layout
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.8, opacity: 0 }}
                  transition={{
                    type: "spring",
                    stiffness: 500,
                    damping: 30,
                    mass: 1,
                  }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    variant="default"
                    size="sm"
                    className="min-w-fit px-4 py-2 text-base"
                    onClick={() => handleWordSelect(word)}
                    disabled={isChecking}
                  >
                    {word.text}
                  </Button>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </LayoutGroup>

        {/* Result Display */}
        <AnimatePresence>
          {showResult && (
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.9 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              className={`w-full text-center mb-6 p-4 rounded-lg ${
                isCorrect
                  ? "bg-green-500/20 text-green-600"
                  : "bg-red-500/20 text-red-600"
              }`}
            >
              <div className="text-lg font-bold">
                {isCorrect ? "Correct!" : "Incorrect!"}
              </div>
              <div className="text-sm mt-1">{currentQuestion.explanation}</div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Bottom Navigation */}
      <div className="flex justify-between items-center p-4 border-t border-border">
        <Button variant="ghost" onClick={handleSkip} disabled={isChecking}>
          SKIP
        </Button>
        <Button
          onClick={handleCheck}
          disabled={selectedWords.length === 0 || isChecking}
          variant="correct"
        >
          CHECK
        </Button>
      </div>
    </div>
  );
};

export default DictationLessonComponent;