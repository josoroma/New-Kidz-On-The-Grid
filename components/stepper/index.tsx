"use client";

import React, { useState, FC } from "react";
import { Button } from "@/components/ui/Button";
import useForceRerender from "./hooks/useForceRerender";

interface StepContent {
  title: string;
  description: string;
}

interface Classes {
  stepCircle?: string;
  nav?: string;
}

interface StepperProps {
  classes?: Classes;
  stepContents: StepContent[any];
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

  const renderHorizontal = () => (
    <>
      <div className="space-y-1">
        <div className="flex dark:bg-gray-800 black:bg-gray-700 bg-gray-100 justify-between items-center sticky top-0 rounded-md py-2 px-3 z-10">
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

          {Array.from({ length: totalSteps }).map((_, index) => (
            <React.Fragment key={index}>
              {/* Display line between steps */}
              <div className="flex-1 h-0.5 w-1 dark:bg-gray-900 bg-gray-200"></div>

              {/* Step circle */}
              <Button
                className={`${
                  currentStep === index + 1 ? `${classes.stepCircle}` : ""
                } w-10 h-10 rounded-full flex items-center justify-center disabled cursor-default`}
              >
                {index + 1}
              </Button>
            </React.Fragment>
          ))}

          {/* Display line before the Next button */}
          <div className="flex-1 h-0.5 w-1 dark:bg-gray-900 bg-gray-200"></div>

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

        <div
          key={key}
          className="animate-in slide-in-from-right duration-700 py-4"
        >
          <div>{currentContent.description}</div>
        </div>
      </div>
    </>
  );

  const renderVertical = () => (
    <div className="flex items-start h-full">
      <div className="flex flex-col justify-between sticky space-y-2 h-full">
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

        {Array.from({ length: totalSteps }).map((_, index) => (
          <React.Fragment key={index}>
            {/* Display line between steps */}
            <div className="flex-grow w-0.5 bg-gray-200 mx-auto"></div>

            {/* Step circle */}
            <Button
              className={`${
                currentStep === index + 1 ? `${classes.stepCircle}` : ""
              } w-10 h-10 rounded-full flex items-center justify-center disabled cursor-default`}
            >
              {index + 1}
            </Button>
          </React.Fragment>
        ))}

        {/* Display line before the Next button */}
        <div className="flex-grow w-0.5 bg-gray-100 mx-auto"></div>

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
      <div className="ml-5 flex-grow">
        <div key={key} className="animate-in slide-in-from-right duration-700">
          <div>{currentContent.description}</div>
        </div>
      </div>
    </div>
  );

  return variation === "horizontal" ? renderHorizontal() : renderVertical();
};

export default Stepper;
