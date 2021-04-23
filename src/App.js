import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Header from "./components/Header";
import Table from "./components/Table";


const App = () => {
  return (
      <Router>
        <Header />
        <Table />
      </Router>
  );
};

export default App;