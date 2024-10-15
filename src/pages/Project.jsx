import React, { useContext, useState } from "react";
import { Data } from "../components/Layout";
import ProjectCard from "../components/ProjectCard";

const Project = () => {
  const { projects } = useContext(Data);
  return (
    <div className="p-6">
      <h1 className="text-xl font-semibold my-5">Current Projects</h1>

      <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8">
        {projects.map((project) => (
          <ProjectCard key={project.name} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Project;
