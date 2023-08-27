"use client";

import Content from "@/components/content";
import Stepper from "@/components/stepper";

export default function Page() {
  return (
    <div className="custom-page">
      <Stepper
        classes={{
          stepCircle:
            "bg-gray-600 text-white hover:bg-gray-600 hover:text-white",
          nav: "bg-green-700 text-white hover:bg-green-800",
        }}
        stepContents={[
          {
            title: "Step 1",
            description: <div>Content</div>,
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
            description: <div>Content</div>,
          },
          {
            title: "Step 4",
            description: (
              <div>
                <Content />
              </div>
            ),
          },
          {
            title: "Step 5",
            description: <div>Content</div>,
          },
        ]}
        variation="horizontal"
      />
    </div>
  );
}
