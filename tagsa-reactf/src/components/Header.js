import { Component, React } from "react";
import { getUserInfo } from "../API-Requests";
import { useState, useEffect } from "react";

import "./Header.css";

const Header = () => {

//    getUsername = () => {
       
//    }
//   useEffect(() => {
//     const fetchData = async () => {
//       const responseJson = await getUserInfo();
//       username = responseJson.content[0].username;
//       console.log(username);
//     };

//     fetchData();
//   }, []);

  return (
      <header>
          <h1>TAGSA</h1>
      </header>

  )
};

export default Header;
