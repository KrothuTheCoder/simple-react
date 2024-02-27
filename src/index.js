import React from 'react';
import ReactDOM from 'react-dom';
import {createRoot} from 'react-dom/client'
import DonkeyComponent from './donkey';
import DataFetchComponent from './go'; // Import the new compon
// class Index extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       data: null,
//     };
//   }

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
  <React.StrictMode>
    <DonkeyComponent />
    <DataFetchComponent />
  </React.StrictMode>
);
