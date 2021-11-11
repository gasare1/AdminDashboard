import React from "react";
import Header from "./Component/Navbar/Header";
import Sidebar from "./Component/Navbar/Sidebar";
import { Box } from "@mui/system";
import Table from "./Component/Table";
import Dashboard from "./Component/Dashboard/UserInfo";
import Databaseinfo from "./Component/Dashboard/Databaseinfo";
import DashboardRoutes from "./Component/Dashboard/DashboardRoutes";
import Tables from "./Component/Dashboard/Table";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Users from "./Component/Dashboard/Users/Users";
function MainContentRoutes() {
  return (
    <div id="/" style={{backgroundColor: '#485461',
      backgroundImage: 'linear-gradient(315deg, #485461 0%, #28313b 74%)'}}>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: 1,
          gridTemplateRows: "auto",
          gridTemplateAreas: `"header header header header"
  "main main . sidebar"
  "footer footer footer footer"`,
        }}
      >
        <Box sx={{ gridArea: "header", bgcolor: "primary.main" }}>
          <Header />
        </Box>
        <Box sx={{ gridArea: "main", bgcolor: "secondary.main" }}>
          <Sidebar />
        </Box>
        <Box sx={{ gridArea: "sidebar", bgcolor: "info.main" }}>
          <DashboardRoutes />
        </Box>
        <Box
          sx={{ gridArea: "sidebar", bgcolor: "warning.main" }}
          style={{
            marginTop: "400px",
            justifyContent: "center",
            width: "80vw",
            alignItems: "center",
          }}
        >
          <Tables />
        </Box>
      </Box>
    </div>
  );
}

export default MainContentRoutes;
