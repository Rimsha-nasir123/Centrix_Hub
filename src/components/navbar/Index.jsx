import { Box, Chip, Stack, Typography, useMediaQuery } from "@mui/material";
export const Navbar = ({ title }) => {
  const isMobile = useMediaQuery("(max-width:900px)");
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        p: 2,
        px: 3,
        borderBottom: "1px solid #E0E0E0",
      }}
    >
      <Typography
        variant="h4"
        fontWeight={500}
        sx={{ fontSize: 28, bgcolor: "#F9FAFB" }}
      >
        {title}
      </Typography>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 3,
          bgcolor: "#F2F4F8",
          px: 2,
          py: 2.2,
          borderRadius: 40,
        }}
      >
        <img src="/icons/bell.svg" alt="bell"/>
        <img src="/icons/email.svg" alt="email"/>
      </Box>
    </Box>
  );
};
