// TODO: add types for data
import { useEffect } from "react";
import { init as OnfidoInit } from "onfido-sdk-ui";

const Verify = () => {
  console.log(`ONFIDO_SDK_TOKEN: ${process.env.NEXT_PUBLIC_ONFIDO_SDK_TOKEN}`);
  console.log(`ONFIDO_WORKFLOW_RUN_ID: ${process.env.NEXT_PUBLIC_ONFIDO_WORKFLOW_RUN_ID}`);

  useEffect(() => {
    // TODO: add these to .env
    OnfidoInit({
      token: process.env.NEXT_PUBLIC_ONFIDO_SDK_TOKEN,
      containerId: "onfido-mount",
      onComplete: function (data) {
        console.log(`everything is complete ${data}`);
      },
      workflowRunId: process.env.NEXT_PUBLIC_ONFIDO_WORKFLOW_RUN_ID,
    });
  }, []);

  return (
    <div className="flex flex-col items-center flex-grow pt-10">
      <div id="onfido-mount"></div>
    </div>
  );
};

export default Verify;
