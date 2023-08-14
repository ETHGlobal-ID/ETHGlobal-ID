import React from "react";
import Link from "next/link";

const Roadmap = () => {
  const milestones = [
    {
      title: "Project Kickoff",
      description:
        "We are launching one of many hackathons for this project with ETHGlobal Super Hack. Currently, the team is seeking additional members for the upcoming hackathon in New York City.",
      date: "2023-08-07",
    },
    {
      title: "Identity Providers",
      description:
        "Research is being conducted on additional Identity Providers to include, such as the Ethereum Attestation Service, NFTs for DAO Members, Polygon ID, and ZKP.",
      date: "2023-08-15",
    },
    {
      title: "ETH GLobal NYC",
      description:
        "Team formation, Token Launch, deploy ETHGlobal ID contracts on multiple chains, NFT for DAO Members, possible upgrade of our ID Verification SDK.",
      date: "2023-09-22",
    },
    {
      title: "Alpha Release",
      description:
        "First public alpha release with limited features focused on ETHGlobal hackatons, DAO Members and KYC for exchanges.",
      date: "2023-09-24",
    },
    {
      title: "ETHGlobal Online",
      description:
        "ETHGlobal ID will be used for ETHGlobal Online hackathon. Addional Identity Providers will be added. Addional team members will be added.",
      date: "2023-10-06",
    },
    {
      title: "Beta Release",
      description: "Public beta release with more features and improvements",
      date: "2023-10-26",
    },
    {
      title: "ETHGlobal Istanbul",
      description:
        "Search for global team members will continue. We'll start focusing on global usecases of ETHGlobal ID.",
      date: "2023-11-17",
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
