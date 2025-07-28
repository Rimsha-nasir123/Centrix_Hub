import { Box, Avatar, Typography, Chip } from "@mui/material";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
import { Gauge } from "@mui/x-charts/Gauge";
import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";

const ProfileHeader = () => {
  return (
    <Box
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      flexWrap="wrap"
      sx={{ border: 1, borderColor: "#E0E0E0", p: 2, borderRadius: 3, mb: 2 }}
    >
      <Box display="flex" alignItems="center" gap={2}>
        <Avatar src="/dp.png" sx={{ width: 160, height: 160 }} />
        <Box>
          <Typography fontWeight={600} fontSize="1.2rem">
            Jhon Smith
          </Typography>
          <Box
            sx={{
              bgcolor: "#EFF8FF",
              color: "#2E90FA",
              display: "flex",
              alignItems: "center",
              borderRadius: 2,
              px: 2,
              py: 0.5,
              fontSize: 12,
              width: "fit-content",
              border: "1px solid #2E90FA",
            }}
          >
            <Typography variant="subtitle2" color="#2E90FA">
              Full Stack Developer
            </Typography>
          </Box>
          <Box display={"flex"} gap={2}>
            <Box mt={1} display="flex" alignItems="center" gap={1}>
              <LocalPhoneOutlinedIcon fontSize="small" />
              <Typography variant="body2">(503) 555 0125</Typography>
            </Box>
            <Box display="flex" alignItems="center" gap={1}>
              <EmailOutlinedIcon fontSize="small" />
              <Typography variant="body2">bill.sanders@example.com</Typography>
            </Box>
            <Typography variant="body2" sx={{ mt: 0.5 }}>
              <AccountBalanceWalletOutlinedIcon fontSize="small" /> $45 / hr
            </Typography>
          </Box>
        </Box>
      </Box>

      <Box display="flex" alignItems="center" gap={2}>
        <Gauge
          value={70}
          startAngle={0}
          endAngle={360}
          innerRadius="80%"
          outerRadius="100%"
        />
      </Box>
    </Box>
  );
};

export default ProfileHeader;
