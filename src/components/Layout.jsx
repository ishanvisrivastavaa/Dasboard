import React, { createContext, useState } from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";
import { Outlet } from "react-router-dom";

const projects = [
  {
    name: "Website Redesign",
    type: "Web Development",
    data: {
      technologies: ["HTML", "CSS", "JavaScript"],
      deadline: "2024-12-01",
    },
    member: ["Alice", "Bob", "Charlie"],
    files: ["index.html", "styles.css", "script.js", "assets/images/logo.png"],
    progress: "50%",
  },
  {
    name: "Mobile App Development",
    type: "Mobile Development",
    data: {
      technologies: ["React Native", "Firebase"],
      deadline: "2025-03-15",
    },
    member: ["David", "Eve"],
    files: ["App.js", "app.json", "package.json", "assets/icons/icon.png"],
    progress: "30%",
  },
  {
    name: "Data Analysis Project",
    type: "Data Science",
    data: {
      technologies: ["Python", "Pandas", "NumPy"],
      deadline: "2024-11-20",
    },
    member: ["Frank", "Grace"],
    files: ["analysis.py", "data.csv", "visualization.ipynb"],
    progress: "70%",
  },
  {
    name: "E-commerce Platform",
    type: "Web Development",
    data: {
      technologies: ["Node.js", "Express", "MongoDB"],
      deadline: "2025-01-10",
    },
    member: ["Hannah", "Ian"],
    files: ["server.js", "models/Product.js", "routes/products.js"],
    progress: "20%",
  },
  {
    name: "AI Chatbot Development",
    type: "AI Development",
    data: {
      technologies: ["Python", "TensorFlow"],
      deadline: "2025-06-30",
    },
    member: ["Jasmine", "Kyle"],
    files: ["chatbot.py", "requirements.txt"],
    progress: "10%",
  },
  {
    name: "Cloud Migration",
    type: "Cloud Services",
    data: {
      technologies: ["AWS", "Azure"],
      deadline: "2025-05-15",
    },
    member: ["Laura", "Mike"],
    files: ["migration_plan.md"],
    progress: "0%",
  },
];

const clients = [
  {
    name: "Alice Johnson",
    title: "Project Manager",
    date: "2024-10-01",
  },
  {
    name: "Michael Lee",
    title: "Software Engineer",
    date: "2024-09-25",
  },
  {
    name: "Sophia Martinez",
    title: "Data Analyst",
    date: "2024-08-15",
  },
  {
    name: "David Brown",
    title: "UX Designer",
    date: "2024-07-30",
  },
  {
    name: "Chris Evans",
    title: "Product Owner",
    date: "2024-10-10",
  },
  {
    name: "Sarah Connor",
    title: "Business Analyst",
    date: "2024-09-20",
  },
];

const members = [
  { total_members: 4, job: "Developer" },
  { total_members: 5, job: "UI Designer" },
  { total_members: 8, job: "Product Manager" },
  { total_members: 2, job: "QA Engineer" },
  { total_members: 3, job: "DevOps Engineer" },
  { total_members: 6, job: "Data Scientist" },
];

  const tasks = [
    {
      id: 1,
      title: "Research",
      description: "Complete initial research",
      deadline: "Oct 20, 2024",
    },
    {
      id: 2,
      title: "Development",
      description: "Start building the component",
      deadline: "Oct 22, 2024",
    },
    {
      id: 3,
      title: "Testing",
      description: "Conduct testing and debugging",
      deadline: "Oct 25, 2024",
    },
  ];

export const Data = createContext();

const Layout = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
    console.log("click", isOpen);
  };

  return (
    <Data.Provider value={{ projects, clients, members, tasks}}>
      <div className="flex">
        <div className="flex">
          <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} />
        </div>
        <div className={`w-full ${!isOpen ? "ml-64 " : "ml-20"}`}>
          <Header />
          <Outlet />
        </div>
      </div>
    </Data.Provider>
  );
};

export default Layout;
