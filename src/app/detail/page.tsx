import { Card } from "@/component/card";
import Image from "next/image";
import Link from "next/link";
import { BiSearch } from "react-icons/bi";

import { FaBackward, FaForward, FaHouseSignal, FaPause, FaVolumeHigh, FaVolumeOff } from "react-icons/fa6";

export default function Detail() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24 bg-[conic-gradient(at_top,_var(--tw-gradient-stops))] from-purple-400 to-yellow-400">
      <form className="max-w-5xl w-full" action="">
        <Link href={"/"}>HOME</Link>
        <div>
          <div
            className={
              `transition px-4 pl-6 h-16  bg-slate-100/35 rounded-2xl focus-within:outline outline-offset-2 outline-2 flex items-center gap-2 w-full`}
          >
            <span className="whitespace-nowrap text-zinc-50">
              <BiSearch size={30} />
            </span>
            <input
              type="text"
              className="w-full h-full bg-transparent outline-0"
              autoCorrect={false}
            />
          </div>
        </div>
      </form>
      <div className="p-8 max-w-md bg-slate-50/15 rounded-3xl mt-8">
        <Image
          className="rounded-xl"
          src="/cover.jpeg"
          alt=""
          width={500}
          height={500}
        />
        <img  className="rounded-xl"
          src="/cover.jpeg" />

      <div className="my-4 overflow-hidden">
         <strong className="opacity-65">iPhone</strong>
        <h1 className="text-3xl font-semibold whitespace-nowrap m-0">Cameras / Good Ones Go Interlude - Medley</h1>
        <p className="text-lg opacity-65 m-0">Drake</p>
      </div> 

      <div className="flex justify-between items-center gap-4 opacity-85">
        <span>0:58</span>
        <div className="h-3 w-full bg-slate-100/35 rounded-full overflow-hidden">
          <div className="h-full w-[20%] bg-slate-100">
          </div>
        </div>
        <span>-7:14</span>
      </div>

      <div className="flex items-center gap-4 justify-center my-8">
        <FaBackward size={40} />
        <FaPause size={58} />

        <span className="flex items-center gap-2 relative">
          <FaForward size={40} className="" />

          <FaHouseSignal size={40} className="absolute -right-16 top-0 bottom-0" />
        </span>
      </div>

      <div className="flex justify-between items-center gap-4 opacity-65 mb-4">
        <span>
        <FaVolumeOff size={24} />
        </span>
        <div className="h-3 w-full bg-slate-100/35 rounded-full overflow-hidden">
          <div className="h-full w-[20%] bg-slate-100">
            
          </div>
        </div>
        <span>
          <FaVolumeHigh size={24} />
        </span>
      </div>
    </div>
    </main>
  );
}
