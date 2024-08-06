"use client";

import { AiOutlinePlus } from "react-icons/ai";
import { TbPlaylist } from "react-icons/tb";

const Library = () => {
  const click = () => {};
  return (
    <div className="flex flex-col">
      <div className="flex items-center justify-between px-5 pt-5">
        <div className="inline-flex items-center gap-x-2">
          <TbPlaylist size={26} className="text-neutral-400" />
          <p className="text-neutral-400 text-md font-medium">Your Library</p>
        </div>
        <AiOutlinePlus onClick={click} size={20} className="text-neutral-400 hover:text-white cursor-pointer transition"/>
      </div>
      <div className="flex flex-col gap-y-2 mt-4 px-3">List of songs!</div>
    </div>
  );
};

export default Library;
