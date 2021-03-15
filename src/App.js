import React, { Fragment, useEffect } from 'react';
import SearcBar from './component/layout/SearchBar';
import Logs from './component/logs/Logs';

import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';
import './App.css';

const App = () => {

  useEffect(() => {
    // Initializes Materialize JS 
    M.AutoInit();
  })

  return (
    <div className="App">
      <Fragment>
        <SearcBar />
        <div className="container">
          <Logs/>
        </div>
      </Fragment>
    </div>
  );
}

export default App;
