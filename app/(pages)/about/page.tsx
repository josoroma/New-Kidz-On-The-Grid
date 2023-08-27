"use client";

import Content from "@/components/content";
import Walkthrough from "@/components/walkthrough";

export default function Page() {
  return (
    <div className="custom-page">
      <Walkthrough
        classes={{
          background: "dark:bg-gray-800 black:bg-gray-700 bg-gray-100",
          stepCircle:
            "bg-gray-400 text-white hover:bg-gray-400 hover:text-white",
          connector: "dark:bg-gray-700 bg-gray-300",
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
            description: (
              <div>
                <Content />
              </div>
            ),
          },
          {
            title: "Step 6",
            description: <div>Content</div>,
          },
        ]}
        variation="vertical"
      />
    </div>
  );
}
