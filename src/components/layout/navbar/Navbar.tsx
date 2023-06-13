"use client";
import Link from "next/link";
import { useState } from "react";
import { navBarLinks } from "../../../../utils/navbarLinks";
import MobileMenu from "./MobileMenu";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="fixed left-1/2 top-0 z-30 flex w-screen max-w-[150rem] -translate-x-1/2 items-center justify-between px-5 py-3 font-Antonio mix-blend-difference lg:px-20">
        <Link href="/">
          <h2>Thomas Barrial</h2>
          <p className="text-xs opacity-50">@Anglet France</p>
        </Link>
        <div className="hidden md:flex">
          {navBarLinks.map((item) => {
            return (
              <div
                className="group flex h-6  flex-col overflow-hidden"
                key={item.name}
              >
                <Link
                  className="ml-10 transform transition duration-500 group-hover:-translate-y-6"
                  href={item.link}
                >
                  {item.name}
                </Link>
                <Link
                  className="ml-10 -translate-y-1 transform transition duration-500 group-hover:-translate-y-6"
                  href={item.link}
                >
                  {item.name}
                </Link>
              </div>
            );
          })}
        </div>
        <button className="flex md:hidden" onClick={() => setIsOpen(true)}>
          MENU
        </button>
      </div>
      <MobileMenu isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  );
}

export default Navbar;
