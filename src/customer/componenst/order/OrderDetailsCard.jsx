import React from 'react'
import { Box } from "@mui/material";
import { deepPurple } from "@mui/material/colors";
import StarBorderIcon from '@mui/icons-material/StarBorder';

function OrderDetailsCard() {
  return (
    <div className="p-5 shadow-lg hover:shadow-2xl border rounded mb-7">
    <div className="flex justify-between items-center flex-wrap">
      <div>
        <div className="flex cursor-pointer space-x-5 items-center">
          <img
            className="h-[7rem] w-[7rem] object-cover object-top"
            src="https://5.imimg.com/data5/RB/CN/MY-39077357/mens-fashion-shirt-1000x1000.jpg"
            alt="men's shirt"
          />
          <div className="flex flex-col">
            <div className="flex flex-col ">
              <p className="font-semibold">Mens Cotton Navy Blue Fashion Shirt</p>
              <p className="flex flex-col opacity-50 text-xs">
                <span>Color : Navy Blue</span> <span>Size : M</span>
              </p>
            </div>
            <p>Seller : Puma</p>
            <p>$765</p>
          </div>
        </div>
      </div>

      <div className="pr-5">
        <Box sx={{color:deepPurple[500]}}>
            <StarBorderIcon sx={{fontSize:"2rem"}} className="px-2"/>
            <span>Rate & Review Product</span>
        </Box>
      </div>
    </div>
  </div>
  )
}

export default OrderDetailsCard