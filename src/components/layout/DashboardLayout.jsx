import { Box, Grid } from "@mui/material";
import { Sidebar } from "../sidebar/Index";
import { Navbar } from "../navbar/Index";

export const DashboardLayout = ({ children }) => {
  const listItems = [
    {
      listIcon: "/icons/dashboard.svg",
      listText: "Dashboard",
    },
    {
      listIcon: "/icons/Group.svg",
      listText: "Proposals",
    },
    {
      listIcon: "/icons/projects.svg",
      listText: "Projects",
    },
    {
      listIcon: "/icons/message-chat-circle.svg",
      listText: "Chat",
    },
    {
      listIcon: "/icons/calendar.svg",
      listText: "Calendar",
    },
    {
      listIcon: "/icons/invoice.svg",
      listText: "Payment",
    },
    {
      listIcon: "/icons/custom support.svg",
      listText: "Custom Support",
    },
  ];
  return (
    <Box sx={{ display: "flex", height: "100vh", m: 0, p: 0 }}>
      <Box sx={{ width: 280,}}>
        <Sidebar listItems={listItems} activeNav={1} />
      </Box>
      <Box
        component="main"
        sx={{ flexGrow: 1, display: "flex", flexDirection: "column" }}
      >
        <Navbar title={"Dashboard"} />
        <Box
          sx={{
            p: 0,
            flexGrow: 1,
            overflowY: "auto",
          }}
        >
          {children}
        </Box>
      </Box>
    </Box>
  );
};
