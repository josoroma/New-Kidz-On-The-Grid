import React, { ReactNode } from "react";
import { Button } from "@/components/ui/Button";

// Define the styles that can be customized for the stepper.
interface Classes {
  background?: string; // Custom class for the background.
  stepCircle?: string; // Custom class for the step circle.
  connector?: string; // Custom class for the steps connector.
  nav?: string; // Custom class for the navigation buttons (Back/Next).
}

// Define the prop types for the HorizontalStepper component.
interface HorizontalStepperProps {
  key: string | number; // Unique identifier for React rendering and DOM.
  classes: Classes; // Customizable styles for various elements.
  currentStep: number; // Indicates the current active step.
  totalSteps: number; // Total number of steps in the stepper.
  goBack: () => void; // Handler for the "Back" button.
  goNext: () => void; // Handler for the "Next" button.
  currentContent: {
    // Content of the current step.
    description: ReactNode; // Description can be any valid React node.
  };
}

// Define the HorizontalStepper component.
const HorizontalStepper: React.FC<HorizontalStepperProps> = ({
  key = "id", // Default value for key.
  classes,
  currentStep,
  totalSteps,
  goBack,
  goNext,
  currentContent,
}) => (
  <>
    {/* Wrapper div for the entire stepper */}
    <div className="space-y-1" id={`horizontal-stepper-${key}`}>
      {/* Container for navigation controls */}
      <div
        className={`${classes.background} flex justify-start items-center sticky top-0 rounded-md py-2 px-3 z-10`}
      >
        {/* Back navigation button */}
        <Button
          className={`${classes.nav} ${
            currentStep === 1 ? "disabled cursor-not-allowed" : ""
          } w-10 h-10 rounded-full flex items-center justify-center`}
          onClick={goBack}
          disabled={currentStep === 1}
        >
          ←
        </Button>

        {/* Line before the first step circle */}
        <div className={`flex-1 h-0.5 w-1 ${classes.connector}`}></div>

        {/* Loop through all steps and render step circles and lines */}
        {Array.from({ length: totalSteps }).map((_, index) => (
          <React.Fragment key={index}>
            {/* Step circle button */}
            <Button
              className={`${
                currentStep === index + 1 ? `${classes.stepCircle}` : ""
              } w-10 h-10 rounded-full flex items-center justify-center disabled cursor-default`}
            >
              {index + 1}
            </Button>

            {/* Line between the current step circle and the next one */}
            <div className="flex-1 h-0.5 w-1 dark:bg-gray-900 bg-gray-200"></div>
          </React.Fragment>
        ))}

        {/* Next navigation button */}
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

      {/* Container for the content of the current step */}
      <div className="animate-in slide-in-from-right duration-700 py-4">
        <div>{currentContent.description}</div>
      </div>
    </div>
  </>
);

export default HorizontalStepper;
