import React from "react";
import Image from "next/image";
import grid1 from "@/images/layout-1.png";
import grid2 from "@/images/layout-2.png";
import grid3 from "@/images/layout-3.png";
import Link from "next/link";

export default function Grid() {
  return (
    <>
      <section className="grid grid-cols-1 gap-8 text-center lg:text-left">
        <div className="flex flex-col-reverse items-center lg:flex-row lg:gap-16">
          <article className="flex-1">
            <h2 className="text-3xl my-8">
              The learning platform that actually helps
            </h2>
            <p className="mb-8">
              We provide underserved students access to on-demand training and
              mentoring by top industry professional software developers who
              work for the biggest companies in the world.
            </p>
            <Link href="/sign-in" className="btn">
              Start learning
            </Link>
          </article>

          <article className="flex-1">
            <Image src={grid1} width={700} height={700} alt="" />
          </article>
        </div>

        <div className="flex flex-col-reverse items-center lg:flex-row-reverse lg:gap-16">
          <article className="flex-1">
            <h2 className="text-3xl my-8">
              A thriving community you can be a part of
            </h2>
            <p className="mb-8">
              We partner with organizations that are deeply connected to these
              communities to better understand the challenges that students in
              these communities face.
            </p>
            <p>
              Our community partners are crucial to our success, as they are our
              “boots on the ground” and provide us with valuable feedback on
              each student&apos;s progress.
            </p>
          </article>

          <article className="flex-1">
            <Image src={grid2} width={700} height={700} alt="" />
          </article>
        </div>

        <div className="flex flex-col-reverse items-center lg:flex-row lg:gap-16">
          <article className="flex-1">
            <p className="mb-8">
              By working together, we aim to help every student overcome the
              barriers they face and achieve their goals of entering the tech
              industry. We work closely with our partners to provide students
              with the training and support they need, and we use their feedback
              to tailor our support to the individual needs of each student.
            </p>
          </article>

          <article className="flex-1">
            <Image src={grid3} width={700} height={700} alt="" />
          </article>
        </div>
      </section>

      <section className="text-center py-20">
        <h2 className="text-4xl lg:text-6xl mb-8">Ready to dive in?</h2>
        <Link href="/sign-in" className="btn">
          Join community
        </Link>
      </section>
    </>
  );
}
