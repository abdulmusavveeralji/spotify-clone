"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { FC } from "react";
import { PiPlay } from "react-icons/pi";

interface ListItemsProps {
  image: string;
  name: string;
  href: string;
}

const ListItem: React.FC<ListItemsProps> = ({ image, name, href }) => {
  const router = useRouter();

  const onClick = () => {
    // add authencation before push
    router.push(href);
  };
  return (
    <button className="relative group flex items-center rounded-md overflow-hidden gap-x-4 bg-neutral-100/10 hover:bg-neutral-100/20 transition pr-4">
      <div className="relative min-h-[64px] min-w-[64px]">
        <Image className="object-cover" src={image} fill={true} alt="image" />
      </div>
      <p className="font-medium truncate py-5">{name}</p>
      <div className="absolute transition rounded-full bg-green-500 p-4 flex items-center justify-center right-5 drop-shadow-md opacity-0 group-hover:opacity-100 hover:scale-110">
        <PiPlay className="text-black" />
      </div>
    </button>
  );
};

export default ListItem;
