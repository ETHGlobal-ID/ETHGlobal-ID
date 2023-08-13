import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShowModal(true);
    }, 5000);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-black bg-white">
      <Image
        src="/logo.svg"
        alt="ETHGlobal ID"
        className="mb-8"
        width={600}
        height={600}
        style={{ width: "100%", height: "100%", maxWidth: "600px", maxHeight: "600px" }}
      />
      <button className="px-8 py-2 mb-10 text-white bg-blue-500 rounded-full" onClick={() => alert("Sign Up")}>
        Get Your ETHGlobal ID
      </button>
      <div className="text-gray-500">
        <Link href="/join-the-team" className="mx-2">
          Join The Team
        </Link>{" "}
        |
        <Link href="/about" className="mx-2">
          About
        </Link>{" "}
        |
        <Link href="/roadmap" className="mx-2">
          Roadmap
        </Link>{" "}
        |
        <Link href="mailto:info@ethglobalid.com" className="mx-2">
          Contact
        </Link>
      </div>
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="p-4 bg-white rounded-lg">
            <button onClick={() => setShowModal(false)} className="float-right">
              X
            </button>
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/zblQdr-Qd1c?autoplay=1"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}
    </div>
  );
}
