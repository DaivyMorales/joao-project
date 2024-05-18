import { IoLogoVercel } from "react-icons/io5";
import { IoLogoGithub } from "react-icons/io5";
import { TiWarningOutline } from "react-icons/ti";

function Projects() {
  return (
    <section className="z-50 col-span-2 grid h-screen w-full grid-cols-1 grid-rows-3 bg-white">
      <div className="flex flex-col items-center justify-start border-r-[1px] border-[#F3F4F8] p-1">
        <div className="flex w-full items-center justify-center p-10">
          <h2>Impactful Projects Achievements</h2>
        </div>
        <ul className="flex flex-col items-center justify-center w-full gap-3 px-4 ">
          <li className="flex w-full items-center gap-2  text-[14px] font-light">
            <span className="flex items-center justify-center">
              <IoLogoGithub size={20} />
            </span>
            <span>
              The code is stored on <strong>GitHub</strong> and deployed on{" "}
              <strong>Vercel</strong>
            </span>
          </li>
          <li className="w-full text-[14px] font-light ">
            Projects since <strong>2022</strong> to actuality
          </li>
          <li className=" flex items-center justify-start gap-2 w-full text-[14px] font-light ">
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="h-[20px] w-[20px]  "
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z"
                />
              </svg>
            </span>{" "}
            Some project doesn't work in its deploy
          </li>
          
        </ul>

        <div className="w-full bg-red-500 h-full">ey</div>
      </div>
    </section>
  );
}

export default Projects;
