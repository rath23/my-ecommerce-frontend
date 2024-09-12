import React from "react";
import AddressCard from "../addressCard/AddressCard";
import OrderTracker from "./OrderTracker";

import OrderDetailsCard from "./OrderDetailsCard";

function OrderDetails() {
  return (
    <div className="px-5 lg:px-20">
      <div>
        <h1 className="font-bold text-xl py-7 ">Delivery Address</h1>
        <AddressCard />
      </div>
      <div className="py-20">
        <OrderTracker activeStep={3} />
      </div>

      {[1, 1, 1, 1].map((item) => (
        <OrderDetailsCard />
      ))}
    </div>
  );
}

export default OrderDetails;
