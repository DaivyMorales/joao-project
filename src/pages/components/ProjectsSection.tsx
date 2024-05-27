import React from "react";
import { motion } from "framer-motion";

export default function ProjectsSection() {
  return (
    <section className="mt-[220px] grid h-screen w-full grid-cols-1 gap-6 px-3 lg:grid-cols-3">
      <div className="flex flex-col items-start justify-center gap-5 ">
        <h2 className="text-3xl sm:text-5xl">Projects made entirely by me</h2>
        <p>
          Deploy automatically <strong>from git</strong> or with{" "}
          <strong>our CLI</strong>
        </p>
        <p>
          <strong>Wide range</strong> support for the most popular frameworks
        </p>
        <p>
          <strong>Previews</strong> for every push
        </p>
        <p>
          <strong>Automatic HTTPS</strong> for all your domains
        </p>
      </div>
      <div className="col-span-2 grid h-full w-full grid-cols-1 gap-3 md:grid-cols-2">
        <div className="flex flex-col items-center cursor-pointer justify-center gap-4 md:items-end">
          <motion.img
            initial={{ opacity: 0, scale: 0.7, rotate: "3 deg" }}
            whileInView={{ opacity: 1, scale: 1, rotate: "0deg" }}
            whileHover={{ scale: 1.1, rotate: "3deg" }}
            transition={{ duration: 0.2 }}
            src="/projects/Abframe.svg"
            width={343}
            height={192}
            alt="Abframe"
          />
          <button className=" flex items-center justify-center gap-2 rounded-lg border-[1px] border-neutral-200 bg-white px-3 py-1 text-[10px] font-normal text-neutral-600 ">
            See more
          </button>
        </div>
        <div className="flex flex-col items-center cursor-pointer justify-center gap-4 md:items-end">
          <motion.img
            initial={{ opacity: 0, scale: 0.7, rotate: "3deg" }}
            whileInView={{ opacity: 1, scale: 1, rotate: "0deg" }}
            whileHover={{ scale: 1.1, rotate: "3deg" }}
            transition={{ duration: 0.2 }}
            src="/projects/Omnimoode.svg"
            width={343}
            height={192}
            alt="Abframe"
          />
          <button className=" text-neutrl-600 flex items-center justify-center gap-2 rounded-lg border-[1px] border-neutral-200 bg-white px-3 py-1 text-[10px] font-normal ">
            See more
          </button>
        </div>
        <div className="flex flex-col items-center cursor-pointer justify-center gap-4 md:items-end">
          <motion.img
            initial={{ opacity: 0, scale: 0.7, rotate: "3deg" }}
            whileInView={{ opacity: 1, scale: 1, rotate: "0deg" }}
            whileHover={{ scale: 1.1, rotate: "3deg" }}
            transition={{ duration: 0.2 }}
            src="/projects/Noty.svg"
            width={343}
            height={192}
            alt="Abframe"
          />
          <button className=" text-neutrl-600 flex items-center justify-center gap-2 rounded-lg border-[1px] border-neutral-200 bg-white px-3 py-1 text-[10px] font-normal ">
            See more
          </button>
        </div>
        <div className="flex flex-col items-center cursor-pointer justify-center gap-4 md:items-end">
          <motion.img
            initial={{ opacity: 0, scale: 0.7, rotate: "3deg" }}
            whileInView={{ opacity: 1, scale: 1, rotate: "0deg" }}
            whileHover={{ scale: 1.1, rotate: "3deg" }}
            transition={{ duration: 0.2 }}
            src="/projects/Datshare.svg"
            width={343}
            height={192}
            alt="Abframe"
          />
          <button className=" text-neutrl-600 flex items-center justify-center gap-2 rounded-lg border-[1px] border-neutral-200 bg-white px-3 py-1 text-[10px] font-normal ">
            See more
          </button>
        </div>
        <div className="flex flex-col items-center cursor-pointer justify-center gap-4">
          <motion.img
            initial={{ opacity: 0, scale: 0.7, rotate: "3deg" }}
            whileInView={{ opacity: 1, scale: 1, rotate: "0deg" }}
            whileHover={{ scale: 1.1, rotate: "3deg" }}
            transition={{ duration: 0.2 }}
            src="/projects/Chronia.svg"
            width={343}
            height={192}
            alt="Abframe"
          />
          <div className="flex w-full items-center justify-end gap-2">
            <button className=" text-neutrl-600 flex items-center justify-center gap-2 rounded-lg border-[1px] border-neutral-200 bg-white px-3 py-1 text-[10px] font-normal ">
              See more
            </button>
          </div>
        </div>
        <div className="flex flex-col items-center cursor-pointer justify-center gap-4 md:items-end">
          <motion.img
            initial={{ opacity: 0, scale: 0.7, rotate: "3deg" }}
            whileInView={{ opacity: 1, scale: 1, rotate: "0deg" }}
            whileHover={{ scale: 1.1, rotate: "3deg" }}
            transition={{ duration: 0.2 }}
            src="/projects/Listfy.svg"
            width={343}
            height={192}
            alt="Abframe"
          />
          <button className=" text-neutrl-600 flex items-center justify-center gap-2 rounded-lg border-[1px] border-neutral-200 bg-white px-3 py-1 text-[10px] font-normal ">
            See more
          </button>
        </div>
      </div>
    </section>
  );
}
