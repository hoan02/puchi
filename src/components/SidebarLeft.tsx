import Image from "next/image";
import Link from "next/link";

import { navigationList } from "@/constants/navigation";

const SidebarLeft = () => {
  return (
    <div className="hidden sm:flex sm:w-16 lg:w-64 bg-gray-200 p-4 flex-col items-center lg:items-start space-y-4">
      {navigationList.map((item) => (
        <Link key={item.slug} href={`${item.slug}`} className="flex items-center space-x-2">
          <Image src={item.icon} alt={item.label} width={32} height={32} />
          <span className="hidden lg:inline capitalize">{item.label}</span>
        </Link>
      ))}
    </div>
  );
};

export default SidebarLeft;
