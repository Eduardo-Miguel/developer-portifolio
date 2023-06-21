import Image from "next/image";

export default function Home() {
  return (
    <div className="relative h-screen flex bg-zinc-900 text-neutral-300 items-center justify-center">
      <div style={{ flex: "35% 1" }} className="h-full bg-orange-800"></div>

      <div
        style={{ left: "35%", transform: "translateX(-50%)" }}
        className="absolute border rounded-full"
      >
        <Image
          src="/vercel.svg"
          alt="Vercel Logo"
          className="dark:invert m-auto"
          width={100}
          height={24}
          priority
        />
      </div>

      <div style={{ flex: "65% 1" }} className="flex justify-center items-center h-full">
        <div>
          <p>Eduardo Miguel</p>
        </div>
      </div>
    </div>
  );
}
