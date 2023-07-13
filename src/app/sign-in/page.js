import React from "react";
import Image from "next/image";
import hero from "@/images/login.svg";
import { AiFillGithub } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";

export default function Page() {
  return (
    <>
      <section className="grid place-items-center h-screen lg:grid-cols-2">
        <article>
          <ul className="flex items-center justify-center gap-2">
            <li>
              <button className="flex items-center gap-2 bg-blue-600 text-white text-sm py-2 px-4 rounded-lg hover:bg-blue-700 transition-all duration-150">
                <AiFillGithub /> GitHub
              </button>
            </li>
            <li>
              <button className="flex items-center gap-2 bg-blue-600 text-white text-sm py-2 px-4 rounded-lg hover:bg-blue-700 transition-all duration-150">
                <FcGoogle /> Google
              </button>
            </li>
            <li>
              <button className="bg-transparent border border-blue-600 text-white text-sm py-2 px-4 rounded-lg hover:bg-opacity-75 transition-all duration-150">
                User Login
              </button>
            </li>
          </ul>

          <p className="text-sm text-center my-8">or</p>

          <div>
            <form className="flex flex-col gap-6">
              <article>
                <label
                  htmlFor="email"
                  className="text-white font-bold text-sm mb-2 block"
                >
                  Email *
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Enter email address"
                  required
                  className="bg-slate-600 placeholder-slate-400 py-2 px-4 rounded border border-slate-600 w-full"
                />
              </article>

              <article>
                <p className="text-white flex items-center justify-between text-sm mb-2">
                  <label htmlFor="password" className="font-bold block">
                    Password *
                  </label>{" "}
                  <button>Forgot password</button>
                </p>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Enter password address"
                  required
                  className="bg-slate-600 placeholder-slate-400 py-2 px-4 rounded border border-slate-600 w-full"
                />
              </article>

              <button className="btn" type="submit">
                Sign In
              </button>
            </form>
          </div>
        </article>

        <article className="hidden lg:block">
          <Image src={hero} width={1400} height={900} alt="home" />
        </article>
      </section>
    </>
  );
}
