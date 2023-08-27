import React, { useEffect, useState, useRef, FC, ReactNode } from "react";
import { Button } from "@/components/ui/Button";
import useForceRerender from "./hooks/useForceRerender";
import HorizontalStepper from "./renderHorizontalEvent";

interface StepContent {
  title: string;
  description: ReactNode;
}

interface Classes {
  stepCircle?: string;
  nav?: string;
}

interface StepperProps {
  classes?: Classes;
  stepContents: StepContent[];
  variation?: "horizontal" | "vertical";
}

const Stepper: FC<StepperProps> = ({
  classes = {},
  stepContents,
  variation = "horizontal",
}) => {
  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = stepContents.length;
  const currentContent = stepContents[currentStep - 1];
  const key = useForceRerender(currentContent.title);
  const stepperContainerRef = useRef<HTMLDivElement | null>(null);
  const contentRefs = useRef(
    stepContents.map(() => React.createRef<HTMLDivElement>())
  );
  const [contentHeights, setContentHeights] = useState<number[]>([]);

  useEffect(() => {
    const heights = contentRefs.current.map(
      (ref) => ref.current?.clientHeight || 0
    );
    setContentHeights(heights);
  }, [stepContents]);

  const goNext = () => {
    if (currentStep < totalSteps) {
      setCurrentStep((prevStep) => prevStep + 1);
    }
  };

  const goBack = () => {
    if (currentStep > 1) {
      setCurrentStep((prevStep) => prevStep - 1);
    }
  };

  // const renderHorizontal = () => (
  //   <>
  //     <div className="space-y-1">
  //       <div className="flex dark:bg-gray-800 black:bg-gray-700 bg-gray-100 justify-between items-center sticky top-0 rounded-md py-2 px-3 z-10">
  //         {/* Back button */}
  //         <Button
  //           className={`${classes.nav} ${
  //             currentStep === 1 ? "disabled cursor-not-allowed" : ""
  //           } w-10 h-10 rounded-full flex items-center justify-center`}
  //           onClick={goBack}
  //           disabled={currentStep === 1}
  //         >
  //           ←
  //         </Button>

  //         {Array.from({ length: totalSteps }).map((_, index) => (
  //           <React.Fragment key={index}>
  //             {/* Display line between steps */}
  //             <div className="flex-1 h-0.5 w-1 dark:bg-gray-900 bg-gray-200"></div>

  //             {/* Step circle */}
  //             <Button
  //               className={`${
  //                 currentStep === index + 1 ? `${classes.stepCircle}` : ""
  //               } w-10 h-10 rounded-full flex items-center justify-center disabled cursor-default`}
  //             >
  //               {index + 1}
  //             </Button>
  //           </React.Fragment>
  //         ))}

  //         {/* Display line before the Next button */}
  //         <div className="flex-1 h-0.5 w-1 dark:bg-gray-900 bg-gray-200"></div>

  //         {/* Next button */}
  //         <Button
  //           className={`${classes.nav} ${
  //             currentStep === totalSteps ? "disabled cursor-not-allowed" : ""
  //           } w-10 h-10 rounded-full flex items-center justify-center`}
  //           onClick={goNext}
  //           disabled={currentStep === totalSteps}
  //         >
  //           →
  //         </Button>
  //       </div>

  //       <div
  //         key={key}
  //         className="animate-in slide-in-from-right duration-700 py-4"
  //       >
  //         <div>{currentContent.description}</div>
  //       </div>
  //     </div>
  //   </>
  // );

  const renderVertical = () => {
    const stepperHeight = stepperContainerRef.current?.clientHeight || 0;
    const currentContentHeight = contentHeights[currentStep - 1] || 0;

    // Determine if the current content fits within the screen
    const fitsScreen = currentContentHeight <= stepperHeight;

    return (
      <div className="flex items-stretch h-screen" ref={stepperContainerRef}>
        <div className="flex flex-col justify-start sticky top-0 h-full space-y-2">
          {/* Back button */}
          <Button
            className={`${classes.nav} ${
              currentStep === 1 ? "disabled cursor-not-allowed" : ""
            } w-10 h-10 rounded-full flex items-center justify-center`}
            onClick={goBack}
            disabled={currentStep === 1}
          >
            ←
          </Button>

          {/* Conditional rendering for interconnected line based on content fit */}
          {fitsScreen ? (
            <div
              style={{ flex: 1 }}
              className="w-0.5 bg-gray-200 mx-auto"
            ></div>
          ) : (
            <div
              style={{ flex: (stepperHeight - currentContentHeight) / 2 }}
              className="w-0.5 bg-gray-200 mx-auto"
            ></div>
          )}

          {/* Stepper */}
          {Array.from({ length: totalSteps }).map((_, index) => (
            <React.Fragment key={index}>
              <Button
                className={`${
                  currentStep === index + 1 ? `${classes.stepCircle}` : ""
                } w-10 h-10 rounded-full flex items-center justify-center disabled cursor-default`}
              >
                {index + 1}
              </Button>
              {index !== totalSteps - 1 && (
                <div className="flex-grow w-0.5 bg-gray-200 mx-auto"></div>
              )}
            </React.Fragment>
          ))}

          {/* Conditional rendering for interconnected line based on content fit */}
          {fitsScreen ? (
            <div
              style={{ flex: 1 }}
              className="w-0.5 bg-gray-200 mx-auto"
            ></div>
          ) : (
            <div
              style={{ flex: (stepperHeight - currentContentHeight) / 2 }}
              className="w-0.5 bg-gray-200 mx-auto"
            ></div>
          )}

          {/* Next button */}
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

  return variation === "horizontal" ? (
    <HorizontalStepper
      classes={classes}
      currentStep={currentStep}
      totalSteps={totalSteps}
      goBack={goBack}
      goNext={goNext}
      currentContent={stepContents[currentStep - 1]}
    />
  ) : (
    renderVertical()
  );
};

export default Stepper;
