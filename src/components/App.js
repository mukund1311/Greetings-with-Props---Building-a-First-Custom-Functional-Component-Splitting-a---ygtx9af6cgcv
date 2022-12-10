import React from "react";
import './App.css';
import Welcome from './Welcome';

const App = () => {
  let name = "Mukund";
  return (
    <Welcome name={name} />
  )
}


export default App;
