import React from "react";

function ProjectDetail() {
  return (
    <div className="absolute z-50 flex h-screen w-screen items-end justify-center gap-2 bg-neutral-100 px-2">
      <div className="flex w-full flex-col items-center justify-center gap-3 rounded-t-xl border-[1px] bg-white ">
        <div className="flex w-full items-center gap-2">
          <h3>Omnimoode</h3>{" "}
          <div className="rounded-md bg-red-200 px-2 py-[2px] text-[10px] font-medium text-red-500">
            Project
          </div>
        </div>
        <div className="h-[150px] w-full rounded-lg bg-neutral-500"></div>
        <div className="w-full flex flex-col justify-center items-center">
          <div className="h-[2px] bg-neutral-200 w-[280px] rounded-full"/>
          <div className="flex w-full justify-end gap-2 bg-neutral-100 p-4">
            <button className=" flex items-center justify-center gap-2 rounded-lg border-[1px] border-[#FF4732] bg-[#FF7262] px-3 py-1 text-[10px] font-normal text-white ">
              Cancel
            </button>
            <button className=" flex items-center justify-center gap-2 rounded-lg border-[1px] border-[#FF4732] bg-[#FF7262] px-3 py-1 text-[10px] font-normal text-white ">
              Ok
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectDetail;
