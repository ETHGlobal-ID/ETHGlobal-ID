import React from "react";
import Link from "next/link";

const Roadmap = () => {
  const milestones = [
    { title: "Project Kickoff", description: "Initial planning and team formation", date: "2023-01-01" },
    { title: "Design Phase", description: "Creation of design prototypes and mockups", date: "2023-02-15" },
    { title: "Development Start", description: "Coding and development of core features", date: "2023-03-10" },
    { title: "Alpha Release", description: "First public alpha release with limited features", date: "2023-06-01" },
    {
      title: "Beta Release",
      description: "Public beta release with more features and improvements",
      date: "2023-09-15",
    },
    { title: "Official Launch", description: "Full public release with all planned features", date: "2023-12-01" },
  ];

  return (
    <div className="max-w-screen-lg p-8 mx-auto">
      <div className="mb-4">
        <Link href="/" className="text-blue-500 hover:underline">
          {"<"} Back
        </Link>
      </div>
      <h1 className="mb-6 text-3xl font-bold">Roadmap</h1>
      <div className="space-y-6">
        {milestones.map((milestone, index) => (
          <div key={index} className="flex items-start space-x-4">
            <div className="text-lg font-semibold">{milestone.date}</div>
            <div className="flex-1 pl-4 border-l-4 border-blue-500">
              <h2 className="text-xl font-semibold text-blue-700">{milestone.title}</h2>
              <p className="text-gray-700">{milestone.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Roadmap;
