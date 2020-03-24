import React, { useState, useEffect } from 'react';
import axios from 'axios'
import './App.css';
import Dashboard from '../src/Components/Dashboard/Dashboard'
import Form from '../src/Components/Form/Form'
import Header from '../src/Components/Header/Header'

function App() {
const [btn, setBtn] = useState(true)
const [inventory, setInventory] = useState([])
const [id, setId] = useState('')

const getId = (val) => setId(val)

const toggle = () => btn ? setBtn(false) : setBtn(true) 

useEffect(() => getProducts(), [])

const getProducts = () => {
  axios.get('/api/inventory').then(r => setInventory(r.data))
}

  return (
    <div className="App">
    <Header/>
    <Form getProducts={getProducts} toggle={toggle} btn={btn} id={id}/>
    <Dashboard inventory={inventory} toggle={toggle} getProducts={getProducts} getId={getId} btn={btn}/>
    </div>
    );
}
  export default App;