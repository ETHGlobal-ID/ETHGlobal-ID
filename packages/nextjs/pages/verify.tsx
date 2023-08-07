import Link from "next/link";
import type { NextPage } from "next";
import { init } from "onfido-sdk-ui";
import { MetaHeader } from "~~/components/MetaHeader";

const Verify: NextPage = () => {
  Onfido.init({
    token: "<YOUR_SDK_TOKEN>",
    containerId: "onfido-mount",
    //containerEl: <div id="root" />, an ALTERNATIVE to `containerId`
    onComplete: function (data) {
      console.log("everything is complete");
    },
    workflowRunId: "<YOUR_WORKFLOW_RUN_ID>",
  });
  return (
    <>
      <MetaHeader />
      <div className="flex flex-col items-center flex-grow pt-10">
        <div id="onfido-mount"></div>
      </div>
    </>
  );
};

export default Verify;
