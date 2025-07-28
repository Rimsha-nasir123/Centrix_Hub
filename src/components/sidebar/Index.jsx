import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Box from "@mui/material/Box";
import { Avatar, ListItemIcon, Paper, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const Sidebar = ({ listItems, activeNav }) => {
  const [active, setActive] = useState("Dashboard");
  const navigate = useNavigate();
  useEffect(() => {
    if (activeNav === 2) {
      setActive("Profile");
    }
  }, [listItems]);

  return (
    <List
      sx={{
        bgcolor: "",
        borderRight: "1px solid #E0E0E0",
        height: "100vh",
      }}
    >
      <Box
        component="img"
        src="/logo.svg"
        alt="Logo"
        onClick={() => navigate("/profile")}
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-center",
          px: 5,
          py: 2,
          cursor: "pointer",
        }}
      />
      {listItems.map((item, index) => (
        <ListItem key={index} disablePadding sx={{ mb: 1 }}>
          <ListItemButton
            onClick={() => setActive(item.listText)}
            sx={{
              backgroundColor: active === item.listText ? "#FBEEF5" : "inherit",
              borderLeft:
                active === item.listText
                  ? "5px solid #C72C88"
                  : "4px solid transparent",

              "&:hover": {
                backgroundColor:
                  active === item.listText ? "#FBEEF5" : "#F5F5F5",
                cursor: active === item.listText ? "default" : "pointer",
              },
            }}
          >
            <ListItemIcon>
              <Box
                component="img"
                src={item.listIcon}
                alt="Logo"
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "flex-center",
                }}
              />
            </ListItemIcon>
            <ListItemText primary={item?.listText} />
          </ListItemButton>
        </ListItem>
      ))}
      <Box
        display="flex"
        flexDirection="column"
        alignItems="flex-start"
        gap={2}
        position={"absolute"}
        bottom={2}
        p={2}
        width="100%"
      >
        <Paper
          variant="outlined"
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 2,
            p: 2,
            borderRadius: 2,
          }}
        >
          <Avatar sx={{ bgcolor: "#8E44AD" }}>DD</Avatar>
          <Box>
            <Typography fontWeight={600}>Design Den</Typography>
            <Typography color="text.secondary" fontSize="0.875rem">
              Current workspace
            </Typography>
          </Box>
        </Paper>

        <Typography variant="body2" color="text.secondary" align="start">
          © 2024 centrixhub.ai.
        </Typography>
      </Box>
    </List>
  );
};
