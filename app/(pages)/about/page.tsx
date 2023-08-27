"use client";

import Content from "@/components/content";
import Stepper from "@/components/stepper";

export default function Page() {
  return (
    <div className="custom-page">
      <Stepper
        classes={{
          stepCircle: "bg-blue-500 text-white",
          nav: "bg-yellow-500 text-black hover:bg-yellow-300",
        }}
        stepContents={[
          {
            title: "Step 1",
            description: (
              <div>
                <Content />
              </div>
            ),
          },
          {
            title: "Step 2",
            description: (
              <div>
                <Content />
              </div>
            ),
          },
          {
            title: "Step 3",
            description: (
              <div>
                <Content />
              </div>
            ),
          },
        ]}
        variation="vertical"
      />
    </div>
  );
}
