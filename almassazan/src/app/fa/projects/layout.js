import Projects from "@/components/templates/projects/Projects";
import React from "react";

export default async function Layout({ children }) {
  return <Projects>{children}</Projects>;
}
