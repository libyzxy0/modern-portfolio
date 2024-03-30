import { Icon } from '@iconify/react';
import SlideAnimation from '@/components/slideInAnimation'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  langs: string[];
}
import skillsData from '@/data/skills';
export default function ProjectCard({ title, description, image, langs }: ProjectCardProps) {
  return (
    <SlideAnimation>
      <Card className="bg-gray-800 border-l-0 border-r-0 border-b-0 border-t-[0.4rem] border-sky-300 mt-4 md:max-w-[24rem] md:mx-2">
        <CardContent className="h-[13rem] p-2">
          <img src={image} alt={title} className="h-[12rem] w-[100%] rounded-lg" />
        </CardContent>
        <CardHeader>
          <CardTitle className="text-sky-300">{title}</CardTitle>
          <CardDescription className="text-gray-400">{description}</CardDescription>
        </CardHeader>
        <CardFooter className="flex flex-row flex-wrap">
          {langs.map((lang, index) => (
            <Icon key={index} className="h-5 w-5 md:h-7 md:w-7 mr-2" icon={skillsData.find((skill) => skill.name === lang)?.icon} />
          ))}
        </CardFooter>
      </Card>
    </SlideAnimation>
  );
}
