import React from "react";
import Link from "next/link";

const About = () => {
  return (
    <div className="max-w-screen-md p-8 mx-auto">
      <div className="mb-4">
        <Link href="/" className="text-blue-500 hover:underline">
          {"<"} Back
        </Link>
      </div>
      <h1 className="mb-4 text-2xl font-bold">Project Description</h1>
      <p className="mt-4">
        ETHGlobal ID marks a significant milestone in the world of decentralized identity verification, laying the
        groundwork for a new era of decentralized Know Your Customer (KYC) processes that can be applied to any wallet.
        Here&apos;s a detailed look at its inception and broader context:
      </p>
      {/* ... Rest of the content ... */}
      {/* ... Include other sections as needed ... */}
    </div>
  );
};

export default About;
