import { Button } from "@headlessui/react";
import { Grid2, Typography } from "@mui/material";
import React from "react";

function Footer() {
  return (
    <div className="bg-black h-[25rem] ">
      <div
        className="flex flex-row bg-black justify-around mb-[8.5rem]"
        style={{ fontFamily: "sans-serif" }}
      >
        <div className="flex flex-col items-center text-white text-center mt-5  ">
          <a
            className="mb-3 mt-[2rem] "
            style={{ fontSize: "1.5rem", fontWeight: "bold" }}
          >
            Company
          </a>
          <a style={{ fontSize: "1rem" }}>About</a>
          <a style={{ fontSize: "1rem" }}>Blog</a>
          <a style={{ fontSize: "1rem" }}>Press</a>
          <a style={{ fontSize: "1rem" }}>Jobs</a>
          <a style={{ fontSize: "1rem" }}>Partners</a>
        </div>
        <div className="flex flex-col items-center  text-white text-center mt-5 ">
          <a
            className="mb-3 mt-[2rem] "
            style={{ fontSize: "1.5rem", fontWeight: "bold" }}
          >
            Solution
          </a>
          <a style={{ fontSize: "1rem" }}>Marketing</a>
          <a style={{ fontSize: "1rem" }}>Analytics</a>
          <a style={{ fontSize: "1rem" }}>Commerce</a>
          <a style={{ fontSize: "1rem" }}>Insights</a>
          <a style={{ fontSize: "1rem" }}>Support</a>
        </div>
        <div className="flex flex-col items-center  text-white text-center mt-5 ">
          <a
            className="mb-3 mt-[2rem] "
            style={{ fontSize: "1.5rem", fontWeight: "bold" }}
          >
            Documents
          </a>
          <a style={{ fontSize: "1rem" }}>Guides</a>
          <a style={{ fontSize: "1rem" }}>API Status</a>
        </div>
        <div className="flex flex-col items-center  text-white text-center mt-5 ">
          <a
            className="mb-3 mt-[2rem] "
            style={{ fontSize: "1.5rem", fontWeight: "bold" }}
          >
            Legal
          </a>
          <a style={{ fontSize: "1rem" }}>Claim</a>
          <a style={{ fontSize: "1rem" }}>Policy</a>
          <a style={{ fontSize: "1rem" }}>Terms</a>
        </div>
      </div>
      <div className="flex flex-col items-center text-white text-center bg-black mb-[5rem] pb-5 ">
        <p>&copy; 2024 E-Store. All rights reserved.</p>
        <p>Made with love by Muneer</p>
      </div>
    </div>
  );
}

export default Footer;
