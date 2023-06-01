"use client";
import Link from "next/link";
import { useState } from "react";
import { navBarLinks } from "./utils/navbarLinks";
import MobileMenu from "./MobileMenu";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="font-Antonio left-1/2 -translate-x-1/2  px-5 lg:px-20 py-3 flex items-center justify-between w-screen z-30 fixed top-0 mix-blend-difference">
        <Link href="/">
          <h2>Thomas Barrial</h2>
          <p className="text-xs opacity-50">@Biarritz France</p>
        </Link>
        <div className="hidden md:flex">
          {navBarLinks.map((item) => {
            return (
              <div
                className="group overflow-hidden h-6  flex flex-col"
                key={item.name}
              >
                <Link
                  className="ml-10 group-hover:-translate-y-6 transition transform duration-500"
                  href={item.link}
                >
                  {item.name}
                </Link>
                <Link
                  className="ml-10 -translate-y-1 group-hover:-translate-y-6 transition transform duration-500"
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
