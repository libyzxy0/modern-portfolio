import * as React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Navbar: React.FC = () => {
  return (
    <nav className="sticky top-0 w-full h-14 md:h-16 bg-gray-950 flex flex-row items-center justify-between z-30 backdrop-filter backdrop-blur-md bg-opacity-30">
      <div className="flex flex-row items-center mx-4">
        <a href="https://libyzxy0.com" className="text-2xl md:text-3xl font-semibold tracking-tight text-white flex flex-row">
          <p className="text-sky-300">liby</p>zxy0
        </a>
      </div>
      <div className="flex flex-row items-center mx-3">
        <a href="https://linkedin.com/in/libyzxy0" className="text-white text-xl md:text-2xl  mx-1.5 hover:text-sky-400 transition-all duration-300">
          <FaLinkedin />
        </a>
        <a href="https://x.com/libyzxy0" className="text-white text-xl md:text-2xl mx-1.5 hover:text-sky-400 transition-all duration-300">
          <FaXTwitter />
        </a>
        <a href="https://github.com/libyzxy0" className="text-white text-xl md:text-2xl mx-1.5 hover:text-sky-400 transition-all duration-300">
          <FaGithub />
        </a>

        <DropdownMenu>
          <DropdownMenuTrigger className="text-white text-xl md:text-2xl ml-2 mr-1.5 outline-none border-none">
            <HiOutlineMenuAlt3 />
          </DropdownMenuTrigger>
          <DropdownMenuContent className="bg-gray-900 border-none text-white mx-3 my-3">
            <DropdownMenuLabel>Go To</DropdownMenuLabel>
            <DropdownMenuSeparator className="bg-gray-800" />
            <DropdownMenuItem>
              <a
                className="hover:text-sky-400 transition-all duration-300"
                href="#"
              >
                Start
              </a>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <a
                className="hover:text-sky-400 transition-all duration-300"
                href="#about"
              >
                About
              </a>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <a
                className="hover:text-sky-400 transition-all duration-300"
                href="#skills"
              >
                Skills
              </a>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <a
                className="hover:text-sky-400 transition-all duration-300"
                href="#experience"
              >
                Experience
              </a>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <a
                className="hover:text-sky-400 transition-all duration-300"
                href="#education"
              >
                Education
              </a>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <a
                className="hover:text-sky-400 transition-all duration-300"
                href="#projects"
              >
                Projects
              </a>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <a
                className="hover:text-sky-400 transition-all duration-300"
                href="#contact"
              >
                Contact
              </a>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </nav>
  );
};

export { Navbar };
