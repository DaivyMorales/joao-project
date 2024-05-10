import { LuBrush } from "react-icons/lu";
import Image from "next/image";
import { FaXTwitter } from "react-icons/fa6";
import { LiaLaptopCodeSolid } from "react-icons/lia";
import { LuHammer } from "react-icons/lu";

import { api } from "@/utils/api";
import Prisma from "@/utils/svgs/Prisma";
import { useState } from "react";
import { motion } from "framer-motion";
import { Technologies, allTechnologies } from "@/utils/technologies";

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
            <div className="flex items-center justify-center border-r-[1px] border-[#F3F4F8]">
              <svg
                width="54"
                height="50"
                viewBox="0 0 54 80"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_912_3)">
                  <path
                    d="M13.3333 80.0002C20.6933 80.0002 26.6667 74.0268 26.6667 66.6668V53.3335H13.3333C5.97333 53.3335 0 59.3068 0 66.6668C0 74.0268 5.97333 80.0002 13.3333 80.0002Z"
                    fill="#0ACF83"
                  />
                  <path
                    d="M0 39.9998C0 32.6398 5.97333 26.6665 13.3333 26.6665H26.6667V53.3332H13.3333C5.97333 53.3332 0 47.3598 0 39.9998Z"
                    fill="#A259FF"
                  />
                  <path
                    d="M0 13.3333C0 5.97333 5.97333 0 13.3333 0H26.6667V26.6667H13.3333C5.97333 26.6667 0 20.6933 0 13.3333Z"
                    fill="#F24E1E"
                  />
                  <path
                    d="M26.6667 0H40.0001C47.3601 0 53.3334 5.97333 53.3334 13.3333C53.3334 20.6933 47.3601 26.6667 40.0001 26.6667H26.6667V0Z"
                    fill="#FF7262"
                  />
                  <path
                    d="M53.3334 39.9998C53.3334 47.3598 47.3601 53.3332 40.0001 53.3332C32.6401 53.3332 26.6667 47.3598 26.6667 39.9998C26.6667 32.6398 32.6401 26.6665 40.0001 26.6665C47.3601 26.6665 53.3334 32.6398 53.3334 39.9998Z"
                    fill="#1ABCFE"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_912_3">
                    <rect width="53.3333" height="80" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>
            <div className="flex items-center justify-center border-r-[1px] border-[#F3F4F8]">
              <svg
                viewBox="0 0 256 254"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                width="256"
                height="50"
                preserveAspectRatio="xMidYMid"
              >
                <defs>
                  <linearGradient id="c" x1="50%" x2="50%" y1="0%" y2="100%">
                    <stop offset="0%" stop-color="#FFF" />
                    <stop offset="100%" stop-color="#FFF" stop-opacity="0" />
                  </linearGradient>
                  <path
                    id="a"
                    d="M180.828 252.605a15.872 15.872 0 0 0 12.65-.486l52.501-25.262a15.94 15.94 0 0 0 9.025-14.364V41.197a15.939 15.939 0 0 0-9.025-14.363l-52.5-25.263a15.877 15.877 0 0 0-18.115 3.084L74.857 96.35l-43.78-33.232a10.614 10.614 0 0 0-13.56.603L3.476 76.494c-4.63 4.211-4.635 11.495-.012 15.713l37.967 34.638-37.967 34.637c-4.623 4.219-4.618 11.502.012 15.714l14.041 12.772a10.614 10.614 0 0 0 13.56.604l43.78-33.233 100.507 91.695a15.853 15.853 0 0 0 5.464 3.571Zm10.464-183.649-76.262 57.889 76.262 57.888V68.956Z"
                  />
                </defs>
                <mask id="b" fill="#fff">
                  <use xlinkHref="#a" />
                </mask>
                <path
                  fill="#0065A9"
                  d="M246.135 26.873 193.593 1.575a15.885 15.885 0 0 0-18.123 3.08L3.466 161.482c-4.626 4.219-4.62 11.502.012 15.714l14.05 12.772a10.625 10.625 0 0 0 13.569.604L238.229 33.436c6.949-5.271 16.93-.315 16.93 8.407v-.61a15.938 15.938 0 0 0-9.024-14.36Z"
                />
                <path
                  fill="#007ACC"
                  d="m246.135 226.816-52.542 25.298a15.887 15.887 0 0 1-18.123-3.08L3.466 92.207c-4.626-4.218-4.62-11.502.012-15.713l14.05-12.773a10.625 10.625 0 0 1 13.569-.603l207.132 157.135c6.949 5.271 16.93.315 16.93-8.408v.611a15.939 15.939 0 0 1-9.024 14.36Z"
                />
                <path
                  fill="#1F9CF0"
                  d="M193.428 252.134a15.892 15.892 0 0 1-18.125-3.083c5.881 5.88 15.938 1.715 15.938-6.603V11.273c0-8.318-10.057-12.483-15.938-6.602a15.892 15.892 0 0 1 18.125-3.084l52.533 25.263a15.937 15.937 0 0 1 9.03 14.363V212.51c0 6.125-3.51 11.709-9.03 14.363l-52.533 25.262Z"
                />
                <path
                  fill="url(#c)"
                  fill-opacity=".25"
                  d="M180.828 252.605a15.874 15.874 0 0 0 12.65-.486l52.5-25.263a15.938 15.938 0 0 0 9.026-14.363V41.197a15.939 15.939 0 0 0-9.025-14.363L193.477 1.57a15.877 15.877 0 0 0-18.114 3.084L74.857 96.35l-43.78-33.232a10.614 10.614 0 0 0-13.56.603L3.476 76.494c-4.63 4.211-4.635 11.495-.012 15.713l37.967 34.638-37.967 34.637c-4.623 4.219-4.618 11.502.012 15.714l14.041 12.772a10.614 10.614 0 0 0 13.56.604l43.78-33.233 100.506 91.695a15.857 15.857 0 0 0 5.465 3.571Zm10.464-183.65-76.262 57.89 76.262 57.888V68.956Z"
                />
              </svg>
            </div>
            <div className="flex items-center justify-center border-r-[1px] border-[#F3F4F8]">
              <svg
                fill="none"
                height="50"
                viewBox="1.372 -.18543865 324.553 128.18543865"
                width="2500"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g fill="#0c344b">
                  <path d="m199.202 85.75h8.638v-31.662h-8.638zm-.367-39.847c0-2.813 1.567-4.219 4.701-4.219 3.133 0 4.701 1.406 4.701 4.219 0 1.341-.392 2.384-1.175 3.13-.784.746-1.959 1.118-3.526 1.118-3.134 0-4.701-1.416-4.701-4.248z" />
                  <path
                    clip-rule="evenodd"
                    d="m164.253 67.483c2.786-2.36 4.178-5.767 4.178-10.223 0-4.286-1.307-7.51-3.922-9.672-2.615-2.16-6.433-3.242-11.456-3.242h-13.225v41.404h8.779v-14.727h3.767c5.135 0 9.095-1.179 11.879-3.54zm-12.757-3.653h-2.889v-12.29h3.993c2.398 0 4.158.49 5.282 1.472 1.123.982 1.685 2.502 1.685 4.56 0 2.038-.67 3.591-2.011 4.658s-3.36 1.6-6.06 1.6z"
                    fill-rule="evenodd"
                  />
                  <path d="m194.62 53.748c-.774-.17-1.746-.255-2.917-.255-1.964 0-3.781.543-5.451 1.628a11.908 11.908 0 0 0 -3.98 4.291h-.424l-1.275-5.324h-6.542v31.662h8.638v-16.114c0-2.549.769-4.532 2.307-5.948 1.54-1.416 3.687-2.124 6.444-2.124 1.001 0 1.85.095 2.549.283zm40.245 30.02c2.257-1.7 3.385-4.172 3.385-7.42 0-1.567-.273-2.917-.821-4.05-.547-1.133-1.398-2.133-2.549-3.002-1.151-.868-2.964-1.802-5.438-2.803-2.775-1.114-4.573-1.955-5.394-2.521s-1.233-1.236-1.233-2.011c0-1.378 1.275-2.067 3.824-2.067 1.434 0 2.841.217 4.219.65 1.378.436 2.861.992 4.447 1.672l2.605-6.23c-3.606-1.661-7.316-2.492-11.13-2.492-4.003 0-7.093.769-9.273 2.308-2.183 1.539-3.273 3.714-3.273 6.527 0 1.643.26 3.026.78 4.149.518 1.124 1.349 2.12 2.493 2.988 1.14.869 2.931 1.813 5.365 2.832 1.699.718 3.059 1.345 4.079 1.883 1.019.539 1.737 1.02 2.153 1.445.415.425.622.977.622 1.657 0 1.812-1.567 2.718-4.702 2.718-1.529 0-3.299-.255-5.309-.764-2.012-.51-3.819-1.142-5.424-1.898v7.137a22.275 22.275 0 0 0 4.56 1.373c1.624.312 3.587.468 5.891.468 4.492 0 7.867-.85 10.123-2.55zm37.604 1.982h-8.638v-18.493c0-2.284-.383-3.998-1.146-5.14-.766-1.142-1.969-1.714-3.612-1.714-2.208 0-3.813.812-4.814 2.436s-1.501 4.295-1.501 8.015v14.896h-8.638v-31.662h6.599l1.161 4.05h.482c.849-1.454 2.077-2.592 3.681-3.413 1.605-.821 3.446-1.232 5.523-1.232 4.739 0 7.948 1.549 9.629 4.645h.764c.85-1.473 2.101-2.615 3.753-3.427s3.516-1.218 5.593-1.218c3.587 0 6.302.921 8.142 2.761 1.841 1.841 2.761 4.791 2.761 8.85v20.646h-8.666v-18.493c0-2.284-.383-3.998-1.146-5.14-.766-1.142-1.969-1.714-3.612-1.714-2.114 0-3.695.756-4.744 2.266-1.047 1.511-1.571 3.908-1.571 7.193z" />
                  <path
                    clip-rule="evenodd"
                    d="m318.222 81.445 1.671 4.305h6.032v-21.099c0-3.776-1.133-6.589-3.398-8.439-2.266-1.85-5.523-2.776-9.771-2.776-4.436 0-8.477.954-12.121 2.861l2.86 5.834c3.417-1.53 6.391-2.294 8.921-2.294 3.285 0 4.928 1.605 4.928 4.814v1.388l-5.494.17c-4.739.17-8.283 1.053-10.635 2.648-2.35 1.596-3.525 4.074-3.525 7.434 0 3.21.873 5.683 2.619 7.42 1.747 1.737 4.139 2.605 7.18 2.605 2.473 0 4.479-.354 6.017-1.062 1.539-.708 3.035-1.977 4.489-3.809zm-4.22-10.252 3.342-.113v2.605c0 1.908-.6 3.437-1.799 4.588-1.198 1.152-2.799 1.728-4.8 1.728-2.794 0-4.191-1.218-4.191-3.653 0-1.7.613-2.964 1.841-3.795 1.227-.83 3.096-1.284 5.607-1.36zm-218.269 30.336-57.479 17c-1.756.52-3.439-.999-3.07-2.77l20.534-98.34c.384-1.838 2.926-2.13 3.728-.427l38.02 80.736c.717 1.523-.101 3.319-1.733 3.801zm9.857-4.01-44.022-93.482v-.002a7.062 7.062 0 0 0 -6.019-4.022c-2.679-.156-5.079 1.136-6.433 3.335l-47.744 77.33a7.233 7.233 0 0 0 .084 7.763l23.338 36.152c1.391 2.158 3.801 3.407 6.306 3.407.71 0 1.424-.1 2.126-.308l67.744-20.036a7.424 7.424 0 0 0 4.66-4.028 7.264 7.264 0 0 0 -.04-6.11z"
                    fill-rule="evenodd"
                  />
                </g>
              </svg>
            </div>
            <div className="flex items-center justify-center border-r-[1px] border-[#F3F4F8]">
              <Image
                src="/supabase.svg"
                alt="supabase"
                width={160}
                height={50}
              />
            </div>
            <div className="flex items-center justify-center border-r-[1px] border-[#F3F4F8]">
              <Image src="/git.svg" alt="git" width={90} height={50} />
            </div>
            <div className="flex items-center justify-center border-r-[1px] border-[#F3F4F8]">
              <Image src="/vercel.svg" alt="vercel" width={130} height={50} />
            </div>
            <div className="">p</div>
          </div>
        </div>
      </div>
    </div>
  );
}
