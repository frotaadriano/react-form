import React, { Fragment, Component } from 'react';
import './App.css';

// import Row from "react-bootstrap/Row";
// import Col from "react-bootstrap/Col";

import './../node_modules/primereact/resources/themes/nova-light/theme.css';
import './../node_modules/primereact/resources/primereact.min.css';
import './../node_modules/primeicons/primeicons.css';

import MainContentComponent from './MainContent/index';

function App() {
  const citySelectItems = [
    { label: 'New York', value: 'NY' },
    { label: 'Rome', value: 'RM' },
    { label: 'London', value: 'LDN' },
    { label: 'Istanbul', value: 'IST' },
    { label: 'Paris', value: 'PRS' }
  ];


  return (
    <Fragment className="layout-wrapper layout-static">
      <MainContentComponent></MainContentComponent>
    </Fragment>
  );
}

export default App;
