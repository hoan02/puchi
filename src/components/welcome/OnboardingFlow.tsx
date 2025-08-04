"use client";

import Image from "next/image";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
import { ChatBubble } from "../ChatBubble";
import { MotionDiv } from "../motion";

interface ConversationOption {
  text: string;
  icon: string;
  response: string;
}

interface Conversation {
  id: number;
  question: string;
  options: ConversationOption[];
}

interface ConversationMessage {
  type: 'question' | 'user' | 'puchi';
  content: string;
  position: 'left' | 'right';
  color?: string;
}

const conversations: Conversation[] = [
  {
    id: 1,
    question: "How did you hear about Puchi?",
    options: [
      {
        text: "Tiktok",
        icon: "/images/tiktok.svg",
        response: "Wow! TikTok is amazing for learning! 🎵"
      },
      {
        text: "Youtube",
        icon: "/images/youtube.svg",
        response: "YouTube tutorials are the best! 📺"
      },
      {
        text: "Friend/Family",
        icon: "/images/friend.svg",
        response: "That's so sweet! Friends and family are the best! ❤️"
      },
      {
        text: "Google Search",
        icon: "/images/google.svg",
        response: "Google always knows the way! 🔍"
      },
      {
        text: "Facebook/Instagram",
        icon: "/images/social.svg",
        response: "Social media connects us all! 📱"
      },
      {
        text: "Other...",
        icon: "/images/other.svg",
        response: "Interesting! Tell me more! 🤔"
      }
    ]
  },
  {
    id: 2,
    question: "Why are you learning Vietnamese?",
    options: [
      {
        text: "Travel to Vietnam",
        icon: "/images/face-1.svg",
        response: "Vietnam is beautiful! You'll love it! 🏖️"
      },
      {
        text: "Work/Business",
        icon: "/images/face-2.svg",
        response: "Business Vietnamese will be very useful! 💼"
      },
      {
        text: "Academic Interest",
        icon: "/images/face-3.svg",
        response: "Learning for knowledge is wonderful! 📚"
      },
      {
        text: "Jusr for fun",
        icon: "/images/face-4.svg",
        response: "Having fun while learning is the best! 😄"
      },
      {
        text: "Other...",
        icon: "/images/other.svg",
        response: "Every reason to learn is valid! 🌟"
      }
    ]
  },
  {
    id: 3,
    question: "What type of conversations do you want to focus on?",
    options: [
      {
        text: "Daily Conversations",
        icon: "/images/voice.svg",
        response: "Daily conversations are essential! 💬"
      },
      {
        text: "Business/Professional",
        icon: "/images/face-2.svg",
        response: "Professional Vietnamese opens many doors! 🚪"
      },
      {
        text: "Travel & Tourism",
        icon: "/images/face-1.svg",
        response: "Travel conversations are so exciting! ✈️"
      },
      {
        text: "Food & Dining",
        icon: "/images/reward.svg",
        response: "Vietnamese food is delicious! 🍜"
      },
      {
        text: "All of the above",
        icon: "/images/bulb.svg",
        response: "You want to learn everything! That's ambitious! 🎯"
      }
    ]
  },
  {
    id: 4,
    question: "What's your current level?",
    options: [
      {
        text: "Complete Beginner",
        icon: "/images/level-0.svg",
        response: "Don't worry! We'll start from the basics! 🌱"
      },
      {
        text: "Know a few words",
        icon: "/images/level-1.svg",
        response: "Great! You already have a foundation! 🏗️"
      },
      {
        text: "Can make simple sentences",
        icon: "/images/level-2.svg",
        response: "Excellent! You're making progress! 📈"
      },
      {
        text: "Intermediate",
        icon: "/images/level-3.svg",
        response: "Wow! You're already quite good! 🎉"
      },
      {
        text: "Advanced",
        icon: "/images/level-4.svg",
        response: "Amazing! You're almost fluent! 🌟"
      }
    ]
  },
  {
    id: 5,
    question: "What's your learning goal?",
    options: [
      {
        text: "Basic Communication",
        icon: "/images/voice.svg",
        response: "Basic communication is a great start! 🚀"
      },
      {
        text: "Fluent Conversations",
        icon: "/images/face-1.svg",
        response: "Fluent conversations are achievable! 💪"
      },
      {
        text: "Business Vietnamese",
        icon: "/images/face-2.svg",
        response: "Business Vietnamese is very valuable! 💎"
      },
      {
        text: "Cultural Understanding",
        icon: "/images/bulb.svg",
        response: "Understanding culture is beautiful! 🎭"
      },
      {
        text: "Native-like Proficiency",
        icon: "/images/level-4.svg",
        response: "Native-like proficiency is ambitious! 🏆"
      }
    ]
  }
];

interface OnboardingFlowProps {
  onComplete: (answers: Record<number, string>) => void;
}

const OnboardingFlow = ({ onComplete }: OnboardingFlowProps) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [conversation, setConversation] = useState<ConversationMessage[]>([]);

  const handleAnswer = (option: ConversationOption) => {
    const newAnswers = { ...answers, [currentStep]: option.text };
    setAnswers(newAnswers);

    // Create conversation messages
    const userMessage: ConversationMessage = {
      type: 'user',
      content: option.text,
      position: 'right',
      color: 'text-primary'
    };

    // Update conversation with user's answer
    const currentConversation = conversations[currentStep];
    
    // Always reset conversation to show animation
    setConversation([
      {
        type: 'question',
        content: currentConversation.question,
        position: 'left'
      }
    ]);

    // Add user message with delay to show animation
    setTimeout(() => {
      setConversation(prev => [...prev, userMessage]);
      
      // Add Puchi's response after another delay
      setTimeout(() => {
        const puchiMessage: ConversationMessage = {
          type: 'puchi',
          content: option.response,
          position: 'left',
          color: 'text-green-600'
        };
        
        setConversation(prev => [...prev, puchiMessage]);
      }, 400);
    }, 200);
  };

  const handleContinue = () => {
    if (currentStep < conversations.length - 1) {
      setCurrentStep((prev) => prev + 1);
      setConversation([]);
    } else {
      onComplete(answers);
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep((prev) => prev - 1);
      setConversation([]);
    }
  };

  const progress = ((currentStep + 1) / conversations.length) * 100;
  const currentConversation = conversations[currentStep];
  const hasAnswered = answers[currentStep];

  // Initialize conversation with question when no conversation exists
  if (conversation.length === 0) {
    setTimeout(() => {
      setConversation([{
        type: 'question',
        content: currentConversation.question,
        position: 'left'
      }]);
    }, 100);
  }

  return (
    <div className="min-h-screen bg-background flex flex-col p-6 max-w-2xl mx-auto w-full">
      {/* Progress Bar */}
      <div className="mb-8">
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm text-muted-foreground">
            Step {currentStep + 1} of {conversations.length}
          </span>
          <span className="text-sm font-medium">{Math.round(progress)}%</span>
        </div>
        <Progress value={progress} className="h-2" />
      </div>

      {/* Conversation Section with Panda and ChatBubbles */}
      <div className="flex items-start gap-4 mb-4 min-h-[180px]">
        {/* Panda Image */}
        <MotionDiv
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="flex-shrink-0"
        >
          <Image
            src="/images/panda/writing.png"
            alt="Panda writing"
            width={120}
            height={120}
            className="rounded-lg"
          />
        </MotionDiv>

        {/* ChatBubbles Container */}
        <MotionDiv
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex-1 space-y-4"
        >
          {conversation.map((message, index) => (
            <MotionDiv
              key={index}
              initial={{ y: 20, opacity: 0, scale: 0.8 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: index * 0.2 }}
              className={message.position === 'right' ? 'flex justify-end' : 'flex justify-start'}
            >
              <ChatBubble arrowPosition={message.position} width="max-w-md">
                <p className={`text-lg font-medium ${message.color || ''}`}>
                  {message.content}
                </p>
              </ChatBubble>
            </MotionDiv>
          ))}
        </MotionDiv>
      </div>

      {/* Answer Options */}
      <div className="space-y-3 mb-8">
        {currentConversation.options.map((option, index) => (
          <MotionDiv
            key={index}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
          >
            <Button
              variant={answers[currentStep] === option.text ? "primary" : "default"}
              className="w-full justify-start"
              onClick={() => handleAnswer(option)}
            >
              <Image
                src={option.icon}
                alt={option.text}
                width={20}
                height={20}
                className="mr-2"
              />
              {option.text}
            </Button>
          </MotionDiv>
        ))}
      </div>

      <Separator />

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
          {currentStep === conversations.length - 1
            ? "Get Started"
            : "Continue"}
        </Button>
      </div>
    </div>
  );
};

export default OnboardingFlow;