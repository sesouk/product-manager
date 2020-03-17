import React, { useState, useEffect } from 'react';
import axios from 'axios'
import './App.css';
import Dashboard from '../src/Components/Dashboard/Dashboard'
import Form from '../src/Components/Form/Form'
import Header from '../src/Components/Header/Header'

function App() {
const [inventory, setInventory] = useState([])

useEffect(() => getProducts(), [])

const getProducts = () => {
  axios.get('/api/inventory').then(r => setInventory(r.data))
}

  return (
    <div className="App">
    <Header/>
    <Dashboard inventory={inventory}/>
    <Form getProducts={getProducts}/>
    </div>
    );
}
  export default App;