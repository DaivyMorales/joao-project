import React, { ReactNode } from "react";
import Image from "next/image";

interface NavbarProps {
  children: ReactNode;
}

function Navbar({ children }: NavbarProps) {
  return (
    <main className="w-full">
      <header className="sticky top-0 z-50">
        <nav className="h-[64px] sticky top-0 flex w-full items-center backdrop-blur backdrop-saturate-200 justify-between  border-neutral-100 px-12 z-50 lg:px-[120px]">
         <h3 className="text-black font-bold">Joaoproject</h3>
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
