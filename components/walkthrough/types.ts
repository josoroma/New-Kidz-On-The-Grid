import { ReactNode } from "react";

/**
 * Walkthrough
 */

export interface StepContent {
  title: string;
  description: ReactNode;
}

export interface Classes {
  background?: string;
  stepCircle?: string;
  connector?: string;
  nav?: string;
}

export interface WalkthroughProps {
  classes?: Classes;
  stepContents: StepContent[];
  variation?: "horizontal" | "vertical";
}

/**
 * HorizontalWalkthrough
 */

export interface HorizontalWalkthroughProps {
  key: string | number;
  classes: Classes;
  currentStep: number;
  totalSteps: number;
  goBack: () => void;
  goNext: () => void;
  currentContent: {
    description: ReactNode;
    title: string;
  };
  stepContents: {
    description: ReactNode;
    title: string;
  }[];
}

/**
 * verticalWalkthrough
 */

export interface VerticalWalkthroughProps {
  key: string | number;
  classes: Classes;
  currentStep: number;
  totalSteps: number;
  goBack: () => void;
  goNext: () => void;
  stepContents: {
    description: ReactNode;
    title: string;
  }[];
  contentHeights: number[];
}