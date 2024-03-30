import { Icon } from "@iconify/react";
import SlideAnimation from "@/components/slideInAnimation";
export default function Contact() {
  return (
    <>
      <section className="pb-5 w-full bg-gray-950" id="contact">
        <header className="mx-6 pt-6 md:mx-10">
          <h1 className="text-white font-bold text-3xl md:text-5xl">
            Contact
            <b className="text-transparent bg-clip-text bg-gradient-to-r from-sky-200 to-blue-400">
              .
            </b>
          </h1>
          <div className="h-1 w-14 rounded-full bg-gradient-to-r from-sky-200 to-blue-400 md:w-20 md:h-2"></div>
        </header>
        <div className="mx-6 md:mx-10 mt-5 flex flex-col md:flex-row md:flex-wrap mb-3">
          <SlideAnimation>
          <a
            href="mailto:janlibydelacosta@gmail.com"
            className="flex flex-row text-sky-300 items-center mt-5 mr-5"
          >
            <Icon className="h-16 w-16" icon="ic:baseline-email" />
            <div className="flex flex-col">
              <h1 className="text-white text-2xl font-bold mx-2">
                Email
              </h1>
              <p className="text-gray-400 mx-2">janlibydelacosta@gmail.com</p>
            </div>
          </a>
          </SlideAnimation>
          <SlideAnimation>
          <a
            href="https://facebook.com/libyzxy0"
            className="flex flex-row text-sky-300 items-center mt-5 mr-5"
          >
            <Icon className="h-16 w-16" icon="logos:facebook" />
            <div className="flex flex-col">
              <h1 className="text-white text-2xl font-bold mx-2">Facebook</h1>
              <p className="text-gray-400 mx-2">/libyzxy0</p>
            </div>
          </a>
          </SlideAnimation>
          <SlideAnimation>
          <a
            href="https://instagram.com/libyzxy0"
            className="flex flex-row text-sky-300 items-center mt-5 mr-3"
          >
            <Icon className="h-16 w-16" icon="skill-icons:instagram" />
            <div className="flex flex-col">
              <h1 className="text-white text-2xl font-bold mx-2">Instagram</h1>
              <p className="text-gray-400 mx-2">/@libyzxy0</p>
            </div>
          </a>
          </SlideAnimation>
          <SlideAnimation>
          <a
            href="https://linkedin.com/in/libyzxy0"
            className="flex flex-row text-sky-300 items-center mt-5 mr-3"
          >
            <Icon className="h-16 w-16" icon="skill-icons:linkedin" />
            <div className="flex flex-col">
              <h1 className="text-white text-2xl font-bold mx-2">Linkedin</h1>
              <p className="text-gray-400 mx-2">/in/libyzxy0</p>
            </div>
          </a>
          </SlideAnimation>
        </div>
      </section>
    </>
  );
}
