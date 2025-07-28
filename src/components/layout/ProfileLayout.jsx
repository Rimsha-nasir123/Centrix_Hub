import { Box } from "@mui/material";
import React from "react";
import { Sidebar } from "../sidebar/Index";
import { Navbar } from "../navbar/Index";

export const ProfileLayout = ({ children }) => {
  const listItems = [
    {
      listIcon: "/icons/dashboard.svg",
      listText: "Dashboard",
    },
    {
      listIcon: "/icons/Group.svg",
      listText: "My Task",
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
      listText: "Profile",
    },
  ];
  return (
    <Box sx={{ display: "flex", height: "100vh", m: 0, p: 0 }}>
      <Sidebar listItems={listItems} activeNav={2}/>
      <Box
        component="main"
        sx={{ flexGrow: 1, display: "flex", flexDirection: "column" }}
      >
        <Navbar title={"Idevo Solution’s Workspace"} />
        <Box sx={{ p: 3, bgcolor: "#F9FAFB", flexGrow: 1, overflowY: "auto" }}>
          {children}
        </Box>
      </Box>
    </Box>
  );
};
