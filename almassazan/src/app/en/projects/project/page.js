import ProjectDetails from "@/components/templates/projects/projectDetails/ProjectDetails";
import React, { Suspense } from "react";
async function page() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ProjectDetails isEnLang />;
    </Suspense>
  );
}

export default page;
