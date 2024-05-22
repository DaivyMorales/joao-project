import React, { ReactNode } from "react";

interface NavbarProps {
  children: ReactNode;
}

function Navbar({ children }: NavbarProps) {
  return (
    <main className="w-full ">
      {/* <header className="bg-neutral-50 p-4">
        <nav className="flex w-full justify-between px-12">
          <h4 className="text-xl font-semibold">Joao</h4>
          <ul>
            <li>
              <button className="flex min-w-[100px] items-center justify-center gap-2 rounded-full border-[1px] px-8 py-3 font-medium shadow-sm ">Contact me</button>
            </li>
          </ul>
        </nav>
      </header> */}

      <div>{children}</div>
    </main>
  );
}

export default Navbar;
