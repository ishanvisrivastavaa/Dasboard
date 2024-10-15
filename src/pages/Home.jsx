import React, { useContext, useState } from "react";
import ProjectStatic from "../components/ProjectStatic";
import Plateforms from "../components/Plateforms";
import ProjectCard from "../components/ProjectCard";
import ClientCard from "../components/ClientCard";
import MemberCard from "../components/MemberCard";
import { Data } from "../components/Layout";

const Home = () => {
  const { projects, clients, members } = useContext(Data);

  const [showAllProjects, setShowAllProjects] = useState(false);
  const [showAllClients, setShowAllClients] = useState(false);
  const [showAllMembers, setShowAllMembers] = useState(false);

  const toggleProjects = () => {
    setShowAllProjects(!showAllProjects);
  };

  const toggleClients = () => {
    setShowAllClients(!showAllClients);
  };

  const toggleMembers = () => {
    setShowAllMembers(!showAllMembers);
  };

  return (
    <div className="p-5">
      <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-4">
        <ProjectStatic />
        <Plateforms />
        <ProjectStatic />
        <Plateforms />
      </div>

      <div>
        <div className="flex justify-between items-center py-4">
          <h1 className="text-lg font-semibold">Current Projects</h1>
          <button
            className="text-sm underline text-indigo-600"
            onClick={toggleProjects}
          >
            {showAllProjects ? "Close All" : "See All"}
          </button>
        </div>
        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8">
          {(showAllProjects ? projects : projects.slice(0, 4)).map(
            (project) => (
              <ProjectCard key={project.name} project={project} />
            )
          )}
        </div>
      </div>

      <div>
        <div className="flex justify-between items-center py-4">
          <h1 className="text-lg font-semibold">Current Clients</h1>
          <button
            className="text-sm underline text-indigo-600"
            onClick={toggleClients}
          >
            {showAllClients ? "Close All" : "See All"}
          </button>
        </div>
        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8">
          {(showAllClients ? clients : clients.slice(0, 4)).map((client) => (
            <ClientCard key={client.name} client={client} />
          ))}
        </div>
      </div>

      <div>
        <div className="flex justify-between items-center py-4">
          <h1 className="text-lg font-semibold">Current Members</h1>
          <button
            className="text-sm underline text-indigo-600"
            onClick={toggleMembers}
          >
            {showAllMembers ? "Close All" : "See All"}
          </button>
        </div>
        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8">
          {(showAllMembers ? members : members.slice(0, 4)).map((member, i) => (
            <MemberCard key={i} member={member} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
