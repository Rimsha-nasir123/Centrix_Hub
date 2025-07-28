// components/RevenueCard.tsx
import { Card, Typography, Box, Chip } from "@mui/material";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";

const RevenueCard = () => (
  <Card sx={{ p: 2, borderRadius: 3, border: "1px solid #E0E0E0", boxShadow: "none" }}>
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        
      }}
    >
      <Typography variant="subtitle2" color="text.secondary">
        This month revenue
      </Typography>
      <img src="/icons/Dropdown.svg" alt="dropdown" />
    </Box>
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        mt: 2,
      }}
    >
      <Typography variant="h5" fontWeight={600}>
        $1,280
      </Typography>
      <Box
        sx={{
          bgcolor: "#ECFDF3",
          color: "#067647",
          display: "flex",
          alignItems: "center",
          ml: 1,
          borderRadius: 50,
          p: 0.5,
          px: 1,
          fontSize: 12,
          border: "1px solid #AAEFC6",
        }}
      >
        <ArrowUpwardIcon fontSize="small" color="#17B26A" />
        <Typography fontSize={14}>10%</Typography>
      </Box>
    </Box>
  </Card>
);

export default RevenueCard;
