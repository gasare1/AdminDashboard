import axios from "axios";
import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Example from "./Dashboard/Users/Users";
import { Bar } from "react-chartjs-2";
import Chart from "react-google-charts";
import Pagination from "react-bootstrap/Pagination";
import "bootstrap/dist/css/bootstrap.min.css"



function Table() {
  const [getInfo, setInfo] = useState([0]);
  const newData = [];
  const url =
    "https://api.apify.com/v2/key-value-stores/moxA3Q0aZh5LosewB/records/LATEST?disableRedirect=true";

  useEffect(() => {
    axios.get(`${url}`).then((response) => {
      console.log(response.data.casesByState);
      setInfo(response.data.casesByState);
      if (response.data) {
        console.log(response.data.casesByState[0]);
      }
    });
  });
  const data1 = (canvas) => {
    const ctx = canvas.getContext("2d");
    const gradient = ctx.createLinearGradient(0, 0, 100, 0);

    return {
      backgroundColor: gradient,
      // ...the rest
    };
  };

  const name = getInfo.map((data) => <span>{data.name}</span>);
  const data = getInfo.map((data) => <span>{data.casesReported}</span>);
  const range = getInfo.map((data) => <span>{data.range}</span>);

  newData.push(data);
  const updatedData = newData.splice(",");
  console.log(newData);
  let active = 2;
  let items = [];
  for (let number = 1; number <= 5; number++) {
    items.push(
      <Pagination.Item key={number} active={number === active}>
        {number}
      </Pagination.Item>
    );
  }
  return (
    <div
      style={{
        width: "85.2vw",
        float: "right",
        backgroundColor: "#414141",
        height: "100vh",
      }}
    >
      <Pagination>
        <table
          className="table table-striped table-dark"
          striped
          bordered
          hover
        >
          <thead>
            <tr>
              <th>State</th>
              <th>Cases Reported</th>
              <th>Deaths</th>
            </tr>
          </thead>
          <tbody>
            {getInfo.map((data) => (
              <tr>
                <th scope="row" key={data.name}>
                  {data.name}
                </th>
                <td>{data.casesReported}</td>
                <td>{data.range}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <Pagination>
        <Pagination.Prev />
        <Pagination.Ellipsis />
        <Pagination.Item>{3}</Pagination.Item>
        <Pagination.Item>{4}</Pagination.Item>
        <Pagination.Item>{5}</Pagination.Item>
        <Pagination.Ellipsis />
        <Pagination.Next />
      </Pagination>
        <Chart
          width={"500px"}
          height={"300px"}
          chartType="Bar"
          loader={<div>Loading Chart</div>}
          data={[
            ["Year", "Sales", "Expenses", "Profit"],
            ["2014", newData, 4566, 4564, 4556],
            ["2015", 1170, 460, 250],
            ["2016", 660, 1120, 300],
            ["2017", 1030, 540, 350],
          ]}
          options={{
            // Material design options
            chart: {
              title: "Company Performance",
              subtitle: "Sales, Expenses, and Profit: 2014-2017",
            },
          }}
          // For tests
          rootProps={{ "data-testid": "2" }}
        />
      </Pagination>
    </div>
  );
}


export default Table;
