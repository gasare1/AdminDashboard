import * as React from "react";
import { useState, useEffect } from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import ExpandMore from "@mui/icons-material/ExpandMore";
import MyChart from "./Databaseinfo";
import Databaseinfo from "./Databaseinfo";
import Usage from "./Usage";
import axios from "axios";

function Usageinfo() {
  const [getInfo, setInfo] = useState([0]);
  const [expanded, setExpanded] = React.useState(false);



    const newData = [];
    const url = "https://randomuser.me/api/?results=100";

    const getAllData = () => {
      axios.get(`${url}`).then((response) => {
        console.log(response.data.results);
        
        setInfo(response.data.results);
        if (response.data) {
          console.log(response.data);
        }
      });
    };

      const handleExpandClick = () => {
        setExpanded(!expanded);
  };
  return (
    <div>
      <Card
        sx={{
          maxWidth: 345,
          backgroundImage:
            "linear-gradient(to bottom, #788fb1, #5f95b7, #409bb5, #1fa0ab, #1ba499);",
        }}
      >
        <CardHeader
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          title={localStorage.getItem("user")}
          subheader={localStorage.getItem("users")}
        />

        <CardContent>
          <Usage />
        </CardContent>
      </Card>
    </div>
  );
}

export default Usageinfo;
