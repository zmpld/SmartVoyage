import Image from "next/image";
import path from "path";
import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const menuOptions = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "Pricing",
    path: "/pricing",
  },
  {
    name: "Contact us",
    path: "/contact-us",
  },
];

function Header() {
  return (
    <div className="flex justify-between items-center p-4">
      {/* Logo */}
      <div className="flex gap-2 items-center">
        <Image src={"/logo.svg"} alt="logo" width={30} height={30} />
        <h2 className="font-bold text-2xl">SmartVoyage</h2>
      </div>
      {/* Menu Options */}
      <div className="flex gap-8 items-center">
        {menuOptions.map((menu, index) => (
          <Link href={menu.path}>
            <h2 className="text-lg hover:scale-105 transition-all hover:text-primary">
              {menu.name}
            </h2>
          </Link>
        ))}
      </div>
      {/* Get Started Button */}
      <Button>Get Started</Button>
    </div>
  );
}

export default Header;
