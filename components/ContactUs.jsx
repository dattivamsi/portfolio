import Image from "next/image";
import React from "react";
import image from "../public/assets/contact.jpg";
import { AiOutlineMail } from "react-icons/ai";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { HiOutlineChevronDoubleUp } from "react-icons/hi";
import Link from "next/link";

const ContactUs = () => {
  return (
    <div id="contact" className="w-full lg:h-screen">
      <div className="max-w-[1240px] m-auto px-3 py-16 w-full">
        <p className="uppercase text-xl tracking-widest text-[5651e5]">
          Contact
        </p>
        <h2 className="py-4">Get In Touch</h2>
        <div className="grid lg:grid-cols-5 gap-8">
          <div className="col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-400 rounded-xl p-4">
            <div className="lg:p-4 h-full">
              <div>
                <Image
                  src={image}
                  alt=""
                  height={300}
                  width={600}
                  className="rounded-xl hover:scale-105 ease-in duration-500"
                />
              </div>
              <div>
                <h2 className="py-2">Name Here</h2>
                <p>Front-End Developer</p>
                <p>
                  I am available for freelance or full-time position. Contact me
                  and let&apos;s talk
                </p>
              </div>
              <div>
                <p className="uppercase pt-8">Contact with me</p>
                <div className="flex items-center justify-between py-4">
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
          <div className="col-span-3 w-full h-auto shadow-xl shadow-gray-400 rounded-xl lg:p-4">
            <div className="p-4">
              <form>
                <div className="grid md:grid-cols-2 gap-4 w-full py-2">
                  <div className="flex flex-col">
                    <label className="uppercase text-sm py-2">Name</label>
                    <input
                      className="border-2 rounded-lg p-3 flex border-gray-400 "
                      type="text"
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="uppercase text-sm py-2">
                      Phone Number
                    </label>
                    <input
                      className="border-2 rounded-lg p-3 flex border-gray-400 "
                      type="text"
                    />
                  </div>
                </div>
                <div className="flex flex-col">
                  <label className="uppercase text-sm py-2">Email</label>
                  <input
                    type="email"
                    className="border-2 rounded-xl p-3 flex border-gray-400"
                  />
                </div>
                <div className="flex flex-col">
                  <label className="uppercase text-sm py-2">Subject</label>
                  <input
                    type="email"
                    className="border-2 rounded-xl p-3 flex border-gray-400"
                  />
                </div>
                <div className="flex flex-col">
                  <label className="uppercase text-sm py-2">Message</label>
                  <textarea
                    type="email"
                    className="border-2 rounded-xl p-3 flex border-gray-400"
                    rows="10"
                  ></textarea>
                </div>

                <button className="uppercase w-full p-4 mt-4 text-gray-100">
                  send message
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="flex justify-center py-12">
          <Link href="/">
            <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-500">
            <HiOutlineChevronDoubleUp  size={30} className="text-[#5651e5]"/>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
