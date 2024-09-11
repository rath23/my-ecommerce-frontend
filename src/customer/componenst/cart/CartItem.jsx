import { Button, IconButton } from "@mui/material";
import React from "react";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";

function CartItem() {
  return (
    <div className="p-5 shadow-lg border rounded my-3">
      <div className="flex items-center">
        <div className="w-[5rem] h-[5rem] lg:w-[9rem] lg:h-[9rem]">
          <img
            src="https://5.imimg.com/data5/RB/CN/MY-39077357/mens-fashion-shirt-1000x1000.jpg"
            alt="men's shirt"
            className="w-full h-full object-cover object-top"
          />
        </div>
        <div className="ml-5 space-y-1">
          <p className="font-semibold">Men's Shirt something</p>
          <p className="opacity-75">Size: M , Color: Black</p>
          <p className="opacity-75 mt-2">Seller: Amazon</p>
          <div className="flex space-x-5 items-center text-lg lg:text-xl text-gray-900 pt-6">
            <p className="font-semibold">$99</p>
            <p className="opacity-50 line-through">$199</p>
            <p className="text-green-600 font-semibold"> 50% off</p>
          </div>
        </div>
      </div>
      <div className="lg:flex items-center lg:space-x-10 pt-4  ">
        <div className="flex items-center space-x-2">
          <IconButton sx={{ color: "RGB(145 85 253)",marginLeft:0 }}>
            <RemoveCircleOutlineIcon />
          </IconButton>
        </div>
        <span className="py-1 px-7 border  rounded-sm " style={{marginLeft:0}}>3 </span>

        <IconButton sx={{ color: "RGB(145 85 253)" , marginLeft:0}} style={{marginLeft:0}}>
        <AddCircleOutlineIcon />
        </IconButton>
        <div>
          <Button>Remove</Button>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
