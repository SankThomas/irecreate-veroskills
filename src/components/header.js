import React from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "@/images/logo.svg";

export default function Header() {
  return (
    <>
      <header className="flex items-center justify-between">
        <div>
          <Image src={logo} width={150} height={100} alt="logo" />
        </div>

        <nav className="hidden lg:block">
          <ul className="flex gap-10">
            <li>
              <button>Recruitment</button>
            </li>
            <li>
              <button>Learning</button>
            </li>
            <li>
              <button>Community</button>
            </li>
          </ul>
        </nav>

        <ul className="flex items-center gap-10">
          <li>
            <Link
              href="/sign-in"
              className="font-bold hover:opacity-75 transition-opacity duration-150"
            >
              Login
            </Link>
          </li>
          <li>
            <Link
              href="/sign-in"
              className="hidden lg:block border border-[#302b4d] py-2 px-4 rounded-lg hover:bg-white hover:text-[#0c0a13] font-bold transition-al duration-150"
            >
              Get started
            </Link>
          </li>
        </ul>
      </header>
    </>
  );
}
