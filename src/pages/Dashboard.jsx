import { Box } from "@mui/material";
import RevenueCard from "../components/cards/RevenueCard";
import { ProjectPaymentsList } from "../components/lists/ProjectPaymentsList";
import { Header } from "../components/header/Index";
import { DashboardLayout } from "../components/layout/DashboardLayout";
import RevenueReport from "../components/charts/RevenueReport";
import ProjectsReport from "../components/charts/ProjectsReport";

const Dashboard = () => {
  const projectsList = [
    {
      id: 1,
      name: "UX/UI Design Overhaul",
      client: "Robert Fox",
      amount: "$244.00",
      status: "Paid",
    },
    {
      id: 2,
      name: "Website Redesign",
      client: "Jane Doe",
      amount: "$500.00",
      status: "Pending",
    },
    {
      id: 3,
      name: "Mobile App Development",
      client: "John Smith",
      amount: "$200.00",
      status: "Paid",
    },
    {
      id: 4,
      name: "UX/UI Design Overhaul",
      client: "Robert Fox",
      amount: "$244.00",
      status: "Paid",
    },
    {
      id: 5,
      name: "Website Redesign",
      client: "Jane Doe",
      amount: "$500.00",
      status: "Pending",
    },
    {
      id: 6,
      name: "Mobile App Development",
      client: "John Smith",
      amount: "$200.00",
      status: "Paid",
    },
    {
      id: 7,
      name: "UX/UI Design Overhaul",
      client: "Robert Fox",
      amount: "$244.00",
      status: "Paid",
    },
    {
      id: 8,
      name: "Website Redesign",
      client: "Jane Doe",
      amount: "$500.00",
      status: "Pending",
    },
  ];
  const proposalsList = [
    {
      id: 1,
      name: "Tech requirements.pdf",
      client: "200 KB",
      icon: "/icons/File type icon (1).svg",
    },
    {
      id: 2,
      name: "Tech requirements.pdf",
      client: "200 KB",
      icon: "/icons/File type icon.svg",
    },
    {
      id: 3,
      name: "Tech requirements.pdf",
      client: "200 KB",
      icon: "/icons/File type icon (1).svg",
    },
    {
      id: 4,
      name: "Tech requirements.pdf",
      client: "200 KB",
      icon: "/icons/File type icon.svg",
    },
  ];
  return (
    <DashboardLayout>
      <Header />
      <Box sx={{ display: "flex", flexDirection: "row", px: 2 }}>
        <Box sx={{ width: 8 / 12 }}>
          <Box>
            <Box sx={{ display: "flex", gap: 2, mb: 2 }}>
              <Box sx={{ flex: 1 }}>
                <RevenueCard />
              </Box>
              <Box sx={{ flex: 1 }}>
                <RevenueCard />
              </Box>
            </Box>
            <RevenueCard />
          </Box>
          <RevenueReport profile={false}/>
          <ProjectsReport />
        </Box>

        <Box sx={{ width: 4 / 12 }}>
          <ProjectPaymentsList
            list={proposalsList}
            proposals={true}
            title={"Proposals"}
          />
          <ProjectPaymentsList
            list={projectsList}
            proposals={false}
            title={"Project Payments"}
          />
        </Box>
      </Box>
    </DashboardLayout>
  );
};

export default Dashboard;
