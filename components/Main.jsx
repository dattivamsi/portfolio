import React from "react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from "react-icons/ai";

const Main = () => {
  return (
    <div id="home" className="w-full h-screen text-center">
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
        <div>
          <p className="uppercase text-sm tracking-widest text-gray-600">
            Let&apos;s Build Something Together
          </p>
          <h1 className="py-4 text-gray-700">
            HI I&apos;m <span className="text-[#5651e5]">Clint</span>
          </h1>
          <h1>A Front-End Developer</h1>
          <p className="py-4 text-gray-600 max-w-[70%] m-auto">
            I&apos;m a front-end web Developer specializing in building (and
            Ocasinally designing) exceptional digital experiences. Currently I&apos;m
            focused on building front-end web applications while back-end
            technologies
          </p>
          <div className="flex items-center justify-between max-w-[330px] m-auto py-5 ">
            <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-500">
              <AiOutlineMail />
            </div>
            <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-500">
              <FaLinkedinIn />
            </div>
            <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-500">
              <FaGithub />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
