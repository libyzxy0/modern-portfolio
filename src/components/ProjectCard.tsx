import React from "react";
import { Icon } from "@iconify/react";
import SlideAnimation from "@/components/slideInAnimation";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import skillsData from "@/data/skills.json";

interface ProjectCardProps {
  title: string;
  description: string;
  link: string;
  repo: string;
  image: string;
  langs: string[];
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  link, 
  repo, 
  image,
  langs,
}) => {
  return (
    <SlideAnimation>
      <Card className="bg-gray-800 border-l-0 border-r-0 border-b-0 border-t-[0.4rem] border-sky-300 mt-4 md:max-w-[24rem] md:mx-2">
        <CardContent className="h-[13rem] p-2">
          <img
            src={image}
            alt={title}
            className="h-[12rem] w-[100%] rounded-lg"
          />
        </CardContent>
        <CardHeader>
          <CardTitle className="flex justify-between mb-2">
          
          <a className="text-sky-300" href={link}>{title}</a>
          <div className="flex flex-row">
            <a href={link} className="text-white h-5 w-5 mr-4 hover:text-sky-300 transition-all duration-300">
              <Icon icon="fluent:open-48-filled" />
            </a>
            <a href={repo} className="text-white hover:text-sky-300 transition-all duration-300">
              <Icon icon="fontisto:github" />
            </a>
          </div>
          </CardTitle>
          <CardDescription className="text-gray-400">
            {description}
          </CardDescription>
        </CardHeader>
        <CardFooter className="flex flex-row flex-wrap text-white">
          {langs.map((lang, index) => {
            const skill = skillsData.find((skill) => skill.name === lang);
            if (!skill) return null;
            return (
              <Icon
                key={index}
                className="h-5 w-5 md:h-7 md:w-7 mr-2"
                icon={skill.icon}
              />
            );
          })}
        </CardFooter>
      </Card>
    </SlideAnimation>
  );
};

export default ProjectCard;
