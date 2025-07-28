import { Box, Chip, Stack, Typography } from "@mui/material";
export const Navbar = ({title}) => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        p: 2,
        px:3,
        borderBottom: "1px solid #E0E0E0",
      }}
    >
      <Typography variant="h4" fontWeight={600}>{title}</Typography>
      <Stack direction="row" spacing={1}>
        <Chip
          icon={
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 3,
              }}
            >
              <img src="/icons/bell.svg" alt="bell" />{" "}
              <img src="/icons/email.svg" alt="email" />
            </Box>
          }
        />
      </Stack>
    </Box>
  );
};
