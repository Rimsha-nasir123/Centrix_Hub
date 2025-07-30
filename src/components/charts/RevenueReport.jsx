import React, { useState } from "react";
import {
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  AreaChart,
  Area,
} from "recharts";
import { Box, Typography, Button, Paper } from "@mui/material";
import { styled } from "@mui/system";

const TimeFilterButton = styled(Button)(({ theme, active }) => ({
  textTransform: "none",
  minWidth: "auto",
  padding: "6px 12px",
  borderRadius: 5,
  border: active ? "1px solid #E0E0E0" : "none",
  backgroundColor: active ? "#FFFF" : "transparent",
  color: active ? "#344054" : "#667085",
}));
const data = [
  { month: "Jan", line1: 120, line2: 300, line3: 400 },
  { month: "Feb", line1: 140, line2: 320, line3: 420 },
  { month: "Mar", line1: 150, line2: 350, line3: 450 },
  { month: "Apr", line1: 180, line2: 380, line3: 500 },
  { month: "May", line1: 220, line2: 420, line3: 600 },
  { month: "Jun", line1: 200, line2: 400, line3: 580 },
  { month: "Jul", line1: 250, line2: 450, line3: 650 },
  { month: "Aug", line1: 230, line2: 430, line3: 620 },
  { month: "Sep", line1: 280, line2: 480, line3: 700 },
  { month: "Oct", line1: 300, line2: 500, line3: 750 },
  { month: "Nov", line1: 280, line2: 480, line3: 800 },
  { month: "Dec", line1: 320, line2: 520, line3: 880 },
];

const RevenueReport = ({ profile }) => {
  const [activeFilter, setActiveFilter] = useState("12 months");
  const handleFilterChange = (filter) => {
    setActiveFilter(filter);
    console.log(`Filtering for: ${filter}`);
  };

  return (
    <Box
      sx={{
        p: 3,
        borderRadius: 2,
        mt: 2,
        border: "1px solid #E0E0E0",
        bgcolor: "#FFFFFF",
      }}
    >
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        mb={2}
      >
        <Box>
          <Typography
            variant="h5"
            component="h2"
            gutterBottom
            sx={{ fontWeight: 600, fontSize: 18 }}
          >
            Revenue report
          </Typography>
          {profile && (
            <Typography
              variant="body2"
              sx={{ fontSize: 14, fontWeight: 400, color: "#475467" }}
            >
              Track task completion trends and performance over time.
            </Typography>
          )}
        </Box>
        <Button
          variant="contained"
          disableElevation
          sx={{
            bgcolor: profile ? "#0F7D82" : "transparent",
            borderRadius: 2,
            color: profile ? "#fff" : "#344054",
            textTransform: "none",
            fontWeight: 600,
            fontSize: 14,
            border: profile ? "#0F7D82" : "1px solid #D0D5DD",
          }}
        >
          {profile ? "View All" : "View"}
        </Button>
      </Box>

      <Box
        sx={{ mb: 3 }}
        bgcolor={profile ? "#F9FAFB" : "FFFFFF"}
        p={0.5}
        borderRadius={2}
        spacing={1}
        borderColor={profile ? "#E0E0E0" : "transparent"}
      >
        {["12 months", "3 months", "30 days", "7 days", "24 hours"].map(
          (filter) => (
            <TimeFilterButton
              key={filter}
              active={activeFilter === filter ? 1 : 0}
              onClick={() => handleFilterChange(filter)}
              sx={{
                bgcolor:
                  activeFilter === filter
                    ? !profile
                      ? "#F9FAFB"
                      : "#FFFFFF"
                    : "transparent",
                borderColor:
                  activeFilter === filter
                    ? !profile
                      ? "#F9FAFB"
                      : "#FFFFFF"
                    : "transparent",
                width: 98,
                fontWeight: 600,
                fontSize: 14,
                letterSpacing: 0,
              }}
            >
              {filter}
            </TimeFilterButton>
          )
        )}
      </Box>

      <Box sx={{ height: 400 }}>
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            data={data}
            margin={{
              top: 10,
              right: 30,
              left: 0,
              bottom: 0,
            }}
          >
            <CartesianGrid
              strokeDasharray="3 3"
              vertical={false}
              stroke="#e0e0e0"
            />
            <XAxis dataKey="month" axisLine={false} tickLine={false} />
            <YAxis
              tickFormatter={(value) => `$${value}`}
              axisLine={false}
              tickLine={false}
              domain={[0, 1000]}
              tickCount={6}
            />
            <Tooltip />
            <Area
              type="monotone"
              dataKey="line3"
              stroke="#B5287C"
              fill="#F9EEF5"
              fillOpacity={0.1}
              strokeWidth={2}
            />
            <Area
              type="monotone"
              dataKey="line2"
              stroke="#D256A0"
              fill="#FCF7FA"
              fillOpacity={0.1}
              strokeWidth={2}
            />
            <Area
              type="monotone"
              dataKey="line1"
              stroke="#8D1F61"
              fill="#ffff"
              fillOpacity={0.1}
              strokeWidth={2}
            />
          </AreaChart>
        </ResponsiveContainer>
      </Box>
    </Box>
  );
};

export default RevenueReport;
