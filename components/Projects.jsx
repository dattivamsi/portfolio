import Image from "next/image";
import React from "react";
import image from "../public/assets/property.jpg";
import image1 from "../public/assets/crypto.jpg";
import image2 from "../public/assets/netflix.jpg";
import image3 from "../public/assets/twitch.jpg";
import Link from "next/link";
import ProjectItems from "./ProjectItems";

const Projects = () => {
  return (
    <div id="projects" className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="uppercase text-xl tracking-widest text-[#5651e6]">
          Projects
        </p>
        <h2 className="py-4">What I&apos;ve Built</h2>
        <div className="grid md:grid-cols-2 gap-8">
         <ProjectItems title = "Property Finder" backgroundImag={image} projectUrl="/property"/>
         <ProjectItems title = "Crypto" backgroundImag={image1} projectUrl="/property"/>
         <ProjectItems title = "NetFlix" backgroundImag={image2} projectUrl="/property"/>
         <ProjectItems title = "Twitch" backgroundImag={image3} projectUrl="/property"/>
        </div>
      </div>
    </div>
  );
};

export default Projects;
