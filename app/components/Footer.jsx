import { assets } from "@/assets/assets";
import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <div>
      <div className="text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-12 py-6">
        <p>&copy; 2025 Yoseph Aweke. All rights reserved.</p>
        <ul className="flex items-center gap-10 justify-center mt-4 sm:mt-0">
          <li className="flex items-center gap-2">
            <Image src={assets.github} alt="" className="w-6" />
            <a target="_blank" href="https://github.com/slimreaperII">
              GitHub
            </a>
          </li>
          <li className="flex items-center gap-2">
            <Image src={assets.linkedin} alt="" className="w-6" />
            <a
              target="_blank"
              href="https://linkedin.com/in/yoseph-aweke-52b90a341"
            >
              LinkedIn
            </a>
          </li>
          <li className="flex items-center gap-2">
            <Image src={assets.mail_icon} alt="" className="w-6" />
            <a target="_blank" href="mailto:Blankoprog86@gmail.com">
              Blankoprog86@gmail.com
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
