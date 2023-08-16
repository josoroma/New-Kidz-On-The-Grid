/**
 * This "layout.tsx" file convention helps you create meaningful Loading UI with
 * React Suspense. With this convention, you can show an instant loading
 * state from the server while the content of a route segment loads. The new
 * content is automatically swapped in once rendering is complete.
 */
export default function Loading() {
  return <div className="customPageWithCenteredContent">Loading Blog...</div>;
}
