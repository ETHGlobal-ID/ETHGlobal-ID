import { useEffect } from "react";
import { init as OnfidoInit } from "onfido-sdk-ui";

const Verify = () => {
  useEffect(() => {
    // TODO: add these to .env
    OnfidoInit({
      token: "<YOUR_SDK_TOKEN>",
      containerId: "onfido-mount",
      onComplete: function (data) {
        console.log("everything is complete");
      },
      workflowRunId: "<YOUR_WORKFLOW_RUN_ID>",
    });
  }, []);

  return (
    <div className="flex flex-col items-center flex-grow pt-10">
      <div id="onfido-mount"></div>
    </div>
  );
};

export default Verify;
