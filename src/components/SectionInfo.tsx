import Image from "next/image";
import { SignOutButton } from "@clerk/nextjs";
import { currentUser } from "@clerk/nextjs/server";

import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Link } from "@/i18n/routing.public";

const SectionInfo = async () => {
  const user = await currentUser();
  const avt = user.imageUrl;
  const userFullName = user.fullName;

  const heart = "5";
  const gem = "10";
  const streak = "3";

  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center px-4 py-2 rounded-lg hover:bg-foreground/10 cursor-default">
        <Image src="/icons/heart.svg" alt="heart" width={30} height={30} />
        <span className="ml-2 text-xl font-bold text-red-500">{heart}</span>
      </div>

      <div className="flex items-center px-4 py-2 rounded-lg hover:bg-foreground/10 cursor-default">
        <Image src="/icons/gem.svg" alt="heart" width={24} height={30} />
        <span className="ml-2 text-xl font-bold text-blue-400">{gem}</span>
      </div>

      <div className="flex items-center px-4 py-2 rounded-lg hover:bg-foreground/10 cursor-default">
        <Image src="/icons/fire.svg" alt="heart" width={25} height={30} />
        <span className="ml-2 text-xl font-bold">{streak}</span>
      </div>

      <div className="flex items-center w-12">
        <DropdownMenu>
          <DropdownMenuTrigger>
            <Avatar>
              <AvatarImage src={avt} />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="mr-4">
            <DropdownMenuLabel>
              <span className="text-green-500 text-base font-bold">{userFullName}</span>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <Link href="/profile" className="text-base">
                Profile
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Link href="/settings" className="text-base">
                Settings
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <SignOutButton>
                <span className="text-base text-red-500 cursor-pointer">Logout</span>
              </SignOutButton>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
};

export default SectionInfo;
