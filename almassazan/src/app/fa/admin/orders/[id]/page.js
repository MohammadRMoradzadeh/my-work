import OrderDetails from "@/components/templates/admin/orders/orderDetails/OrderDetails";
import React from "react";

const page = ({ params }) => {
  return <OrderDetails id={params.id} />;
};

export default page;
