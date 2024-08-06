import Link from "next/link";
import { IconType } from "react-icons";
import { twMerge } from "tailwind-merge";

interface SidebarItemsProps {
  label: string;
  href: string;
  icon: IconType;
  active?: boolean;
}

const SidebarItems: React.FC<SidebarItemsProps> = ({
  label,
  href,
  icon: Icon,
  active,
}) => {
  return (
    <Link
      href={href}
      className={twMerge(
        `flex flex-row h-auto items-center w-full gap-x-4 text-md font-medium cursor-pointer hover:text-white transition text-neutral-400 py-1`,
        active && "text-white"
      )}
    >
      <Icon size={26} />
      <p className="truncate w-full">{label}</p>
    </Link>
  );
};

export default SidebarItems;
