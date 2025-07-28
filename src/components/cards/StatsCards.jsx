import { Box, Card, Grid, Typography } from "@mui/material";
import { SimpleButton } from "../button/Index";
import FolderOutlinedIcon from "@mui/icons-material/FolderOutlined";
import { ArrowUpward } from "@mui/icons-material";

const StatsCards = () => {
  const statsCard = [
    {
      title: "Current Salary",
      amount: "$2,000",
      period: "Per month",
      icon: <FolderOutlinedIcon />,
    },
    {
      title: "YTD Earnings",
      amount: "$45,000",
      period: "in last month1",
      icon: <FolderOutlinedIcon />,
    },
    {
      title: "Current Salary",
      amount: "$2,000",
      period: "Per month",
      icon: <FolderOutlinedIcon />,
    },
  ];
  return (
    <Box display={"flex"} gap={2}>
      {statsCard?.map((item, index) => (
        <Card
          key={index}
          variant="outlined"
          sx={{
            p: 2,
            borderRadius: 2,
            height: "100%",
            flex: 1,
            width: 100,
          }}
        >
          <Box
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            mb={1}
          >
            <Typography variant="subtitle2">{item?.title}</Typography>
            <SimpleButton icon={<FolderOutlinedIcon />} />
          </Box>
          <Typography fontWeight={600} fontSize="1.2rem">
            {item?.amount}
          </Typography>
          <Typography variant="caption" color="text.secondary" display={"flex"}>
            {item?.title === "YTD Earnings" && (
              <Box
                sx={{ display: "flex", alignItems: "center", color: "#17B26A", mr:1 }}
              >
                <ArrowUpward fontSize="small"/> 8%
              </Box>
            )}{" "}
            {item?.period}
          </Typography>
        </Card>
      ))}
    </Box>
  );
};

export default StatsCards;
