import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { TableHeaderColumn } from "react-bootstrap-table";
import paginationFactory from "react-bootstrap-table2-paginator";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css";
import BootstrapTable from "react-bootstrap-table-next";
import cellEditFactory from "react-bootstrap-table2-editor";
import ToolkitProvider, { Search } from "react-bootstrap-table2-toolkit";
import { Container } from "react-bootstrap";
import Button from '@mui/material/Button';
function Table() {
  const [getInfo, setInfo] = useState([0]);
  const newData = [];
  const url =
    "https://randomuser.me/api/?results=100";

  useEffect(() => {
    axios.get(`${url}`).then((response) => {
      console.log(response.data.results);
      localStorage.setItem("users", response.data.results.length);
      localStorage.setItem("user", "Users");
      setInfo(response.data.results);
      if (response.data) {
        console.log(response.data);
      }
    });
  },[]);
  
  function rowStyleFormat(row, rowIdx) {
    return {
      backgroundColor: rowIdx % 2 === 0 ? "white" : "gray",
      color: "black",
    };
  }
  function priceFormatter(cell, row) {
    if (row.onSale) {
      return (
        <span>
          <strong style={ { color: 'red' } }>{ cell } <img src={getInfo.picture.large}/></strong>
        </span>
      );
    }
  
    return (
      <span>{ cell } <img src={getInfo.picture}/></span>
    );
  }
  const columns = [
    {
      dataField: "id.value",
      text: "ID",
      formatter: priceFormatter,
      sort: true
    },
    {
      dataField: "name.first",
      text: "Name",
      sort: true,
    },
    {
      dataField: "name.last",
      text: "Last",
      sort: true,
    },
    {
      dataField: "email",
      text: "Email",
      sort: true,
    },
    {
      dataField: "phone",
      text: "Cell",
      sort: true,
    },
    {
      dataField: "location.country",
      text: "Location",
      sort: true,
      Cell: props=> (
        <img
          src={getInfo.picture.large}
          width={60}
          alt='Player'
        />)
    },
  ];

  const selectRow = {
    mode: 'checkbox',
    clickToSelect: true,
    clickToEdit: true,  // Click to edit cell also
    bgColor: '#00BFFF'
  };
  const { SearchBar } = Search;
  var axios = require("axios").default;

  const options = () => {
    fetch("https://instagram28.p.rapidapi.com/medias?user_id=25025320&batch_size=20", {
    "method": "GET",
    "headers": {
      "x-rapidapi-host": "instagram28.p.rapidapi.com",
      "x-rapidapi-key": "9cb680335bmsh31d44ef89085eeep1acd36jsnf36e9a9108d0"
    }
  })
  .then(response => {
    console.log(response);
  })
  .catch(err => {
    console.error(err);
  });
  };
  
  axios.request(options).then(function (response) {
    console.log(response.data);
  }).catch(function (error) {
    console.error(error);
  });
  return (
    <div >
        <h1 style={{justifyContent:'center',alignContent:'center',display:'flex',color:'white'}}>Registered User DATA</h1>
    <Container>
      <ToolkitProvider keyField="id" data={getInfo} columns={columns} search>
        {(props) => (
          <div>
           <br/><hr/> <SearchBar {...props.searchProps} />
            <hr/>
            <BootstrapTable

              keyField="id"
              data={getInfo}
              columns={columns}
              selectRow={selectRow}
              rowStyle={rowStyleFormat}
              pagination={paginationFactory()}
              cellEdit={cellEditFactory({ mode: "click" })}
              {...props.baseProps}
            />
          </div>
        )}
      </ToolkitProvider>
     
    </Container>
    </div>
  );
}

export default Table;
