import { FC, createRef, Fragment, useRef } from "react";
import { Button } from "@/components/ui/Button";
import { VerticalWalkthroughProps } from "../types";

const VerticalWalkthrough: FC<VerticalWalkthroughProps> = ({
  key = "id", // Default value for key.
  classes,
  currentStep,
  totalSteps,
  goBack,
  goNext,
  stepContents,
  contentHeights,
}) => {
  // Refs to access the DOM elements directly.
  const stepperContainerRef = useRef<HTMLDivElement | null>(null);
  const contentRefs = useRef(
    stepContents.map(() => createRef<HTMLDivElement>())
  );

  // Calculate dynamic dimensions for layout adjustments.
  const stepperHeight = stepperContainerRef.current?.clientHeight || 0;
  const currentContentHeight = contentHeights[currentStep - 1] || 0;

  // Check if the content of the current step fits within the screen.
  const fitsScreen = currentContentHeight <= stepperHeight;

  return (
    <div
      className="flex items-stretch h-screen"
      ref={stepperContainerRef}
      id={`vertical-stepper-${key}`}
    >
      {/* Sidebar for navigation buttons and step indicators. */}
      <div
        className={`${classes.background} flex flex-col justify-start sticky top-0 h-full space-y-2 rounded-md py-3 px-3`}
      >
        {/* "Back" button */}
        <Button
          className={`${classes.nav} ${
            currentStep === 1 ? "disabled cursor-not-allowed" : ""
          } w-10 h-10 rounded-full flex items-center justify-center`}
          onClick={goBack}
          disabled={currentStep === 1}
        >
          ←
        </Button>

        {/* Render the step circles and connecting lines. */}
        {Array.from({ length: totalSteps }).map((_, index) => (
          <Fragment key={index}>
            {/* Conditional spacer for distributing distance evenly */}
            {index === 0 ? (
              <div
                style={{ flex: 1 }}
                className="w-0.5 bg-transparent mx-auto"
              ></div>
            ) : (
              <div
                className={`flex-grow w-0.5 mx-auto ${classes.connector}`}
              ></div>
            )}
            {/* Step circle */}
            <Button
              className={`${
                currentStep === index + 1 ? `${classes.stepCircle}` : ""
              } w-10 h-10 rounded-full flex items-center justify-center disabled cursor-default`}
            >
              {index + 1}
            </Button>
          </Fragment>
        ))}

        {/* Conditional spacer after the last step circle */}
        <div style={{ flex: 1 }} className="w-0.5 bg-transparent mx-auto"></div>

        {/* "Next" button */}
        <Button
          className={`${classes.nav} ${
            currentStep === totalSteps ? "disabled cursor-not-allowed" : ""
          } w-10 h-10 rounded-full flex items-center justify-center`}
          onClick={goNext}
          disabled={currentStep === totalSteps}
        >
          →
        </Button>
      </div>

      {/* Content area for displaying step details. */}
      <div className="ml-5 flex-grow overflow-y-auto">
        {stepContents.map((content, idx) => (
          <div
            ref={contentRefs.current[idx]}
            key={idx}
            className={
              idx === currentStep - 1
                ? "animate-in slide-in-from-right duration-700"
                : "hidden"
            }
          >
            <div>{content.description}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VerticalWalkthrough;
