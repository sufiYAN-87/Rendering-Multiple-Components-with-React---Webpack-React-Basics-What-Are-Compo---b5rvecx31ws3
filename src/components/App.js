import React, {Component, useState} from "react";
import '../styles/App.css';

const App = () => {
  let project_name  = 'Export booking/customer service portal'
  let disc = 'nothing for now, i will write it later...'
  return (
    <div id="main">
    <h1 data-ns-test="project-name"> {project_name} </h1>
    <p data-ns-test="project-description"> {disc} </p>
    </div>
  )
}


export default App;
