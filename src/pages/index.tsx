import { signIn, signOut, useSession } from "next-auth/react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { FaXTwitter } from "react-icons/fa6";

import { api } from "@/utils/api";

export default function Home() {
  const hello = api.post.hello.useQuery({ text: "from tRPC" });

  return (
    <div className="bg-box flex h-screen w-full flex-col items-center justify-start ">
      <Image
        className=""
        src="/joao-laptop.svg"
        alt="Joao Laptop Picture"
        width={230}
        height={230}
      />
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
        {/* <div className="absolute  w-full h-[90px] bottom-0 bg-black blur-[90px] opacity-30  "/> */}

        <div className="z-50 col-span-2 flex w-full flex-col items-center justify-center gap-6 border-[1px] border-[#F3F4F8] bg-gradient-to-t from-neutral-50 p-10">
          <div className="flex flex-col items-center justify-center gap-2">
            <h1 className="text-center">
              <span className="text-black">Hey, I am Joao! 👋🏽</span>
            </h1>
            <p className="w-[430px] text-center text-neutral-600">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad dicta
              aliquam facere praesentium.{" "}
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
        </div>
        <div className="col-span-2 flex w-full items-center justify-center border-x-[1px] border-b-[1px] border-[#F3F4F8] p-10">
          <p className="font-bold">
            {" "}
            Based in Bogota, Colombia 🇨🇴 From anywhere world 🌎
          </p>
        </div>
      </div>
      <div className="bg-neutral-200 w-[2px] h-[500px]"/>
      <div className="relative grid w-full grid-cols-2 bg-white sm:w-[750px]"></div>
    </div>
  );
}
