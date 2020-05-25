import React, { useEffect, Fragment } from "react";
import SearchBar from "./components/layout/SearchBar";
import Logs from "./components/logs/Logs";
import Addbtn from './components/layout/Addbtn';
import AddLogModal from './components/logs/AddLogModal'


import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css/dist/js/materialize.min.js";
import "./App.css";

const App = () => {
  useEffect(() => {
    //Initialize the materialize-css
    M.AutoInit();
  });
  return (
    <Fragment>
      <SearchBar />
      <div className='container'>
        <Addbtn />
        <AddLogModal />
        <Logs />
      </div>
    </Fragment>
  );
};

export default App;
