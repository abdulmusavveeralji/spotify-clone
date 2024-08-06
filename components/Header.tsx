"use client";

import { useRouter } from "next/navigation";
import { BiSearch } from "react-icons/bi";
import { HiHome } from "react-icons/hi";
import { RxCaretLeft, RxCaretRight } from "react-icons/rx";
import { twMerge } from "tailwind-merge";
import Button from "./Button";

interface HeaderProps {
  children: React.ReactNode;
  className?: string;
}

const Header: React.FC<HeaderProps> = ({ children, className }) => {
  const router = useRouter();
  console.log(router);

  return (
    <div
      className={twMerge(
        `h-fit bg-gradient-to-b from-emerald-800 p-6`,
        className
      )}
    >
      <div className="w-full mb-4 flex items-center justify-between">
        <div className="hidden md:flex gap-x-2 items-center">
          <button
            onClick={() => router.back()}
            className="bg-black rounded-full flex items-center justify-center hover:opacity-75 transition"
          >
            <RxCaretLeft className="text-white" size={35} />
          </button>
          <button
            onClick={() => router.forward()}
            className="bg-black rounded-full flex items-center justify-center hover:opacity-75 transition"
          >
            <RxCaretRight className="text-white" size={35} />
          </button>
        </div>
        <div className="flex md:hidden gap-x-2 items-center">
          <div className="rounded-full bg-white p-2 items-center justify-center hover:opacity-75 transition">
            <HiHome size={20} className="text-black" />
          </div>
          <div className="rounded-full bg-white p-2 items-center justify-center hover:opacity-75 transition">
            <BiSearch size={20} className="text-black" />
          </div>
        </div>
        <div className="flex items-center justify-between gap-x-4">
          <>
            <div>
              <Button
                onClick={() => {}}
                className="bg-transparent font-medium text-neutral-300"
              >
                Sign up
              </Button>
            </div>

            <div>
              <Button onClick={() => {}} className="bg-white px-6 py-2">
                Login
              </Button>
            </div>
          </>
        </div>
      </div>
      {children}
    </div>
  );
};

export default Header;
