import SlideAnimation from "@/components/slideInAnimation";

export default function About() {
  return (
    <>
      <section className="pb-5 w-full bg-gray-950" id="about">
        <header className="mx-6 pt-6 md:mx-10">
          <h1 className="text-white font-bold text-3xl md:text-5xl">
            About
            <b className="text-transparent bg-clip-text bg-gradient-to-r from-sky-200 to-blue-400">
              .
            </b>
          </h1>
          <div className="h-1 w-14 rounded-full bg-gradient-to-r from-sky-200 to-blue-400 md:w-20 md:h-2"></div>
        </header>
        <div className="mx-6 md:ml-10 md:mr-40 mt-8">
          <SlideAnimation>
            <p className="text-gray-400 font-[400] text-md mt-3">
              I'm a 15-year-old full-stack web developer, mainly focusing on
              frontend work, and I've been doing this for over two years now.
            </p>
          </SlideAnimation>
          <SlideAnimation>
            <p className="text-gray-400 font-[400] text-md mt-3">
              I've worked on lots of different projects, learning how to make
              things run smoother and faster. I like working in busy places
              where there's always something new to learn.
            </p>
          </SlideAnimation>
          <SlideAnimation>
            <p className="text-gray-400 font-[400] text-md mt-3">
              In the future, I'm excited to continue collaborating on exciting
              projects with exceptional teams.{" "}
            </p>
          </SlideAnimation>
          <SlideAnimation>
            <p className="text-gray-400 font-[400] text-md mt-3">
              My aim is to use my skills to make things better and faster,
              especially on the frontend. As I keep going in my job, I want to
              keep getting better, learning loads, and working with others.
            </p>
          </SlideAnimation>
          <SlideAnimation>
            <p className="text-gray-400 font-[400] text-md mt-3">
              I'm all about doing my best and making a difference in tech.
            </p>
          </SlideAnimation>
        </div>
      </section>
    </>
  );
}
