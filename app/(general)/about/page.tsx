import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "About",
  description: "This is the about page",
  keywords: ["about", "page"],
};
export default function AboutPage() {
  return (
    <div>
      <h1>About</h1>
      <p>This is the about page</p>
    </div>
  );
}
