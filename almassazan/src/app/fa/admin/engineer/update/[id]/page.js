import UpdateEngineer from "@/components/templates/admin/updateEngineer/UpdateEngineer";
import React from "react";

const page = ({ params }) => {
  return <UpdateEngineer id={params.id} />;
};

export default page;
