import Image from "next/image";
import React from "react";
import image from "../public/assets/property.jpg";

const Property = () => {
  return (
    <div className="w-full">
      <div className="w-screen h-[30vh] lg:w-[40vh] relative">
        <div className="absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 fill-none  z-10" />
        <Image
          src={image}
          alt=""
          //   objectFit="cover"
          height={1000}
          width={1000}
          className="absolute z-1"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-50 right-50 translate-x-[-50%] translate-y-[-50%] ">
          <h2 className="text-white">Property Finder</h2>
          <h3>React JS / Tailwind / Firebase</h3>
        </div>
      </div>
      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8">
        <div className="col-span-4">
            <p>Project</p>
            <p>OverView</p>
             
        </div>
      </div>
    </div>
  );
};

export default Property;
