import React from "react";
import { ProSidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import "react-pro-sidebar/dist/css/styles.css";
import { FaGem, FaHeart } from "react-icons/fa";
import { RiDashboardFill } from "react-icons/ri";
import { HiUsers, HiOutlineMail } from "react-icons/hi";
import { SiWorkplace } from "react-icons/si";
import { FiSettings } from "react-icons/fi";
import { BsNewspaper } from "react-icons/bs";
import { AiOutlineMessage } from "react-icons/ai";
import { BarChart } from "@mui/icons-material";
import { Link } from "react-router-dom";
function Sidebar() {
  return (
    <div>
      <ProSidebar
        style={{
          height: "100%",
          transition: "all 300ms",
          transform: "scale(1)",
          opacity: "1",
          backgroundColor: "#414141",
        }}
      >
        <Menu iconShape="square" style={{ marginTop: "20px" }}>
          <MenuItem style={{ marginTop: "100px" }} icon={<RiDashboardFill />}>
            <Link to="/">Dashboard</Link>
          </MenuItem>

          <MenuItem style={{ marginTop: "100px" }} icon={<HiUsers />}>
            <Link to="/users">Users</Link>
          </MenuItem>

          <MenuItem style={{ marginTop: "100px" }} icon={<HiUsers />}>
            <Link to="/instagram">Instaram</Link>
          </MenuItem>
          <MenuItem style={{ marginTop: "100px" }} icon={<AiOutlineMessage />}>
            Messages
          </MenuItem>
          <MenuItem style={{ marginTop: "100px" }} icon={<HiOutlineMail />}>
            Email
          </MenuItem>
          <SubMenu
            style={{ marginTop: "100px" }}
            title="Settings"
            icon={<FiSettings />}
          >
            <MenuItem>General</MenuItem>
            <MenuItem>User</MenuItem>
          </SubMenu>
        </Menu>
      </ProSidebar>
   
    </div>
  );
}

export default Sidebar;
