import React from "react";
import OrderCard from "./OrderCard";

function Order() {
  const oredrStatus = [
    { label: "On The Way", value: "on_the_way" },
    { label: "Delivered", value: "delivered" },
    { label: "Cancelled", value: "cancelled" },
    { label: "Return", value: "return" },
  ];
  return (
    <div>
      <div className="grid grid-cols-4 mx-4 my-6 space-x-7">
        <div className="col-span-1">
          <div className="h-auto shadow-lg bg-white p-5 sticky top-5">
            <h1 className="font-bold text-lg">Filter</h1>
            <div className="space-y-4 mt-10">
              <h1 className="font-semibold">Order Status </h1>

              {oredrStatus.map((option) => (
                <div className="flex items-center">
                  <input
                    defaultValue={option.value}
                    type="checkbox"
                    className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500"
                  />
                  <label
                    htmlFor={option.value}
                    className="ml-3 text-sm text-gray-600"
                  >
                    {option.label}
                  </label>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="col-span-3">
            <div className="space-y-3">
                {[1,1,1,1].map((item)=>(
                    <OrderCard/>
                ))}
            </div>
             
        </div>
      </div>
    </div>
  );
}

export default Order;
