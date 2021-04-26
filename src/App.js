import React, { Component } from "react";
import Controller from "./components/Controller";
import { Typography } from "antd";
  
import "antd/dist/antd.css";
  
import "./App.css";
const { Title } = Typography;
  
const App = () => {
  return (
    <div className="App">
      <Controller />
    </div>
  );
}
  
export default App;