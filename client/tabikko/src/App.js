import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

const App = () => {
  const [data, setData] = useState([]);
  useEffect( () => {
    axios({
      method: "GET",
      url: 'http://localhost:3200/'
    }).then(res => {
      setData(res.data)
    })
  }, [setData])
  console.log(data);
  return (
    <div className="App">
      <header className="App-header">
        <div>
          {data}
        </div>
      </header>
    </div>
  );
}

export default App;
