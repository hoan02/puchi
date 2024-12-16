import Image from "next/image";

const ItemsInfo = async () => {
  const heart = "5";
  const gem = "10";
  const streak = "3";

  return (
    <div className="flex items-center justify-between w-full">
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
    </div>
  );
};

export default ItemsInfo;
