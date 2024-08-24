import { MagnifyingGlassIcon } from "@radix-ui/react-icons";
import Image from "next/image";
import { Input } from "./ui/input";
import { Heart, ShoppingBag } from "lucide-react";

export default function Header() {
  return (
    <header className="h-20 container flex items-center justify-between">
      <div className="h-full flex-1 flex items-center gap-20">
        <Image
          src="nike-4-logo-svgrepo-com.svg"
          alt="nike-logo"
          width={78}
          height={78}
        />
        <ul className="flex gap-6 text-secondary">
          <li>Men</li>
          <li>Women</li>
          <li>Kids</li>
          <li>Recent Arrivals</li>
        </ul>
      </div>
      <div className="h-full flex-1 flex items-center justify-end gap-10">
        <div className="flex items-center gap-4">
          <MagnifyingGlassIcon className="w-[32px] h-[32px] text-secondary" />
          <Input placeholder="Search" className="text-secondary" />
        </div>
        <div className="flex gap-4">
          <Heart className="w-[24px] h-[24px] text-secondary" />
          <ShoppingBag className="w-[24px] h-[24px] text-secondary" />
        </div>
      </div>
    </header>
  );
}
