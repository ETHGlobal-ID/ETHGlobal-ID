import React from "react";
import Verify from "./Verify";
import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";
import { init as OnfidoInit } from "onfido-sdk-ui";

// Mock the Onfido SDK initialization function
jest.mock("onfido-sdk-ui", () => ({
  init: jest.fn(),
}));

describe("<Verify />", () => {
  it("renders the Onfido container", () => {
    const { container } = render(<Verify />);
    const onfidoMount = container.querySelector("#onfido-mount");
    expect(onfidoMount).toBeInTheDocument();
  });

  it("initializes Onfido with correct parameters", () => {
    // TODO: add these to .env
    const token = process.env.ONFIDO_SDK_TOKEN;
    const workflowRunId = process.env.ONFIDO_WORKFLOW_RUN_ID;
    render(<Verify />);

    expect(OnfidoInit).toHaveBeenCalledWith({
      token,
      containerId: "onfido-mount",
      onComplete: expect.any(Function),
      workflowRunId,
    });
  });
});
