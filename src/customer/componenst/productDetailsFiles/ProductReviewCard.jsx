import { Avatar, Box, Grid2, Rating } from "@mui/material";
import React from "react";

function ProductReviewCard() {
  return (
    <div>
      <Grid2  container spacing={2} gap={3}>
        <Grid2 xs={1}>
          <Box>
            <Avatar
              className="text-white"
              sx={{ width: 50, height: 50, color: "#9155fd" }}
            >
              M
            </Avatar>
          </Box>
        </Grid2>
        <Grid2 xs={9}>
          <div className="space-y-2">
            <p className="font-semibold">Muneer</p>
            <p className="opacity-75">May 20, 2024 </p>
          </div>
          <Rating value={4} name="half-rating-read" readOnly precision={0.5}/>
          <p className="pr-20">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis amet
            culpa id quidem deleniti quis a libero unde eum delectus laudantium
            quia, minus commodi ex tenetur itaque accusantium quae quod!
          </p>
        </Grid2>
      </Grid2>
    </div>
  );
}

export default ProductReviewCard;
