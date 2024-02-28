import React from 'react';
import {createRoot} from 'react-dom/client'
import DonkeyComponent from './components/donkey';
import DataFetchComponent from './components/go'; // Import the new compon


const container = document.getElementById('root');
const root = createRoot(container);
root.render(
  <React.StrictMode>
    <DonkeyComponent />
    <DataFetchComponent />
  </React.StrictMode>
);
