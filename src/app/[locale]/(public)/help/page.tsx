import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Link } from "@/i18n/routing";

import { ChevronRight } from "lucide-react";

const HelpPage = () => {
  return (
    <div className="container font-din my-10 space-y-10">
      <div className="font-bold flex gap-2 items-center tracking-wider">
        <span className="text-blue-500 hover:text-blue-400 cursor-pointer">
          HELP CENTER
        </span>
        <ChevronRight className="text-gray-400" size={20} strokeWidth={3} />
        <span className="text-blue-500 hover:text-blue-400 cursor-pointer">
          HOME
        </span>
      </div>
      <h1 className="text-center text-3xl font-bold">
        Frequently Asked Questions
      </h1>

      <div className="max-w-[800px] text-xl mx-auto border-2 rounded-2xl p-6">
        <h2 className="text-sky-500 font-bold pb-4 border-b">Using Puchi</h2>
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger>What is a streak?</AccordionTrigger>
            <AccordionContent className="text-lg space-y-4 text-justify text-gray-600 dark:text-gray-400">
              <p>
                Your streak (flame icon) represents the number of days in a row
                you&apos;ve completed a lesson on Puchi.
              </p>
              <p>
                Language learning is about building goals over time, and the
                streak is a proven way to motivate you to keep learning and
                practicing every day.
              </p>
              <p>
                Tip: Practice reminders can be a great help for remembering to
                do your lessons. In your notification settings you can turn on
                practice reminders and set the time that will work best for you.
              </p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-2">
            <AccordionTrigger>
              What are leaderboards and leagues?
            </AccordionTrigger>
            <AccordionContent className="text-lg space-y-4 text-justify text-gray-600 dark:text-gray-400">
              <p>
                Leaderboards are a fun way to compete with other Puchi learners
                in a weekly contest. As you earn more XP (experience points)
                with each lesson, you&apos;ll rise in the ranks of your
                leaderboard. You&apos;ll face a new group of competitors each
                week. Check out the Leaderboards tab in the app to get the
                competition started!
              </p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-3">
            <AccordionTrigger>
              Does Puchi use any open source libraries?
            </AccordionTrigger>
            <AccordionContent className="text-lg space-y-4 text-justify text-gray-600 dark:text-gray-400">
              <p>
                Yes. You can view our open source attributions and learn more
                from this{" "}
                <Link href="/attribution" className="text-blue-500">
                  page
                </Link>
                .
              </p>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>

      <div className="max-w-[800px] text-xl mx-auto border-2 rounded-2xl p-6">
        <h2 className="text-sky-500 font-bold pb-4 border-b">
          Account Management
        </h2>
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger>
              How do I change my username or email address?
            </AccordionTrigger>
            <AccordionContent className="text-lg space-y-4 text-justify text-gray-600 dark:text-gray-400">
              <p>
                If you want to edit your Puchi username or email address,{" "}
                <Link href="/settings/account" className="text-blue-500">
                  go to your settings
                </Link>{" "}
                and edit the username or email address. Your username appears on
                your weekly leaderboard. Remember to tap “Save changes” when you
                make any changes.
              </p>
              <p>
                If it is not changing, it means it is already taken by another
                Puchi account. All usernames and email addresses are unique. Try
                changing the name again by adding unique letters or numbers to
                try to make it unique and save again. If the email address you
                are attempting to update to is already taken, you may have
                previously created another account with that email address.
              </p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-2">
            <AccordionTrigger>
              How do I find, follow, and block users on Puchi?
            </AccordionTrigger>
            <AccordionContent className="text-lg space-y-4 text-justify text-gray-600 dark:text-gray-400">
              <p>You can connect with other learners on Puchi!</p>
              <p>
                When you follow someone, they&apos;ll show up on your friends
                list and you can encourage each other to stick with your
                language goals!!
              </p>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>

      <div className="flex flex-col items-center gap-8">
        <div className="font-bold">Still unsure about something?</div>
        <Button variant="secondary">SEND FEEDBACK</Button>
      </div>
    </div>
  );
};

export default HelpPage;
