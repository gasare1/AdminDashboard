import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Usageinfo from "./Usageinfo";
import Dashboard from "./UserInfo";
function DashboardRoutes() {
  return (
    <div id='/'
      style={{
        display: "flex",
        justifyContent: "center",
        margin: "20px",
        alignItems: "center",
      }}
    >
      <Router
        style={{
          display: "flex",
          justifyContent: "center",
          margin: "20px",
          alignItems: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            margin: "20px",
            alignItems: "center",
          }}
        >
          {" "}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              margin: "20px",
            }}
          >
            <Dashboard />
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "flex-start",
              margin: "20px",
              alignItems: "flex-start",
            }}
          >
            {" "}
            <Usageinfo />
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            margin: "20px",
            alignItems: "center",
          }}
        >
          {" "}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              margin: "20px",
            }}
          >
            <Dashboard />
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "flex-start",
              margin: "20px",
              alignItems: "flex-start",
            }}
          >
            {" "}
            <Usageinfo />
          </div>
        </div>
      </Router>
    </div>
  );
}

export default DashboardRoutes;
