import Image from "next/image";
import React from "react";
import image from "../public/assets/about.jpg";

const About = () => {
  return (
    <div id="about" className="w-full md:h-screen p-2 flex items-center py-16">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className="uppercase text-xl tracking-widest text-[#5651e5]">
            About
          </p>
          <h1 className="py-4">Who I Am</h1>
          <p className="py-2 text-gray-600">
            I am not Your Normal Developer
          </p>
          <p className="py-2 text-gray-600">
            I have Spent the Last 12 years in the first service working as
            professional firefighter & parademic. I have always had a knack for
            technology and working with computers. In 2019 I Started with HTML &
            CSS to make some minor edits on a small website that I was
            Operating. What I thought just a few small edits turned into a lover
            programming
          </p>
          <p className="py-2 text-gray-600">
            Fascinated with how intricate programming can be I was quickly drawn
            to learn more. I started learning JavaScript and was even more
            enthused with making websites Intractive.
          </p>
          <p className="py-2 text-gray-600 underline cursor-pointer">
            CheckOut Some of my Latest Projects
          </p>
        </div>
        <div
          className="w-full pt-3 h-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-between hover:scale-105
        ease-in duration-700"
        >
          <Image src={image} alt="about" height={300} width={700} className="rounded-xl"/>
        </div>
      </div>
    </div>
  );
};

export default About;
