import UpdateProject from "@/components/templates/admin/updateProject/UpdateProject";
import React from "react";

const page = ({ params }) => {
  return <UpdateProject isEnLang id={params.id} />;
};

export default page;
