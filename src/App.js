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
import MainContentRoutes from "./MainContentRoutes";
import SideBarRoutes from "./Component/Navbar/SideBarRoutes";
import GetUserInfo from "./Component/Dashboard/Users/GetUserInfo";
import InstaFeeds from "./Component/Dashboard/Instagram";

function App() {
  return (
    <Router>
      <Route path="/" component={MainContentRoutes} exact>
        <MainContentRoutes />
      </Route>
      <Route path="/users" component={Users} exact>
        <Users />
      </Route>

    </Router>
  );
}

export default App;
