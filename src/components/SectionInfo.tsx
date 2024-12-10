import Image from "next/image";
import { SignOutButton } from "@clerk/nextjs";
import { currentUser } from "@clerk/nextjs/server";

import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Card } from "./ui/card";
import { Link } from "@/i18n/routing";

const SectionInfo = async () => {
  const user = await currentUser();
  const avt = user.imageUrl;
  const userFullName = user.fullName;

  const heart = "5";
  const gem = "10";
  const streak = "3";

  return (
    <div className="flex items-center justify-between w-full">
      <div className="flex items-center p-2 rounded-lg hover:bg-foreground/10 cursor-default">
        <Image src="/icons/heart.svg" alt="heart" width={30} height={30} />
        <span className="ml-2 text-xl font-bold text-red-500">{heart}</span>
      </div>

      <div className="flex items-center p-2 rounded-lg hover:bg-foreground/10 cursor-default">
        <Image src="/icons/gem.svg" alt="heart" width={24} height={30} />
        <span className="ml-2 text-xl font-bold text-blue-400">{gem}</span>
      </div>

      <div className="flex items-center p-2 rounded-lg hover:bg-foreground/10 cursor-default">
        <Image src="/icons/fire.svg" alt="heart" width={25} height={30} />
        <span className="ml-2 text-xl font-bold">{streak}</span>
      </div>

      <div className="flex items-center w-12 relative">
        <div className="relative group">
          <Avatar className="m-2">
            <AvatarImage src={avt} />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <Card className="absolute right-0 w-40 group-hover:opacity-100 transition-opacity duration-200 group-hover:block hidden">
            <div className="p-2">
              <span className="text-green-500 text-base font-bold">
                {userFullName}
              </span>
            </div>
            <div className="border-t">
              <div className="p-2">
                <Link href="/profile" className="w-full">Profile</Link>
              </div>
              <div className="p-2">
                <Link href="/settings">Settings</Link>
              </div>
              <div className="p-2">
                <SignOutButton>
                  <span className="text-base text-red-500 cursor-pointer">
                    Logout
                  </span>
                </SignOutButton>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default SectionInfo;
