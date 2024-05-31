import React, { ReactNode } from "react";
import Image from "next/image";
import ProjectDetail from "./ProjectDetail";

interface NavbarProps {
  children: ReactNode;
}

function Navbar({ children }: NavbarProps) {
  return (
    <main className="relative w-full">
      {/* <ProjectDetail /> */}
      <header className="sticky top-0 z-40">
        <nav className="sticky top-0 z-50 flex h-[64px] w-full items-center justify-between border-neutral-100  px-12 bg-white lg:px-[120px]">
          <h3 className="font-bold text-black">Daivy</h3>
          <ul>
            <li>
              <button className=" flex items-center justify-center gap-2 rounded-lg border-[1px] border-[#FF4732] bg-[#FF7262] px-3 py-1 text-[10px] font-normal text-white ">
                Work together
              </button>
            </li>
            {/* <li>
              <button className="flex min-w-[100px] items-center justify-center gap-2 rounded-full border-[1px] px-8 py-3 font-medium shadow-sm ">Contact me</button>
            </li> */}
          </ul>
        </nav>
      </header>

      <div>{children}</div>
    </main>
  );
}

export default Navbar;
