import Image from "next/image";

// import { LuBrush } from "react-icons/lu";
// import Image from "next/image";
import { FaXTwitter } from "react-icons/fa6";
// import { LiaLaptopCodeSolid } from "react-icons/lia";
// import { LuHammer } from "react-icons/lu";
// import { FiGithub } from "react-icons/fi";
// import Link from "next/link";
// import { useState } from "react";
import { motion } from "framer-motion";
// import {
//   Technologies,
//   allTechnologies,
//   toolsTech,
//   frontTech,
//   backTech,
// } from "@/utils/technologies";
// import Projects from "./components/Projects";

// export default function Home() {
//   const [selectedTech, setSelectedTech] = useState(allTechnologies[0]);

//   return (
//     <div className="flex h-screen w-full flex-col items-center justify-center p-[43px] ">
//       <div className="bg-box-gradient flex h-full w-full items-center justify-center rounded-xl bg-red-500 to-white">
//         <h1 className="text-white">I'm Joao</h1>
//       </div>

//       <Image
//         className=""
//         src="/joao-laptop.svg"
//         alt="Joao Laptop Picture"
//         width={230}
//         height={230}
//       />
//       <div className="flex bg-red-500 flex-col items-center justify-center">

//        <div className="relative grid w-full grid-cols-2 bg-blue-200 sm:w-[900px]">
//           <section className="z-50 col-span-2 flex w-full flex-col items-center justify-center gap-6 border-[1px] border-[#F3F4F8] bg-gradient-to-t from-neutral-50 p-10">
//             <div className="flex flex-col items-center justify-center gap-2">
//               <h1 className="text-center text-4xl sm:text-6xl">
//                 <span className="text-black">Hey, I am Joao! 👋🏽</span>
//               </h1>
//               <p className=" text-center text-neutral-600 text-[14px]">
//                 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad
//                 dicta aliquam facere praesentium.
//               </p>
//             </div>
//             <div className="flex w-full items-center justify-center gap-4">
//               <button className="button-call-to-action bg-black text-white">
//                 Contact now
//               </button>
//               <button className="button-call-to-action bg-white text-black hover:bg-neutral-50">
//                 Twitter
//                 <FaXTwitter />
//               </button>
//             </div>
//           </section>
//           <div className="col-span-2 flex w-full items-center justify-center border-x-[1px] border-b-[1px] border-[#F3F4F8] p-10">
//             <p className="font-light">
//               {" "}
//               Based in Bogota, Colombia 🇨🇴 From anywhere world 🌎
//             </p>
//           </div>
//           <div className="col-span-2 flex w-full items-center justify-center border-x-[1px] border-[#F3F4F8]">
//             <div className="h-[100px] w-[2px] bg-neutral-200" />
//           </div>
//           <div className="z-50 col-span-2 flex w-full flex-col gap-10 border-[1px] border-[#F3F4F8] py-7 ">
//             <div className="col-span-3">
//               <nav className="col-span-3 flex items-center justify-center gap-3 p-3 ">
//                 <ul className="flex items-center justify-between gap-4 rounded-full  border-[1px] border-[#F3F4F8] border-[#F3F4F8] p-1">
//                   {allTechnologies.map((item: Technologies) => (
//                     <li
//                       key={item.label}
//                       className="flex cursor-pointer items-center justify-center gap-2 rounded-full p-[1px]"
//                       onClick={() => setSelectedTech(item)}
//                     >
//                       {item === selectedTech ? (
//                         ""
//                       ) : (
//                         <p
//                           className={` flex items-center justify-center gap-2 p-1 text-[14px] font-light `}
//                         >
//                           {item.label === "Tools" && (
//                             <>
//                               <LuHammer size={15} />
//                               Tools
//                             </>
//                           )}
//                           {item.label === "Front-end" && (
//                             <>
//                               <LuBrush size={15} />
//                               Front-end
//                             </>
//                           )}
//                           {item.label === "Back-end" && (
//                             <>
//                               <LiaLaptopCodeSolid size={15} />
//                               Back-end
//                             </>
//                           )}
//                         </p>
//                       )}
//                       {item === selectedTech ? (
//                         <motion.div
//                           className="flex items-center justify-center gap-2 rounded-full bg-black p-2 shadow-lg"
//                           layoutId="underline"
//                         >
//                           <p
//                             className={`${item === selectedTech ? "text-white" : "text-neutral-300"} flex items-center justify-center gap-2 text-[14px] font-light `}
//                           >
//                             {item.label === "Tools" && (
//                               <>
//                                 <LuHammer size={15} />
//                                 Tools
//                               </>
//                             )}
//                             {item.label === "Front-end" && (
//                               <>
//                                 <LuBrush size={15} />
//                                 Front-end
//                               </>
//                             )}
//                             {item.label === "Back-end" && (
//                               <>
//                                 <LiaLaptopCodeSolid size={15} />
//                                 Back-end
//                               </>
//                             )}
//                           </p>
//                         </motion.div>
//                       ) : null}
//                     </li>
//                   ))}
//                 </ul>
//               </nav>
//             </div>

//             <div className="grid w-full grid-cols-3">
//               {selectedTech?.label === "Tools" && (
//                 <>
//                   {toolsTech.map((tool) => (
//                     <div className="flex h-[120px] items-center justify-center border-r-[1px]  border-[#F3F4F8]">
//                       <motion.img
//                         initial={{ opacity: 0 }}
//                         animate={{ opacity: 1 }}
//                         transition={{ duration: 0.5 }}
//                         src={tool.url}
//                         alt="technology picture"
//                         width={19}
//                         height={108}
//                         className="flex w-full items-center  justify-center"
//                       />
//                     </div>
//                   ))}
//                 </>
//               )}
//               {selectedTech?.label === "Front-end" && (
//                 <>
//                   {frontTech.map((tool) => (
//                     <div className="flex h-[120px] items-center justify-center border-r-[1px]  border-[#F3F4F8]">
//                       <motion.img
//                         initial={{ opacity: 0 }}
//                         animate={{ opacity: 1 }}
//                         transition={{ duration: 0.5 }}
//                         src={tool.url}
//                         alt="technology picture"
//                         className="flex w-full items-center justify-center"
//                       />
//                     </div>
//                   ))}
//                 </>
//               )}
//               {selectedTech?.label === "Back-end" && (
//                 <>
//                   {backTech.map((tool) => (
//                     <div className="flex h-[120px] items-center justify-center border-r-[1px]  border-[#F3F4F8]">
//                       <motion.img
//                         initial={{ opacity: 0 }}
//                         animate={{ opacity: 1 }}
//                         transition={{ duration: 0.5 }}
//                         src={tool.url}
//                         alt="technology picture"
//                         className="flex w-full items-center justify-center"
//                       />
//                     </div>
//                   ))}
//                 </>
//               )}

//               <div className="col-span-2 p-10">
//                 {selectedTech?.label === "Tools" && (
//                   <motion.p
//                     initial={{ opacity: 0 }}
//                     animate={{ opacity: 1 }}
//                     transition={{ duration: 0.5 }}
//                   >
//                     Tools Lorem ipsum dolor sit amet, consectetur adipisicing
//                     elit. Et est alias sint quidem molestias, nisi consectetur
//                     repellendus dolorem reiciendis quaerat?
//                   </motion.p>
//                 )}
//                 {selectedTech?.label === "Front-end" && (
//                   <motion.p
//                     initial={{ opacity: 0 }}
//                     animate={{ opacity: 1 }}
//                     transition={{ duration: 0.5 }}
//                   >
//                     Frontend Lorem ipsum dolor sit amet, consectetur adipisicing
//                     elit. Et est alias sint quidem molestias, nisi consectetur
//                     repellendus dolorem reiciendis quaerat?
//                   </motion.p>
//                 )}
//                 {selectedTech?.label === "Back-end" && (
//                   <motion.p
//                     initial={{ opacity: 0 }}
//                     animate={{ opacity: 1 }}
//                     transition={{ duration: 0.5 }}
//                   >
//                     Backend Lorem ipsum dolor sit amet, consectetur adipisicing
//                     elit. Et est alias sint quidem molestias, nisi consectetur
//                     repellendus dolorem reiciendis quaerat?
//                   </motion.p>
//                 )}
//               </div>
//               {selectedTech?.label !== "Tools" && (
//                 <div className="flex items-center justify-center">
//                   <Link
//                     href="https://github.com/DaivyMorales"
//                     className=" gap-3 rounded-full border-[1px] bg-white px-6 py-2 hover:bg-neutral-50"
//                   >
//                     {selectedTech?.label === "Front-end" && (
//                       <motion.span
//                         initial={{ opacity: 0 }}
//                         animate={{ opacity: 1 }}
//                         transition={{ duration: 0.5 }}
//                         className="flex items-center justify-center gap-3 text-[14px] font-medium "
//                       >
//                         {" "}
//                         {selectedTech?.label} code <FiGithub />
//                       </motion.span>
//                     )}
//                     {selectedTech?.label === "Back-end" && (
//                       <motion.span
//                         initial={{ opacity: 0 }}
//                         animate={{ opacity: 1 }}
//                         transition={{ duration: 0.5 }}
//                         className="flex items-center justify-center gap-3 text-[14px] font-medium "
//                       >
//                         {" "}
//                         {selectedTech?.label} code <FiGithub />
//                       </motion.span>
//                     )}
//                   </Link>
//                 </div>
//               )}
//             </div>
//           </div>
//          <Projects/>
//         </div>
//       </div>
//     </div>
//   );
// }

import React from "react";
import ProjectsSection from "./components/ProjectsSection";

function index() {
  return (
    <main className="relative z-10 flex w-full flex-col items-center justify-center p-2 lg:px-[120px]">
      <img
        src="/background.svg"
        alt=""
        className="absolute right-0 top-0 h-screen w-full"
      />
      <section className="relative flex h-screen w-full items-start justify-center rounded-xl ">
        <div className="mt-5 flex  flex-col items-center justify-center gap-9 p-4">
          <div className="flex max-w-[500px] flex-col items-center justify-center gap-3">
            <h1 className="text-center text-[40px] font-black text-black lg:text-5xl">
              Hi, I'm Joao, full stack web developer
              <span className="text-[#FF4732]"> building web products</span>
            </h1>
            <p className="text-center font-normal">
              Learn more about my work and what I love. From Colombia to the
              world 🌎, loving the creation of startups 🔥
            </p>
          </div>
          <div className="flex w-full items-center justify-center gap-2 ">
            <button className="button-call-to-action border-[#FF4732] bg-[#FF7262] text-[14px] text-white">
              Contact now
            </button>
            <button className="button-call-to-action bg-white text-[14px]">
              <FaXTwitter /> Twitter
            </button>
          </div>
          <div className="flex w-full flex-col items-center justify-center gap-2">
            <p className="text-[12px] font-medium text-red-300">
              My actual tech stack with +20 technologies
            </p>
            <div className="flex items-center justify-center gap-2">
              <Image
                src="/stack_icons/reactjs.svg"
                alt="Icon"
                width={34}
                height={34}
              />
              <Image
                src="/stack_icons/nextjs.svg"
                alt="Icon"
                width={34}
                height={34}
              />
              <Image
                src="/stack_icons/tailwind.svg"
                alt="Icon"
                width={34}
                height={34}
              />
              <Image
                src="/stack_icons/ts.svg"
                alt="Icon"
                width={34}
                height={34}
              />

              <Image
                src="/stack_icons/prisma.svg"
                alt="Icon"
                width={34}
                height={34}
              />
              <Image
                src="/stack_icons/supabase.svg"
                alt="Icon"
                width={34}
                height={34}
              />
            </div>
          </div>
          <div className="flex w-full items-center justify-center ">
            <Image
              alt="Image"
              width={930.19}
              height={545.38}
              src="/MacBookAir.svg"
              quality={100}
            />
          </div>
        </div>
      </section>

      {/* <button className="rounded-lg bg-[#FF7262] p-3 text-[14px] font-semibold text-white">
        Contact now
      </button> */}
      <ProjectsSection />
    </main>
  );
}

export default index;
