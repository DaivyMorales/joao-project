import { LuBrush } from "react-icons/lu";
import Image from "next/image";
import { FaXTwitter } from "react-icons/fa6";
import { LiaLaptopCodeSolid } from "react-icons/lia";
import { LuHammer } from "react-icons/lu";

import { api } from "@/utils/api";
import { useState } from "react";
import { motion } from "framer-motion";
import {
  Technologies,
  allTechnologies,
  toolsTech,
  Tech,
  frontTech,
  backTech
} from "@/utils/technologies";

export default function Home() {
  const [selectedTech, setSelectedTech] = useState(allTechnologies[0]);

  return (
    <div className="bg-box flex min-h-screen w-full flex-col items-center justify-start pb-20">
      <Image
        className=""
        src="/joao-laptop.svg"
        alt="Joao Laptop Picture"
        width={230}
        height={230}
      />
      <div className="flex flex-col items-center justify-center bg-white">
        {/* <Image
          src="/react-glossy.svg"
          alt="Next.js Image"
          width={100}
          height={100}
          className="absolute right-[200px] top-[100px]"
        />
        <Image
          src="/figma-glossy.svg"
          alt="Next.js Image"
          width={100}
          height={100}
          className="absolute bottom-[300px] left-[50px]"
        />
        <Image
          src="/next-glossy.svg"
          alt="Next.js Image"
          width={100}
          height={100}
          className="absolute bottom-10 right-10"
        />
        <Image
          src="/visual-glossy.svg"
          alt="Next.js Image"
          width={100}
          height={100}
          className="absolute left-0 top-0"
        /> */}
        <div className="relative grid w-full grid-cols-2 bg-white sm:w-[750px]">
          <section className="z-50 col-span-2 flex w-full flex-col items-center justify-center gap-6 border-[1px] border-[#F3F4F8] bg-gradient-to-t from-neutral-50 p-10">
            <div className="flex flex-col items-center justify-center gap-2">
              <h1 className="text-center">
                <span className="text-black">Hey, I am Joao! 👋🏽</span>
              </h1>
              <p className="w-[430px] text-center text-neutral-600">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad
                dicta aliquam facere praesentium.{" "}
              </p>
            </div>
            <div className="flex w-full items-center justify-center gap-4">
              <button className="button-call-to-action bg-black text-white">
                Contact now
              </button>
              <button className="button-call-to-action bg-white text-black hover:bg-neutral-50">
                Twitter
                <FaXTwitter />
              </button>
            </div>
          </section>
          <div className="col-span-2 flex w-full items-center justify-center border-x-[1px] border-b-[1px] border-[#F3F4F8] p-10">
            <p className="font-light">
              {" "}
              Based in Bogota, Colombia 🇨🇴 From anywhere world 🌎
            </p>
          </div>
          <div className="col-span-2 flex w-full items-center justify-center border-x-[1px] border-[#F3F4F8]">
            <div className="h-[100px] w-[2px] bg-neutral-200" />
          </div>
          <div className="z-50 col-span-2 grid h-[600px] w-full grid-cols-3 border-[1px] border-[#F3F4F8]">
            <nav className="col-span-3 flex items-center justify-center gap-3 ">
              <ul className="flex items-center justify-between gap-4 rounded-full border-[1px] border-[#F3F4F8] border-[#F3F4F8] px-1">
                {allTechnologies.map((item: Technologies) => (
                  <li
                    key={item.label}
                    className="flex cursor-pointer items-center justify-center gap-2 rounded-full p-2 "
                    onClick={() => setSelectedTech(item)}
                  >
                    {item === selectedTech ? (
                      ""
                    ) : (
                      <p
                        className={` flex items-center justify-center gap-2 text-[14px] font-light`}
                      >
                        {item.label}
                      </p>
                    )}
                    {item === selectedTech ? (
                      <motion.div
                        className="flex items-center justify-center gap-2 rounded-full bg-black p-2 shadow-lg"
                        layoutId="underline"
                      >
                        <p
                          className={`${item === selectedTech ? "text-white" : "text-black"} flex items-center justify-center gap-2 text-[14px] font-light`}
                        >
                          {/* <{...item.icon} /> */}
                          {item.label}
                        </p>
                      </motion.div>
                    ) : null}
                  </li>
                ))}

                {/* <motion.li className="flex cursor-pointer items-center justify-center gap-2 rounded-full bg-black p-2 text-[14px] font-light text-white ">
                  <LuHammer size={15} />
                  Tools / Others
                </motion.li>

                <motion.li className="flex cursor-pointer items-center justify-center gap-2 rounded-full p-2 text-[14px] font-light ">
                  <LuBrush size={15} /> Front-end
                </motion.li>

                <motion.li className="flex cursor-pointer items-center justify-center gap-2 rounded-full p-2 text-[14px] font-light ">
                  <LiaLaptopCodeSolid size={20} />
                  Back-end
                </motion.li> */}
              </ul>
            </nav>

            {frontTech.map((tool) => (
              <div className="flex items-center justify-center border-r-[1px] border-[#F3F4F8]">
                {
                  <img
                    src={tool.url}
                    alt="technology picture"
                    className="flex w-full items-center  justify-center"
                  />
                }
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
