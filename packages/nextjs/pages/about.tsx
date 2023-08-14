/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Link from "next/link";

const About = () => {
  return (
    <div className="max-w-screen-md p-8 mx-auto text-gray-800">
      <div className="mb-4">
        <Link href="/" className="text-blue-500 hover:underline">
          {"<"} Back
        </Link>
      </div>
      <h1 className="mb-4 text-2xl font-bold">Project Description</h1>
      <p className="mt-4">
        ETHGlobal ID marks a significant milestone in the world of decentralized identity verification, laying the
        groundwork for a new era of decentralized Know Your Customer (KYC) processes that can be applied to any wallet.
        Here's a detailed look at its inception and broader context:
      </p>
      <h2 className="mt-4 text-xl font-semibold">The Beginning of ETHGlobal ID</h2>
      <p className="mt-4">
        ETHGlobal ID was conceived with the idea of verifying users of ETHGlobal before hackathons and utilizing the
        same as an ID/badging system for future ETHGlobal events. The concept transcends traditional KYC methods by
        allowing any wallet user to complete user verification, ensuring they are not involved in criminal activities,
        fraud, or other malicious behaviors.
      </p>
      <h2 className="mt-4 text-xl font-semibold">Technology Stack</h2>
      <p className="mt-4">
        To get up and running quickly, the project leverages scaffold-eth, a development stack that simplifies the
        creation of decentralized applications. Additionally, Ethereum Attestation Service (EAS) contracts are imported
        to create a schema and an attestation that verifies the authenticity of the ETHGlobal user.
      </p>
      <h2 className="mt-4 text-xl font-semibold">Integration with Onfido</h2>
      <p className="mt-4">
        For the initial phase, Onfido, a renowned identity verification provider, was chosen to test the system.
        Onfido's technology enables quick and accurate verification, aligning with the project's goals.
      </p>
      <h2 className="mt-4 text-xl font-semibold">Future Plans and Long-term Goals</h2>
      <p className="mt-4">
        Post-hackathon, there are plans to replace Onfido with an SDK being developed at Cerebrum. This change is part
        of a broader vision to expand the codebase into a decentralized KYC system that can be utilized by any DAO,
        exchange, or other decentralized entities.
      </p>
      <h2 className="mt-4 text-xl font-semibold">How it's Made</h2>
      <p className="mt-4">
        Certainly! Here's an in-depth look at how the ETHGlobal ID project was built, covering the technologies,
        integrations, and some unique aspects of the development process:
      </p>
      <h3 className="mb-2 text-xl font-semibold">Technologies Used:</h3>
      <ul className="pl-5 mb-4 list-disc">
        <li>
          <strong>Scaffold-eth:</strong> This was the backbone of the project, providing a rapid development environment
          for Ethereum. It allowed for quick prototyping and testing, streamlining the development process.
        </li>
        <li>
          <strong>Ethereum Attestation Service (EAS) Contracts:</strong> These were used to create a schema and an
          attestation, ensuring that the ETHGlobal user is genuine. It's a crucial part of the decentralized
          verification process.
        </li>
        <li>
          <strong>Onfido:</strong> For the first pass, Onfido's identity verification service was integrated. It
          provided a robust and reliable way to verify user identities.
        </li>
      </ul>
      <h3 className="mb-2 text-xl font-semibold">Sponsor Technologies:</h3>
      <p className="mb-4">
        For this project, we made contracts to be deployed on Optimism and Base, enhancing the efficiency and
        scalability of the system. We're also exploring ways to use Chainlink to revoke attestations based on real-world
        data, such as criminal offenses or being listed as a sex offender. This integration would allow for dynamic and
        responsive verification processes. While we considered using Worldcoin, it was determined that the technology
        was not yet sufficiently developed for our needs at this stage.
      </p>
      <h3 className="mb-2 text-xl font-semibold">Notable Hacks:</h3>
      <p className="mb-4">
        One of the unique aspects of this project was the way it combined traditional identity verification (Onfido)
        with decentralized technologies (EAS contracts). This hybrid approach allowed for a robust and flexible system
        that can be further expanded and customized.
      </p>

      <h3 className="mb-2 text-xl font-semibold">Future Plans:</h3>
      <p className="mb-4">
        The project has a{" "}
        <Link href="/roadmap" className="text-blue-500 hover:underline">
          roadmap
        </Link>{" "}
        that includes replacing Onfido with an SDK being developed at Cerebrum and growing the code into a universal
        decentralized KYC system.
      </p>
      <h2 className="mt-4 text-xl font-semibold">Conclusion</h2>
      <p className="mt-4 mb-8">
        ETHGlobal ID is a testament to innovative thinking and skillful integration of various technologies. By
        leveraging scaffold-eth, EAS contracts, and Onfido, it has created a decentralized KYC system that has the
        potential to revolutionize identity verification in the decentralized space. Its adaptability and vision for the
        future make it a standout project in the field of decentralized technologies.
      </p>
    </div>
  );
};

export default About;
