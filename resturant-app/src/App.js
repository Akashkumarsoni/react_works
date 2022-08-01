import "./App.css";
import "./test.json";
import React, { Component } from "react";
import { Route, Router, Routes } from "react-router-dom";
import Home from "./Home";

var data = require("./test.json");

export const  App =(props)=> {

  const [state,setState] = React.useState({
    restaurant: data.restaurants,
    restaurants: data.restaurants,
    searchval: "",
    home: 0,
    selectedpageid: "",
    login: 1,
    signupornot: 0,
    emS: "",
    psS: "",
    cps: "",
    emL: "",
    psL: "",
    user: { u: "", p: "" },
  });
  
  const searchrestaurent = (e) => {
    var searchedarray = [];
    var searchval = e.target.value;
    if (searchval === "") {
      setState({
        ...state,
        restaurant: state.restaurants,
      });
    } else {
      state.restaurant.forEach((i) => {
        if (i.name.toLowerCase().includes(searchval)) {
          searchedarray = [...searchedarray, i];
          setState({
            ...state,
            restaurant: searchedarray,
          });
        } else if (i.cuisine_type.toLowerCase().includes(searchval)) {
          searchedarray = [...searchedarray, i];
          setState({
            ...state,
            restaurant: searchedarray,
          });
        } else if (i.neighborhood.toLowerCase().includes(searchval)) {
          searchedarray = [...searchedarray, i];
          setState({
            ...state,
            restaurant: searchedarray,
          });
        }
      });
    }
  };
const sendittopage=()=>{
  alert("akash");
}
    return (
      <>
      <Home sendittopage={sendittopage} restaurant={state.restaurant} searchrestaurent={searchrestaurent}/>
      {/* <Routes>
        <Route path='/home' element={<Home sendittopage={sendittopage} restaurant={state.restaurant} searchrestaurent={searchrestaurent}/>} />
      </Routes> */}
      </>
    );
  }

