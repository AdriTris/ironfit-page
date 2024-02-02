import React from "react";
import { IoIosFitness } from "react-icons/io";
import { IoLocationSharp } from "react-icons/io5";
import { IoIosMail } from "react-icons/io";
import { IoLogoWhatsapp } from "react-icons/io";
import { IoLogoFacebook } from "react-icons/io";
import { IoLogoInstagram } from "react-icons/io";
import { FaXTwitter } from "react-icons/fa6";
import { FaRegCopyright } from "react-icons/fa6";

function Footer() {
  return (
    <div className="w-full h-full flex justify-between items-center bg-zinc-900 p-10 py-12">
      <div className="w-1/2 h-full flex flex-col ">
        <p className="text-l font-medium">Contact Us</p>
        <div className="flex gap-2 h-10 w-auto items-center max-sm:gap-1 max-sm:h-7">
          <IoLocationSharp className="text-red-500 w-5 h-5 max-sm:w-4 max-sm:h-4" />
          <p className="text-sm font-extralight max-sm:text-xs">
            ironfit@gmail.com
          </p>
        </div>
        <div className="flex gap-2 h-10 w-auto items-center max-sm:gap-1 max-sm:h-7">
          <IoIosMail className="text-red-500 w-5 h-5 max-sm:w-4 max-sm:h-4" />
          <p className="text-sm font-extralight max-sm:text-xs">
            California Av & Wall St
          </p>
        </div>
        <div className="flex gap-2 h-10 w-auto items-center max-sm:gap-1 max-sm:h-7">
          <IoLogoWhatsapp className="text-red-500 w-5 h-5 max-sm:w-4 max-sm:h-4" />
          <p className="text-sm font-extralight max-sm:text-xs">
            +547 658 920 4565
          </p>
        </div>
      </div>
      <div className="w-1/2 h-full flex flex-col gap-6 max-sm:gap-2 max-sm:justify-end">
        <div className="flex gap-1 h-10 w-full justify-end items-center max-sm:h-7">
          <IoIosFitness className="text-red-500 w-10 h-10 max-sm:w-8 max-sm:h-8" />
          <p className="font-bold text-2xl max-sm:text-xl">IronFit</p>
        </div>
        <div className="flex justify-end gap-4 max-sm:gap-2">
          <IoLogoFacebook className="text-red-500 w-8 h-8 max-sm:w-6 max-sm:h-6" />
          <IoLogoInstagram className="text-red-500 w-8 h-8 max-sm:w-6 max-sm:h-6" />
          <FaXTwitter className="text-red-500 w-8 h-8 max-sm:w-6 max-sm:h-6" />
        </div>
        <div className="flex gap-2 w-full h-10 items-center justify-end max-sm:items-start max-sm:gap-0 max-sm:h-7">
          <FaRegCopyright className="w-3" />
          <span className="text-sm font-extralight text-right max-sm:text-xs max-sm:w-24">
            2024 IronFit. All Rights Reserved
          </span>
        </div>
      </div>
    </div>
  );
}

export default Footer;
