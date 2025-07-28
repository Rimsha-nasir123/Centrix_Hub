import { Box, Typography } from "@mui/material";
import ProfileHeader from "../components/header/ProfileHeader";
import StatsCards from "../components/cards/StatsCards";
import SalaryStatementList from "../components/lists/SalaryList";
import RevenueReport from "../components/charts/RevenueReport";
import { ProfileLayout } from "../components/layout/ProfileLayout";

const ProfilePage = () => {
  return (
    <ProfileLayout>
      <Box>
        <Typography variant="h6" fontWeight={500} sx={{ px: 3, pt: 3 }}>
          My Profile
        </Typography>
        <Box elevation={0}>
          <ProfileHeader />
          <StatsCards />
          <SalaryStatementList />
          <RevenueReport />
        </Box>
      </Box>
    </ProfileLayout>
  );
};

export default ProfilePage;
