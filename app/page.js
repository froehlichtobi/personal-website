import Image from "next/image";
import Link from "next/link";
import TestComponent from "@/component/TestComponent";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
        <TestComponent />
        <Link href="/dashboard" className="underline">
          Dashboard
        </Link>
        <div className="card card-compact bg-base-100 w-96 shadow-xl">
          <figure>
            <Image
              src="/Breathhold3000_Logo.png"
              alt="Breathhold3000 - Logo"
              width={400}
              height={300}
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Breathhold3000</h2>
            <p>Increase your breathhold time with my first ever project!</p>
            <div className="card-actions justify-center">
              <Link href="https://breath.tobiasfrohlich.com" target="_blank">
                <button className="btn btn-primary">Check it out</button>
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
