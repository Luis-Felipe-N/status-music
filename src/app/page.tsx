import { Card } from "@/component/card";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-[conic-gradient(at_top,_var(--tw-gradient-stops))] from-purple-400 to-yellow-400">
      <div className="p-8 max-w-md bg-slate-50/15 rounded-3xl">
      <Image
        className="rounded-xl"
        src="/cover.jpeg"
        alt=""
        width={500}
        height={500}
      />

      <div className="my-4 overflow-hidden">
        <strong>iPhone</strong>
        <h1 className="text-3xl font-semibold whitespace-nowrap">Cameras / Good Ones Go Interlude - Medley</h1>
        <p className="text-lg">Drake</p>
      </div>

      <div className="flex justify-between items-center gap-2">
        <span>0:58</span>
        <div className="h-3 w-full bg-slate-100/35 rounded-full overflow-hidden">
          <div className="h-full w-[20%] bg-slate-100">
            
          </div>
        </div>
        <span>-7:14</span>
      </div>

      <div className="flex justify-between items-center gap-2">
        <span>0:58</span>
        <div className="h-3 w-full bg-slate-100/35 rounded-full overflow-hidden">
          <div className="h-full w-[20%] bg-slate-100">
            
          </div>
        </div>
        <span>-7:14</span>
      </div>
    </div>
    </main>
  );
}
