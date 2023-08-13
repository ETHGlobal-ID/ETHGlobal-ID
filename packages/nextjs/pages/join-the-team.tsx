import React from "react";
import Link from "next/link";

const JoinTheTeam = () => {
  const roles = [
    {
      title: "Web3 UI/UX Designer",
      description:
        "We are looking for a talented UI/UX Designer with experience in Web3 to join our team. You will be responsible for creating user-friendly interfaces and delivering an exceptional user experience.",
    },
    {
      title: "Smart Contract Developer",
      description:
        "We are seeking a skilled Smart Contract Developer to work on cutting-edge decentralized technologies. You will be responsible for developing, testing, and deploying smart contracts on the Ethereum blockchain.",
    },
  ];

  return (
    <div className="max-w-screen-lg p-8 mx-auto">
      <div className="mb-4">
        <Link href="/" className="text-blue-500 hover:underline">
          {"<"} Back
        </Link>
      </div>
      <h1 className="mb-6 text-3xl font-bold">Join The Team</h1>
      <div className="space-y-8">
        {roles.map((role, index) => (
          <div key={index} className="p-6 border rounded-lg shadow-md">
            <h2 className="mb-4 text-2xl font-semibold text-blue-700">{role.title}</h2>
            <p className="mb-4 text-gray-700">{role.description}</p>
            <a
              href="mailto:info@ethglobalid.com?subject=Application for the position of Web3 UI/UX Designer"
              className="px-6 py-2 text-white transition bg-blue-500 rounded-full hover:bg-blue-600"
            >
              Apply Now
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default JoinTheTeam;
