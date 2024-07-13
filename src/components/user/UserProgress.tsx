import NextImage from "next/image";
import { InfinityIcon, Ban } from "lucide-react";

import { Link } from "@/lib/navigation";
import { Button } from "@/components/ui/button";
import { getUserProgress } from "@/db/queries/userProgress";

type UserProgressProps = {
  hasActiveSubscription?: boolean;
  plain?: boolean;
};

const UserProgress = async ({
  hasActiveSubscription,
  plain,
}: UserProgressProps) => {
  const userProgress = await getUserProgress();

  const { points = 0, hearts = 0, activeCourse } = userProgress ?? {};
  const { title = "Select course", altCode } = activeCourse ?? {};

  return (
    <div className="flex w-full items-center justify-between gap-x-2">
      <Button
        variant="ghost"
        className={plain ? "dark:hover:bg-black/10" : "group"}
        asChild
      >
        <Link href="/courses">
          {altCode ? (
            <NextImage
              src={`/images/flag/${altCode}.svg`}
              alt={title}
              width={32}
              height={32}
              className="rounded-md border-2 border-border/80 dark:border-muted-foreground"
            />
          ) : (
            <span
              className={`rounded-md border-2 border-current px-2 py-[2px] text-border ${
                !plain && "group-hover:text-foreground/85"
              }`}
            >
              <Ban className="size-5" />
              <span className="sr-only">{title}</span>
            </span>
          )}
        </Link>
      </Button>
      <Button
        variant="ghost"
        className={
          plain ? "text-inherit dark:hover:bg-black/10" : "text-orange-500"
        }
        asChild
      >
        <Link href="/shop">
          <NextImage
            src="/icons/xp.svg"
            alt="points"
            width={28}
            height={28}
            className="mr-2"
          />
          {points}
        </Link>
      </Button>
      <Button
        variant="ghost"
        className={
          plain ? "text-inherit dark:hover:bg-black/10" : "text-rose-500"
        }
        asChild
      >
        <Link href="/shop">
          <NextImage
            src="/icons/heart.svg"
            alt="hearts"
            width={22}
            height={22}
            className="mr-2"
          />
          {hasActiveSubscription ? (
            <InfinityIcon className="size-4" strokeWidth={3} />
          ) : (
            hearts
          )}
        </Link>
      </Button>
    </div>
  );
};

export default UserProgress;
