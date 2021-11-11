import React, { Component, useState, useEffect } from "react";
import Button from "@mui/material/Button";
import { Table } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import GetUsers from "./GetUsers";
import Pagination from "./Pagination";

function GetUserInfo() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage,] = useState(10);
  useEffect(() => {
    fetch("https://randomuser.me/api/?results=100")
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
        setLoading(true);
        setData(response.results);
        setLoading(false);
      });
  }, [data.length]);
  const indexOfLAstPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLAstPost - postsPerPage;
  const currentImage = data.slice(indexOfFirstPost, indexOfLAstPost);
  const paginate = pageNumber => setCurrentPage(pageNumber)

  return (
    <div className="containter">
        <h1 style={{justifyContent:"center",alignItems:'center',display:'flex'}}>User Information Portal</h1>
      <GetUsers data={currentImage} loading={loading} />

      <Pagination postsPerPage={postsPerPage} totalPosts={data.length} paginate={paginate} />
    </div>
  );
}

export default GetUserInfo;
