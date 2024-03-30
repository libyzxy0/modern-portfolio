import { Icon } from "@iconify/react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import SlideAnimation from "@/components/slideInAnimation";
import skillsData from "@/data/skills.json";

type Skill = {
  name: string;
  icon: string;
};

export default function Skills() {
  return (
    <section id="skills">
      <header className="mx-6 pt-6 md:mx-10">
        <h1 className="text-white font-bold text-3xl md:text-5xl">
          Skills
          <b className="text-transparent bg-clip-text bg-gradient-to-r from-sky-200 to-blue-400">
            .
          </b>
        </h1>
        <div className="h-1 w-14 rounded-full bg-gradient-to-r from-sky-200 to-blue-400 md:w-20 md:h-2"></div>
        <p className="text-gray-400 font-[400] text-md mt-3">
          Technologies and tools I used.
        </p>
      </header>

      <div className="flex flex-wrap justify-start mx-6 md:mx-10 mt-5">
        {skillsData.map((skill: Skill, index: number) => (
          <SlideAnimation key={index}>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger>
                  <div className="py-4 px-4 bg-gray-900 rounded-xl mx-1.5 my-1.5 md:my-2 md:mx-2 text-white">
                    <Icon
                      className="h-10 w-10 md:h-16 md:w-16"
                      icon={skill.icon}
                    />
                  </div>
                </TooltipTrigger>
                <TooltipContent className="bg-gray-800 border-none text-white">
                  <p>{skill.name}</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </SlideAnimation>
        ))}
      </div>
    </section>
  );
}
