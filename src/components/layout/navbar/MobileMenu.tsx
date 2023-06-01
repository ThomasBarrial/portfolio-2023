import { AnimatePresence } from "framer-motion";
import { navBarLinks } from "./utils/navbarLinks";
import AnimUp from "@/components/animated/AnimUp";
import Link from "next/link";
import { Dispatch, SetStateAction } from "react";

interface IProps {
  isOpen: Boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}

function MobileMenu({ isOpen, setIsOpen }: IProps) {
  return (
    <div
      className={`fixed h-screen translate-x-full w-screen z-20 transition ease-in-out duration-700 bg-background ${
        isOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <button
        onClick={() => setIsOpen(false)}
        className="font-Antonio w-full flex justify-end p-5"
      >
        <span>CLOSE</span>
      </button>

      <div className=" flex flex-col items-start  font-Humane text-[10rem] leading-[0.80] pt-10">
        <>
          {navBarLinks.map((item, index) => {
            return (
              <div key={item.name}>
                <AnimatePresence>
                  {isOpen && (
                    <AnimUp>
                      <Link
                        onClick={() => setIsOpen(false)}
                        className="ml-10"
                        href={item.link}
                      >
                        {item.name}
                      </Link>
                    </AnimUp>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </>
      </div>
    </div>
  );
}

export default MobileMenu;
