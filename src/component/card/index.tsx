import Image from "next/image";

export function Card() {
  return (
    <div className="blur-lg p-12">
      <Image
        className="rounded-xl"
        src="/cover.jpeg"
        alt=""
        width={500}
        height={500}
      />

      <div className="m-4">
        <strong>iPhone</strong>
        <h1 className="text-4xl font-semibold">Cameras / Good Ones Go Interlude - Medley</h1>
        <p>Drake</p>
      </div>
    </div>
  )
}