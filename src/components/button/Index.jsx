import { Box, Typography } from "@mui/material";

export const SimpleButton = ({ icon, text, onClick }) => {
  return (
    <Box
      onClick={onClick}
      sx={{
        display: "flex",
        alignItems: "center",
        gap: 1,
        p: 1,
        border: "1px solid #ccc",
        borderRadius: "6px",
        cursor: "pointer",
        transition: "0.2s",
        "&:hover": {
          backgroundColor: "#f5f5f5",
        },
      }}
    >
      {icon}
      {text && <Typography fontSize="0.9rem">{text}</Typography>}
    </Box>
  );
};
