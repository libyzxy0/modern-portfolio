export default function Footer() {
  return (
    <footer className="bg-gray-900 w-full">
      <header className="mx-6 pt-6 md:mx-10">
        <a href="https://libyzxy0.com" className="text-2xl md:text-4xl font-semibold tracking-tight text-white flex flex-row">
          <p className="text-sky-300">liby</p>zxy0
        </a>
        <div className="h-1 w-14 rounded-full bg-gradient-to-r from-sky-200 to-blue-400 md:w-16 md:h-2 pt-1"></div>
      </header>
      <div className="mx-6 md:mx-10">
        <div className="flex flex-col md:flex-row mt-5">
          <a
            className="text-white mt-2 mx-2 hover:text-sky-300 transition-all duration-300"
            href="#"
          >
            Start
          </a>
          <a
            className="text-white mt-2 mx-2 hover:text-sky-300 transition-all duration-300"
            href="#about"
          >
            About
          </a>
          <a
            className="text-white mt-2 mx-2 hover:text-sky-300 transition-all duration-300"
            href="#skills"
          >
            Skills
          </a>
          <a
            className="text-white mt-2 mx-2 hover:text-sky-300 transition-all duration-300"
            href="#experience"
          >
            Experience
          </a>
          <a
            className="text-white mt-2 mx-2 hover:text-sky-300 transition-all duration-300"
            href="#education"
          >
            Education
          </a>
          <a
            className="text-white mt-2 mx-2 hover:text-sky-300 transition-all duration-300"
            href="#projects"
          >
            Projects
          </a>
          <a
            className="text-white mt-2 mx-2 hover:text-sky-300 transition-all duration-300"
            href="#contact"
          >
            Contact
          </a>
        </div>
        <div className="mx-2 mt-4 border-l-4 border-gray-700 px-2">
          <p className="text-gray-400">
            This portfolio is open-source and free to use, see repo{" "}
            <a
              className="text-sky-300 hover:underline"
              href="https://github.com/libyzxy0/modern-portfolio"
              target="_balnk"
            >
              here
            </a>
            . Don't forget to star 😉
          </p>
        </div>
      </div>
      <div className="mt-8 w-full relative bottom-0 text-center flex items-center justify-center py-2 bg-gray-700">
        <p className="text-gray-400">
          Made with 💙 and ☕ by <a
            className="text-sky-300 hover:underline"
            href="https://libyzxy0.com"
          > libyzxy0</a>.
        </p>
      </div>
    </footer>
  );
}
