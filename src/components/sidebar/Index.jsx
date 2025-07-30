import {
  Avatar,
  Box,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Paper,
  Typography,
  useMediaQuery,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const Sidebar = ({ listItems, activeNav }) => {
  const [active, setActive] = useState("Dashboard");
  const [open, setOpen] = useState(false);
  const isMobile = useMediaQuery("(max-width:900px)");
  const navigate = useNavigate();

  useEffect(() => {
    if (activeNav === 2) {
      setActive("Profile");
    }
  }, [listItems]);

  const sidebarContent = (
    <List
      sx={{
        bgcolor: "",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      
      }}
    >
      <Box>
        <Box
          component="img"
          src="/logo.svg"
          alt="Logo"
          onClick={() => {
            navigate("/profile");
            setOpen(false);
          }}
          sx={{
            display: "block",
            mt: 5,
            mb: 3,
            px: "47px",
            height: 58,
            width: 184,
            cursor: "pointer",
          }}
        />
        {listItems.map((item, index) => (
          <ListItem key={index} disablePadding sx={{ mb: 1 }}>
            <ListItemButton
              onClick={() => {
                setActive(item.listText);
                setOpen(false);
              }}
              sx={{
                backgroundColor:
                  active === item.listText ? "#FBEEF5" : "inherit",
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
                  alt="icon"
                  sx={{ width: 24, height: 24 }}
                />
              </ListItemIcon>
              <ListItemText
                primary={item?.listText}
                sx={{ fontWeight: 400, fontSize: "16px" }}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </Box>

      <Box
        display="flex"
        flexDirection="column"
        alignItems="flex-start"
        gap={2}
        p={2}
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

  return (
    <>
      {isMobile ? (
        <>
          <IconButton
            onClick={() => setOpen(true)}
            sx={{
              position: "fixed",
              top: 16,
              left: 16,
              zIndex: 1300,
              bgcolor: "white",
              boxShadow: 1,
            }}
          >
            <MenuIcon />
          </IconButton>
          <Drawer anchor="left" open={open} onClose={() => setOpen(false)}>
            {sidebarContent}
          </Drawer>
        </>
      ) : (
        <Box
          sx={{
            width: 280,
            borderRight: "1px solid #E0E0E0",
            height: "100vh",
          }}
        >
          {sidebarContent}
        </Box>
      )}
    </>
  );
};
