import Image from "next/image";

export default function Home() {
  return (
    <div className="h-screen flex bg-zinc-900 text-neutral-300">
      <div className="bg-orange-800 w-1/3"></div>

      <div className="">Eduardo Miguel</div>

      <div className="border">
        <Image
          src="/vercel.svg"
          alt="Vercel Logo"
          className="dark:invert"
          width={100}
          height={24}
          priority
        />
      </div>
    </div>
  );
}
