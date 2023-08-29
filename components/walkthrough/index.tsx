import { FC, createRef, useEffect, useState, useRef } from "react";
import useForceRerender from "./hooks/useForceRerender";
import HorizontalWalkthrough from "./components/horizontalWalkthrough";
import VerticalWalkthrough from "./components/verticalWalkthrough";
import { WalkthroughProps } from "./types";

const Walkthrough: FC<WalkthroughProps> = ({
  classes = {},
  stepContents,
  variation = "horizontal",
}) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [contentHeights, setContentHeights] = useState<number[]>([]);

  const currentContent = stepContents[currentStep - 1];
  const key = useForceRerender(currentContent.title);

  const contentRefs = useRef(
    stepContents.map(() => createRef<HTMLDivElement>())
  );

  const totalSteps = stepContents.length;

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
    <HorizontalWalkthrough
      key={key}
      classes={classes}
      currentStep={currentStep}
      totalSteps={totalSteps}
      goBack={goBack}
      goNext={goNext}
      currentContent={stepContents[currentStep - 1]}
      stepContents={stepContents}
    />
  ) : (
    <VerticalWalkthrough
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

export default Walkthrough;
