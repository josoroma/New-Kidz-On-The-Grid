import React, { useEffect, useState, useRef, FC, ReactNode } from "react";
import useForceRerender from "./hooks/useForceRerender";
import HorizontalStepper from "./components/horizontalStepper";
import VerticalStepper from "./components/verticalStepper";

interface StepContent {
  title: string;
  description: ReactNode;
}

interface Classes {
  background?: string;
  stepCircle?: string;
  connector?: string;
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

  return variation === "horizontal" ? (
    <HorizontalStepper
      key={key}
      classes={classes}
      currentStep={currentStep}
      totalSteps={totalSteps}
      goBack={goBack}
      goNext={goNext}
      currentContent={stepContents[currentStep - 1]}
    />
  ) : (
    <VerticalStepper
      key={key}
      classes={classes}
      currentStep={currentStep}
      totalSteps={totalSteps}
      goBack={goBack}
      goNext={goNext}
      stepContents={stepContents}
      contentHeights={contentHeights}
    />
  );
};

export default Stepper;
