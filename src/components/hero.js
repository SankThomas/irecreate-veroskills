import React from "react";
import Image from "next/image";
import stars from "@/images/stars.svg";
import hero from "@/images/hero.png";

export default function Hero() {
  return (
    <>
      <section className="max-w-5xl mx-auto py-20">
        <article className="text-center mb-16">
          <h1
            style={{ lineHeight: 1.4 }}
            className="text-4xl lg:text-6xl 2xl:text-7xl mb-8"
          >
            Find a superstar{" "}
            <span>
              <Image
                src={stars}
                width={50}
                height={50}
                className="inline -mt-8"
                alt="stars"
              />
            </span>{" "}
            <br /> software engineer.
          </h1>
          <p
            style={{ lineHeight: 1.8 }}
            className="lg:text-2xl mb-8 max-w-xl mx-auto"
          >
            We offer a direct channel for recruiters to engage and hire our
            tutors and students, opening up a diverse talent pool while making a
            direct impact.
          </p>
          <button className="btn">Book a demo</button>
        </article>

        <article>
          <Image src={hero} width={1200} height={1200} alt="" />
          <p className="text-white text-lg lg:text-3xl font-bold my-8 text-center">
            At VeroSkills, our mission is to address the global tech talent
            deficit by providing underserved individuals with training in
            software engineering.
          </p>
        </article>
      </section>
    </>
  );
}
