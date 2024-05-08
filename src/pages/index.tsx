import { signIn, signOut, useSession } from "next-auth/react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

import { api } from "@/utils/api";

export default function Home() {
  const hello = api.post.hello.useQuery({ text: "from tRPC" });

  return (
    <div className="flex h-screen w-full flex-col items-center justify-center gap-5">
      <div className="bg-box relative flex h-screen w-[890px] flex-col items-center justify-center gap-3 p-10">
        <Image
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
        />

        <div className="w-full flex flex-col justify-start items-start">
          <Image
            className=""
            src="/joao-laptop.svg"
            alt="Joao Laptop Picture"
            width={250}
            height={250}
          />
          <h1>I'm Joao, a Developer from Bogotá</h1>
          <p>I love creating </p>
          <button className="">Contact now</button>
        </div>
      </div>
    </div>
  );
}
