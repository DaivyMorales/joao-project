import React, { ReactNode } from "react";

interface NavbarProps {
  children: ReactNode;
}

function Navbar({ children }: NavbarProps) {
  return (
    <main className="w-full ">
      <header className="bg-neutral-50 p-4">
        <nav className="flex w-full justify-between px-12">
          <h4 className="font-semibold text-xl">Joao</h4>
          <ul>
            <li>Contact me</li>
          </ul>
        </nav>
      </header>

      <div>{children}</div>
    </main>
  );
}

export default Navbar;
