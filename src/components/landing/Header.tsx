import { Link } from "@/lib/navigation";
import { Button } from "@/components/ui/button";
import ThemeToggle from "@/components/custom-ui/toggle";
import GithubSVG from "@public/images/github.svg";
import LogoSVG from "@public/images/logo/logo.svg";

const Header = () => {
  return (
    <header className="relative flex justify-center">
      <div className="z-1 flex w-full items-center justify-between gap-2 px-2 sm:px-8">
        <div className="flex flex-1 items-center justify-start gap-1 max-sm:hidden">
          <Button variant="ghost" size="icon" asChild>
            <a
              href="https://github.com/hoan02/puchi"
              target="_blank"
              aria-label="GitHub repo"
              title="Github repo"
            >
              <GithubSVG className="size-6" />
            </a>
          </Button>
          <ThemeToggle />
        </div>
        <Link
          href="/"
          className="focus-visible group flex h-16 w-14 flex-col items-center gap-1 rounded-b-3xl bg-secondary/30 px-[6px] pt-2 text-2xl transition-colors hover:bg-primary/25 dark:bg-card dark:hover:bg-border/70 sm:size-32 sm:rounded-b-4xl sm:pt-4 sm:text-3xl lg:w-36 lg:text-4xl"
          title="Puchi app"
        >
          <LogoSVG className="w-[1.5em] group-hover:animate-bounce" />
          <span className="font-display -tracking-widest max-sm:sr-only">
            Puchi
          </span>
        </Link>
        <div className="flex flex-1 items-center justify-end">
          <div>Chọn ngôn ngữ</div>
        </div>
      </div>
      <div className="fixed bottom-4 right-4 z-50 sm:hidden">
        <ThemeToggle className="size-12 border border-solid border-border bg-card/40 backdrop-blur-lg"></ThemeToggle>
      </div>
    </header>
  );
};

export default Header;
