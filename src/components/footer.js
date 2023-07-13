import React from "react";
import Image from "next/image";
import logo from "@/images/logo.svg";

export default function Footer() {
  return (
    <>
      <footer className="border-t border-slate-700 py-8 flex flex-wrap gap-4 justify-between items-center">
        <div>
          <Image src={logo} width={150} height={100} alt="logo" />
        </div>

        <ul className="flex gap-8">
          <li>
            <button>Terms of Use</button>
          </li>
          <li>
            <button>Privacy Policy</button>
          </li>
        </ul>

        <p className="text-base">© 2023 VeroSkills. All rights reserved</p>
      </footer>
    </>
  );
}
