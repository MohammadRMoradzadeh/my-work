import EngineerDetails from "@/components/templates/aboutUs/engineerDetails/engineerDetails";
import React,{ Suspense } from "react";
async function page() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <EngineerDetails isEnLang />;
    </Suspense>
  );
}

export default page;
