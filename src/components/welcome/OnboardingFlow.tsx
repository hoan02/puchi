"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";

interface OnboardingStep {
  id: number;
  title: string;
  question: string;
  options: string[];
}

const onboardingSteps: OnboardingStep[] = [
  {
    id: 1,
    title: "How did you hear about Puchi?",
    question: "How did you hear about Puchi?",
    options: [
      "Tiktok",
      "Youtube",
      "Friend/Family",
      "Google Search",
      "Facebook/Instagram",
      "Other...",
    ],
  },
  {
    id: 2,
    title: "Why are you learning Vietnamese?",
    question: "Why are you learning Vietnamese?",
    options: [
      "Travel to Vietnam",
      "Work/Business",
      "Academic Interest",
      "Jusr for fun",
      "Other...",
    ],
  },
  {
    id: 3,
    title: "Let's prepare you for conversations!",
    question: "What type of conversations do you want to focus on?",
    options: [
      "Daily Conversations",
      "Business/Professional",
      "Travel & Tourism",
      "Food & Dining",
      "All of the above",
    ],
  },
  {
    id: 4,
    title: "How much Vietnamese do you know?",
    question: "What's your current level?",
    options: [
      "Complete Beginner",
      "Know a few words",
      "Can make simple sentences",
      "Intermediate",
      "Advanced",
    ],
  },
  {
    id: 5,
    title: "Here's what you can achieve!",
    question: "What's your learning goal?",
    options: [
      "Basic Communication",
      "Fluent Conversations",
      "Business Vietnamese",
      "Cultural Understanding",
      "Native-like Proficiency",
    ],
  },
];

interface OnboardingFlowProps {
  onComplete: (answers: Record<number, string>) => void;
}

const OnboardingFlow = ({ onComplete }: OnboardingFlowProps) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});

  const handleAnswer = (answer: string) => {
    setAnswers((prev) => ({ ...prev, [currentStep]: answer }));
  };

  const handleContinue = () => {
    if (currentStep < onboardingSteps.length - 1) {
      setCurrentStep((prev) => prev + 1);
    } else {
      onComplete(answers);
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep((prev) => prev - 1);
    }
  };

  const progress = ((currentStep + 1) / onboardingSteps.length) * 100;
  const currentStepData = onboardingSteps[currentStep];
  const hasAnswered = answers[currentStep];

  return (
    <div className="min-h-screen bg-background flex flex-col p-6 max-w-2xl mx-auto w-full">
      {/* Progress Bar */}
      <div className="mb-8">
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm text-muted-foreground">
            Step {currentStep + 1} of {onboardingSteps.length}
          </span>
          <span className="text-sm font-medium">{Math.round(progress)}%</span>
        </div>
        <Progress value={progress} className="h-2" />
      </div>

      {/* Step Title */}
      <h1 className="text-2xl font-bold mb-2 text-center">
        {currentStepData.title}
      </h1>

      {/* Question */}
      <p className="text-lg text-muted-foreground mb-8 text-center">
        {currentStepData.question}
      </p>

      {/* Answer Options */}
      <div className="space-y-3 mb-8">
        {currentStepData.options.map((option, index) => (
          <Button
            key={index}
            variant={answers[currentStep] === option ? "primary" : "ghost"}
            className="w-full justify-start h-auto p-4 text-left"
            onClick={() => handleAnswer(option)}
          >
            {option}
          </Button>
        ))}
      </div>

      {/* Navigation Buttons */}
      <div className="flex justify-between items-center mt-auto">
        <Button
          variant="ghost"
          onClick={handleBack}
          disabled={currentStep === 0}
        >
          Back
        </Button>

        <Button
          onClick={handleContinue}
          disabled={!hasAnswered}
          className="ml-auto"
        >
          {currentStep === onboardingSteps.length - 1
            ? "Get Started"
            : "Continue"}
        </Button>
      </div>
    </div>
  );
};

export default OnboardingFlow;
