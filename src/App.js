import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom'
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