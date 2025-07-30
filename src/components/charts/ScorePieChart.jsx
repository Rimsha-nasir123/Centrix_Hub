import React from "react";
import { Box, CircularProgress, Typography } from "@mui/material";

const ScorePieChart = ({ value = 70 }) => {
  return (
    <Box
      position="relative"
      display="inline-flex"
      justifyContent="center"
      alignItems="center"
    >
      <CircularProgress
        variant="determinate"
        value={100}
        size={140}
        thickness={6}
        sx={{
          color: "#E9EBEF",
        }}
      />
      <CircularProgress
        variant="determinate"
        value={value}
        size={140}
        thickness={6}
        sx={{
          color: "#117B7B",
          position: "absolute",
          left: 0,
        }}
      />
      <Box
        position="absolute"
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
      >
        <Typography variant="body2" color="textSecondary" fontWeight={500}>
          Score
        </Typography>
        <Typography variant="h5" fontWeight={700}>
          {`${value}%`}
        </Typography>
      </Box>
    </Box>
  );
};

export default ScorePieChart;
