import Project from "@/components/ProjectCard";
import tikDownThumbnail from "@/assets/images/tikdown-click.png";
import shotiThumbnail from "@/assets/images/shoti-api.png";
import pThumbnail from "@/assets/images/modern-portfolio.png";
import wThumbnail from "@/assets/images/weather-app.png";
import ssThumbnail from "@/assets/images/speedsnippet.png";
export default function Projects() {
  return (
    <>
      <section className="pb-5 w-full bg-gray-950" id="projects">
        <header className="mx-6 pt-6 md:mx-10">
          <h1 className="text-white font-bold text-3xl md:text-5xl">
            Projects
            <b className="text-transparent bg-clip-text bg-gradient-to-r from-sky-200 to-blue-400">
              .
            </b>
          </h1>
          <div className="h-1 w-14 rounded-full bg-gradient-to-r from-sky-200 to-blue-400 md:w-20 md:h-2"></div>
        </header>
        <div className="mx-7 md:mx-10 flex justify-center items-center flex-col md:flex-row md:flex-wrap mt-12 md:justify-start ">
        <Project
            title="SpeedSnippet ⚡"
            description="A platform where you can share your code snippets or ask a question, it is designed to help other developers."
            image={ssThumbnail}
            link="https://speedsnippet.xyz"
            repo="https://github.com/libyzxy0/SpeedSnippet"
            langs={[
              "React",
              "Tailwindcss", 
              "TypeScript", 
              "ShadcnUI", 
              "Supabase"
            ]}
          />
          <Project
            title="TikDown.click"
            description="A website where you can download tiktok videos without watermark."
            link="https://tikdown.click"
            repo="https://github.com/libyzxy0/tiktok-downloader"
            image={tikDownThumbnail}
            langs={["Vue", "JavaScript", "Tailwindcss", "Express", "Vercel"]}
          />
          <Project
            title="Shoti API"
            description="API that sends a lot of beautiful, cute, and hot girl tiktok videos."
            image={shotiThumbnail}
            link="https://shoti-api.deno.dev"
            repo="https://github.com/libyzxy0/shoti"
            langs={[
              "Nuxt",
              "JavaScript",
              "Express",
              "Node.js",
              "Tailwindcss",
              "MongoDB",
            ]}
          />
          <Project
            title="Modern Portfolio"
            description="A modern portfolio using react, tailwindcss and shadcn ui."
            image={pThumbnail}
            link="https://libyzxy0.com"
            repo="https://github.com/libyzxy0/modern-portfolio"
            langs={[
              "React",
              "Tailwindcss", 
              "TypeScript", 
              "ShadcnUI"
            ]}
          />
          <Project
            title="Weather App"
            description="A simple weather forecast website using React."
            image={wThumbnail}
            link="https://weather-app-beryl-five.vercel.app"
            repo="https://github.com/libyzxy0/weather-app"
            langs={[
              "React",
              "Tailwindcss", 
              "TypeScript", 
              "ShadcnUI"
            ]}
          />
          
        </div>
      </section>
    </>
  );
}
