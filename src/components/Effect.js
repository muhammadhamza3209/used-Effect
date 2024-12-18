
import { useEffect, useState } from "react";
import React from "react";



export default function Effect() {

    const [documents,setDocuments]= useState([]);
         
     console.log(documents);

    useEffect(() => {

         fetch("https://jsonplaceholder.typicode.com/users")
           .then((response) => response.json())
           .then((json) => setDocuments(json)); 

    }, [])

  return (
    <>
      <table className="table">
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Address</th>
          </tr>
        </thead>
        <tbody>
          {documents.map((documents,i)=>{
            return (
              <tr key={i}>
                <th>{i + 1}</th>
                <th>{documents.name}</th>
                <th>{documents.email}</th>
                <th>{documents.phone}</th>
                <th>{documents.address.street}</th>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}

