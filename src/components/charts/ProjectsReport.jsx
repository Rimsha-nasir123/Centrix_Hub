import React from "react";
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Legend,
  Tooltip,
} from "recharts";
import { Box, Typography, Button, Paper, Stack } from "@mui/material";
import { styled } from "@mui/system";

const data = [
  { name: "In Progress", value: 82, color: "#6A6AF6" },

  { name: "Pending", value: 46, color: "#6FD196" },

  { name: "Complete", value: 10, color: "#FFB859" },
];

const totalProjects = data.reduce((sum, entry) => sum + entry.value, 0);

const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
  index,
  name,
  value,
  fill,
}) => {
  const RADIAN = Math.PI / 180;
  const radius = outerRadius + 20;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  const sign = x > cx ? 1 : -1;
  const lineEndX = x + sign * 10;
  const labelX = x + sign * 15;
  return (
    <g>
      <polyline
        points={`${cx + outerRadius * Math.cos(-midAngle * RADIAN)},${
          cy + outerRadius * Math.sin(-midAngle * RADIAN)
        } ${x},${y} ${lineEndX},${y}`}
        stroke={fill}
        fill="none"
        strokeWidth={1}
        opacity={0.7}
      />
      <text
        x={labelX}
        y={y}
        fill={fill}
        textAnchor={x > cx ? "start" : "end"}
        dominantBaseline="middle"
      >
        {name}
      </text>
      <text
        x={labelX}
        y={y + 16}
        fill={fill}
        textAnchor={x > cx ? "start" : "end"}
        dominantBaseline="middle"
        fontWeight="bold"
      >
        {value}
      </text>
    </g>
  );
};

const ProjectsReport = () => {
  return (
    <Box sx={{ p: 3, borderRadius: 2, mt: 2, border: "1px solid #E0E0E0" }}>
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        mb={2}
      >
        <Typography
          variant="h5"
          component="h2"
          sx={{ fontWeight: 600, fontSize: 16 }}
        >
          Projects report
        </Typography>
        <Button
          variant="contained"
          disableElevation
          sx={{
            bgcolor: "transparent",
            borderRadius: 2,
            color: "#344054",
            textTransform: "none",
            fontWeight: 600,
            fontSize: 14,
            border: "1px solid #D0D5DD",
          }}
        >
          View
        </Button>
      </Box>

      <Box sx={{ height: 350, position: "relative" }}>
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={45}
              outerRadius={100}
              fill="#8884d8"
              dataKey="value"
              label={renderCustomizedLabel}
              labelLine={false}
            >
              {data.map((item, index) => (
                <Cell key={`cell-${index}`} fill={item.color} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            width: "50px",
            height: "50px",
            borderRadius: "50%",
            backgroundColor: "#fff",
            boxShadow: "0 0 10px rgba(0,0,0,0.05)",
          }}
        >
          <Typography variant="h4" component="div" fontWeight="bold">
            {totalProjects}
          </Typography>
        </Box>
      </Box>

      <Stack
        direction="row"
        spacing={3}
        justifyContent="center"
        mt={4}
        flexWrap="wrap"
      >
        {data.map((item, index) => (
          <Box key={index} display="flex" alignItems="center">
            <Box
              sx={{
                width: 10,
                height: 10,
                borderRadius: "50%",
                backgroundColor: item?.color,
                mr: 1,
              }}
            />
            <Typography variant="body2" color="text.secondary">
              {item?.name}
            </Typography>
          </Box>
        ))}
      </Stack>
    </Box>
  );
};

export default ProjectsReport;
