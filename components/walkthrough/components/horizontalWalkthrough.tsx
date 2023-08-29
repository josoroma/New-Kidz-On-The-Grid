import { FC, Fragment } from "react";
import { Button } from "@/components/ui/Button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { HorizontalWalkthroughProps } from "../types";

// Define the HorizontalWalkthrough component.
const HorizontalWalkthrough: FC<HorizontalWalkthroughProps> = ({
  key = "id", // Default value for key.
  classes,
  currentStep,
  totalSteps,
  goBack,
  goNext,
  currentContent,
  stepContents,
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

        <TooltipProvider>
          {/* Loop through all steps and render step circles and lines */}
          {Array.from({ length: totalSteps }).map((_, index) => (
            <Fragment key={index}>
              <Tooltip>
                <TooltipTrigger asChild>
                  {/* Step circle button */}
                  <Button
                    className={`${
                      currentStep === index + 1 ? `${classes.stepCircle}` : ""
                    } w-10 h-10 rounded-full flex items-center justify-center disabled cursor-default`}
                  >
                    {index + 1}
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <div>{stepContents?.[index]?.title}</div>
                </TooltipContent>
              </Tooltip>
              {/* Line between the current step circle and the next one */}
              <div className="flex-1 h-0.5 w-1 dark:bg-gray-900 bg-gray-200"></div>
            </Fragment>
          ))}
        </TooltipProvider>

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

export default HorizontalWalkthrough;
