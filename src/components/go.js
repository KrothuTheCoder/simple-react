import React, { useState } from 'react';

const DataFetchComponent = () => {
  const [apiData, setApiData] = useState('');
    
    const fetchData = async () => {
    
      fetch('https://fd-sandbox.hakabo.com/api/data', {
        method: 'GET',
        headers: {
            'Ocp-Apim-Subscription-Key': '1193b86901a44fa181cb016bfd85089f'
        },
    })
        .then(response => response.json())
        .then(data => {
            setApiData(data); 
        })
        .catch(error => console.error('Error fetching data:', error));

  };

  return (
    <div>
      <button onClick={fetchData}>GO!</button>
      {apiData && <p>{apiData}</p>}
    </div>
  );
};

export default DataFetchComponent;