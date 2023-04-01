import React, {Component, useState} from "react";
import '../styles/App.css';

const App = () => {
  let projectName  = 'Export booking/customer service portal'
  let disc = 'nothing for now, i will write it later...'
  return (
    <div id="main">
    <h1 data-ns-test="project-name"> {projectName} </h1>
    <p data-ns-test="project-description"> {disc} </p>
    </div>
  )
}


export default App;
