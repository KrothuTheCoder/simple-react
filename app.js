import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [data, setData] = useState('');

  useEffect(() => {
    // Fetch data from C# API
    const fetchData = async () => {
      try {
        const response = await fetch('https://gateway-ipa.eastus.cloudapp.azure.com/data', {
          headers: {
            'Authorization': 'Bearer YourAccessToken', // Replace with your actual header and token
            'Content-Type': 'application/json', // Add any other headers as needed
          },
        });
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>{data}</h1>
      </header>
    </div>
  );
}

export default App;