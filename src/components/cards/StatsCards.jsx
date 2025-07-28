import { Box, Card, Grid, Paper, Typography } from "@mui/material";
import { SimpleButton } from "../button/Index";
import FolderOutlinedIcon from "@mui/icons-material/FolderOutlined";

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
      period: " 8% ↑ in last month",
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
    <Grid container spacing={2} marginBottom={8}>
      {statsCard?.map((item, index) => (
        <Grid item xs={12} sm={6} md={4} key={index}>
          <Card
            variant="outlined"
            sx={{ p: 2, borderRadius: 2, height: "100%" }}
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
            <Typography variant="caption" color="text.secondary">
              {item?.period}
            </Typography>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default StatsCards;
