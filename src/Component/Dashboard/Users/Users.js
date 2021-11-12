import { useState, useEffect } from "react";
import axios from "axios";
import Header from "../../Navbar/Header";
import Sidebar from "../../Navbar/Sidebar";
import { Box } from "@mui/system";
import Button from '@mui/material/Button';
import GetUserInfo from "./GetUserInfo";
// import './App.css';

function Users() {
  const [getInfo, setInfo] = useState([0]);
  const newData = [];
  const url =
    "https://randomuser.me/api/?results=100";

  const getAllData = () => {
    axios.get(`${url}`).then((response) => {
      // console.log(response.results);
      
      setInfo(response.data.results);
      if (response.data) {
        // console.log(response.data);
      }
    });
  };

  console.log("Picture")
  console.log(getInfo)
  return (
    <div className="App" id='users'>
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
        
        <GetUserInfo/>
        
        
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
          
        </Box>
      </Box>
        
      </div>
  )
}

export default Users

