import React from "react";
import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
  return (
    <div
      className="flex flex-col items-center justify-center py-20"
      id="projects"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        My Projects
      </h1>
      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
        <ProjectCard
          src="/foodorder.png"
          title="Food Ordering website"
          description="FastFood is your go-to destination for ordering mouthwatering meals from the comfort of your home. Built on the MERN (MongoDB, Express.js, React.js, Node.js) stack, TastyBites combines the power of modern technology with a passion for gastronomic excellence to bring you an unparalleled online dining experience.

          "
        />
        <ProjectCard
          src="/reactsocialmedia1.png"
          title="Social Media Website"
          description="CosmicSocial, a cutting-edge social media platform where users can connect, share, and explore the cosmos together. Powered by Node.js, React.js, MongoDB, Express, and styled with Tailwind CSS, CosmicSocial offers a seamless and intuitive experience for modern social networking."
        />
        <ProjectCard
          src="/abin_portfolio.png"
          title="Space Themed Website"
          description="Embark on a cosmic journey through the depths of the digital universe with Cosmic Portfolio, a dynamic website crafted using Next.js, Framer Motion, and Tailwind CSS. Prepare to showcase your talents and accomplishments in a visually captivating space-themed environment.

          "
        />
      </div>
    </div>
  );
};

export default Projects;
