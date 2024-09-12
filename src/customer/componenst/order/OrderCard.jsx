import React from "react";
import AdjustIcon from '@mui/icons-material/Adjust';

function OrderCard() {
  return (
    <div className="p-5 shadow-lg hover:shadow-2xl border rounded">
      <div className="grid grid-cols-12 justify-between">
        <div className="col-span-6">
          <div className="flex cursor-pointer">
            <img
              className="h-[5rem] w-[5rem] object-cover object-top"
              src="https://5.imimg.com/data5/RB/CN/MY-39077357/mens-fashion-shirt-1000x1000.jpg"
              alt="men's shirt"
            />
            <div className="ml-5 space-y-2">
              <p>Mens Cotton Navy Blue Fashion Shirt</p>
              <p className="opacity-50 text-xs font-semibold"> Size : M</p>
              <p className="opacity-50 text-xs font-semibold">
                Color : Navy Blue
              </p>
            </div>
          </div>
        </div>

        <div className="col-span-2">
          <p>$200</p>
        </div>

        <div className="col-span-4">
          {true && (
            <div>
            <div className="flex items-center space-x-1">
            <AdjustIcon sx={{width:"15px",height:"15px"}} className="text-green-600"/>
            <p>
              <span>Delivered on 13th June</span>
            </p>
            </div>
            <p className=" text-xs ">Your item has been delivered.</p>
            </div>
          )}
          {false && (
            <p>
              <span>Expected Delivery on 14th June</span>
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default OrderCard;
