import Image from "next/image";
import Link from "next/link";
import StravaData from "@/component/StravaData";
import RechartsLine from "@/component/RechartsLine";

export default function Home() {
  return (
    <div>
      <div className="navbar sticky top-0 z-50 shadow-md bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li>
                <a href="#projects">Projects</a>
              </li>
              <li>
                <a href="#statistics">Statistics</a>
              </li>
              <li>
                <a href="#contact">Contact Me</a>
              </li>
            </ul>
          </div>
          <a href="#" className="btn btn-ghost text-3xl">
            Tobias Fröhlich
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 font-bold">
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#statistics">Statistics</a>
            </li>
            <li>
              <a href="#contact">Contact Me</a>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <label className="swap swap-rotate">
            {/* this hidden checkbox controls the state */}
            <input type="checkbox" />

            {/* sun icon */}
            <svg
              className="swap-on h-10 w-10 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
            </svg>

            {/* moon icon */}
            <svg
              className="swap-off h-10 w-10 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
            </svg>
          </label>
        </div>
      </div>
      <div className="text-center">
        <h2>work in progress!</h2>
        <h2>SPACE</h2>
        <h2>SPACE</h2>
        <h2>SPACE</h2>
        <h2>SPACE</h2>
        <h2>SPACE</h2>
        <h2>SPACE</h2>
        <h2>SPACE</h2>
        <h2>SPACE</h2>
        <h2>SPACE</h2>
        <h2>SPACE</h2>
        <h2>work in progress!</h2>
      </div>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-3xl font-bold mb-4">Projects</h1>
            <main className="flex flex-col gap-8 items-center sm:items-start">
              <div
                className="card card-compact bg-base-100 w-96 shadow-xl scroll-m-44"
                id="projects"
              >
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
                  <p>Increase your breathhold time with my first project!</p>
                  <div className="card-actions justify-center">
                    <Link
                      href="https://breath.tobiasfrohlich.com"
                      target="_blank"
                    >
                      <button className="btn btn-primary">Check it out</button>
                    </Link>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
      </div>
      <section
        id="statistics"
        className="h-screen flex-col items-center justify-center scroll-mt-20"
      >
        <h1 className="text-3xl font-bold text-center mb-4">Statistics</h1>
        <p className="text-center mb-4">
          My last workouts extracted from Strava
        </p>
        <p>work in progress!</p>
        <div className="flex justify-center">
          <StravaData />
        </div>
        <br></br>
      </section>
      <section
        id="contact"
        className="h-auto pt-20 pb-20 bg-base-200 flex flex-col items-center justify-center scroll-mt-20"
      >
        <h1 className="text-3xl font-bold text-center mb-4">Contact Me</h1>
        <div className="flex flex-col items-center">
          <div className="flex gap-4 items-center space-x-8">
            <a
              className="contactme-icons"
              href="https://github.com/froehlichtobi"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/github-mark/github-mark.png"
                alt="GitHub"
                width={80}
                height={60}
              />
            </a>
            <a
              href="https://linkedin.com/in/tobias-froehlich"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/in-logo/LI-In-Bug.png"
                alt="LinkedIn"
                width={80}
                height={60}
              />
            </a>
            <a
              className="contactme-icons"
              href="mailto:maileinfügen?"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/email-icon.svg"
                alt="Email me"
                width={80}
                height={60}
              ></Image>
            </a>
          </div>
        </div>
      </section>
       
    </div>
  );
}
