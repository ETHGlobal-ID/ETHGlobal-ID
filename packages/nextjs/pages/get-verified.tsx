import dynamic from "next/dynamic";
import type { NextPage } from "next";
import { MetaHeader } from "~~/components/MetaHeader";

const GetVerified: NextPage = () => {
  const Verify = dynamic(() => import("./../components/Verify"), { ssr: false });

  return (
    <>
      <MetaHeader />
      <Verify />
    </>
  );
};

export default GetVerified;
