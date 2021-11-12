import React, { Component, useState,useEffect } from "react";
import { Table } from "react-bootstrap";
const GetUsers = ({data,loading}) => {
if (loading) {
    return <h2>Loading .....</h2>
}

  return (
    <div>
      <Table striped bordered hover className="table table-striped" >
        <thead>
          <tr>
            <th>Photo</th>
            <th>First</th>
            <th>Last</th>
            <th>Email</th>
            <th>Id</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.login.uuid}>
              <img src={item.picture.thumbnail} alt={item.name.first} />
            

              <td>{item.name.first}</td>
              <td>{item.name.last}</td>
              <td>{item.email}</td>
              <td>
              {item.login.uuid}
              </td>
            </tr>
          ))}
          
        </tbody>
      </Table>
    </div>
  );
}

export default GetUsers;
