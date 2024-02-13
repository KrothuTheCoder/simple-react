import React from 'react';
import ReactDOM from 'react-dom';

class Index extends React.Component {
  constructor() {
    super();
    this.state = {
      data: null,
    };
  }

  componentDidMount() {
    // Make API call with an extra header
    fetch('https://gateway-ipa.eastus.cloudapp.azure.com/data', {
      method: 'GET',
      headers: {
        'Ocp-Apim-Subscription-Key': '1193b86901a44fa181cb016bfd85089f'
      },
    })
      .then(response => response.json())
      .then(data => this.setState({ data }))
      .catch(error => console.error('Error fetching data:', error));
  }

  render() {
    return (
      <div>
        <h1>Hello, React!</h1>
        {this.state.data ? (
          <div>
            <p>Data from API:</p>
            <pre>{JSON.stringify(this.state.data, null, 2)}</pre>
          </div>
        ) : (
          <p>Loading data...</p>
        )}
      </div>
    );
  }
}

ReactDOM.render(<Index />, document.getElementById('root'));
