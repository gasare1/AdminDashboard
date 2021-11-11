import React, { useState, useEffect } from "react";
import {Bar,Line,Chart} from 'react-chartjs-2';
import axios from "axios";
function Usage() {
    const [getInfo, setInfo] = useState([0]);
    const newData = [];
    const url =
      "https://randomuser.me/api/?results=100";
  
    const getData = () => {
      axios.get(`${url}`).then((response) => {
        console.log(response.data.casesByState);
        setInfo(response.data.casesByState);
        if (response.data) {
          console.log(response.data.casesByState[0]);
        }
      });
    };
    const name = getInfo.map((data) => <span>{data.name}</span>);
    const state = {
        labels: [0],
        datasets: [
          {
            label: 'Cases',
            backgroundColor: 'rgba(75,192,192,1)',
            borderColor: 'rgba(0,0,0,1)',
            borderWidth: 2,
            data: [0]
          }
        ]
      }

  return (
    <div>
        <Bar
          data={state}
          options={{
            title:{
              display:true,
              text:'Average Rainfall per month',
              fontSize:20
            },
            legend:{
              display:true,
              position:'right'
            }
          }}
        />
      </div>
  );
}

export default Usage;
