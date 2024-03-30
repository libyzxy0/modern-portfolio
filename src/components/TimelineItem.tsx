import React from "react";
import SlideAnimation from "@/components/slideInAnimation";
import { cn } from "@/lib/utils";
interface SlideInProps {
  children: React.ReactNode;
  title: string;
  className?: string;
}

const SlideInComponent: React.FC<SlideInProps> = ({
  children, 
  title, 
  className
}) => {
  return (
    <SlideAnimation>
      <div
        className={cn(
          "flex flex-row items-start border-l-[5px] border-gray-800 py-3",
          className,
        )}
      >
        <div className="w-full rounded-md mx-5">
          <h1 className="text-white text-2xl font-bold">{title}</h1>
          <p className="text-gray-400 mt-1 pb-2">{children}</p>
        </div>
      </div>
    </SlideAnimation>
  );
};

export default SlideInComponent;
