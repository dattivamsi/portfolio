import Image from "next/image";
import React from "react";
import img1 from "../public/assets/html.png";
import img2 from "../public/assets/css.png";
import img3 from "../public/assets/javascript.png";
import img4 from "../public/assets/nextjs.png";
import img5 from "../public/assets/react.png";
import img6 from "../public/assets/tailwind.png";

const Skills = () => {
  return (
    <div id="skills" className="w-full h-screen p-2">
      <div className="max-w-[1240px] mx-auto  flex flex-col justify-center h-full">
        <p className="uppercase text-xl tracking-widest text-[#5651e5]">
          Skills
        </p>
        <h1 className="py-4">Who I Am</h1>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-500">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={img1} alt="" height={64} width={64} />
              </div>
              <div className="flex flex-col items-center justify-center">
                <p>HTML</p>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-500">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={img2} alt="" height={64} width={64} />
              </div>
              <div className="flex flex-col items-center justify-center">
                <p>CSS</p>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-500">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={img3} alt="" height={64} width={64} />
              </div>
              <div className="flex flex-col items-center justify-center">
                <p>JavaScript</p>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-500">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={img4} alt="" height={64} width={64} />
              </div>
              <div className="flex flex-col items-center justify-center">
                <p>Next Js</p>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-500">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={img5} alt="" height={64} width={64} />
              </div>
              <div className="flex flex-col items-center justify-center">
                <p>React</p>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-500">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={img6} alt="" height={64} width={64} />
              </div>
              <div className="flex flex-col items-center justify-center">
                <p>TailWind</p>
              </div>
            </div>
          </div>
          {/* <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-500'>
                <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                    <div className='m-auto'>
                        <Image src={img1} alt='' height='64px' width='64px'/>
                    </div>
                    <div className='flex flex-col items-center justify-center'>
                        <p>HTML</p>
                    </div>

                </div>
            </div> */}
        </div>
      </div>
    </div>
  );
};

export default Skills;
