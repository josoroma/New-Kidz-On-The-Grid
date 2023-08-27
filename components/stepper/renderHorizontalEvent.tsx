import React, { ReactNode } from "react";
import { Button } from "@/components/ui/Button";

interface Classes {
  stepCircle?: string;
  nav?: string;
}

interface HorizontalStepperProps {
  classes: Classes;
  currentStep: number;
  totalSteps: number;
  goBack: () => void;
  goNext: () => void;
  currentContent: {
    description: ReactNode;
  };
}

const HorizontalStepper: React.FC<HorizontalStepperProps> = ({
  classes,
  currentStep,
  totalSteps,
  goBack,
  goNext,
  currentContent,
}) => (
  <>
    <div className="space-y-1">
      <div className="flex dark:bg-gray-800 black:bg-gray-700 bg-gray-100 justify-start items-center sticky top-0 rounded-md py-2 px-3 z-10">
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

        <div className="flex-1 h-0.5 w-1 dark:bg-gray-900 bg-gray-200"></div>

        {Array.from({ length: totalSteps }).map((_, index) => (
          <React.Fragment key={index}>
            {/* Step circle */}
            <Button
              className={`${
                currentStep === index + 1 ? `${classes.stepCircle}` : ""
              } w-10 h-10 rounded-full flex items-center justify-center disabled cursor-default`}
            >
              {index + 1}
            </Button>

            {/* Display line between steps */}
            <div className="flex-1 h-0.5 w-1 dark:bg-gray-900 bg-gray-200"></div>
          </React.Fragment>
        ))}

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

      <div className="animate-in slide-in-from-right duration-700 py-4">
        <div>{currentContent.description}</div>
      </div>
    </div>
  </>
);

export default HorizontalStepper;
