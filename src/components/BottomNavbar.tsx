import Image from "next/image";
import Link from "next/link";

import { navigationList } from "@/constants/navigation";

const BottomNavBar = () => {
  return (
    <div className="sm:hidden w-full bg-gray-300 p-4 flex justify-around">
      {navigationList.map((item) => (
        <Link key={item.slug} href={`/${item.slug}`}>
          <Image src={item.icon} alt={item.label} width={32} height={32} />
        </Link>
      ))}
    </div>
  );
};

export default BottomNavBar;
