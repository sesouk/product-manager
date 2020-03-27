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
  const [editName, setName] = useState('')
  const [editPrice, setPrice] = useState('')
  const [editImg, setImg] = useState('')

  const getId = (val) => setId(val)
  const getName = (val) => setName(val)
  const getPrice = (val) => setPrice(val)
  const getImg = (val) => setImg(val)
  const toggle = () => btn ? setBtn(false) : setBtn(true) 

  useEffect(() => getProducts(), [])

  const getProducts = () => {
    axios.get('/api/inventory').then(r => setInventory(r.data))
  }

  return (
    <div className="App">
      <Header/>
      <div className='product-container'>
        <Dashboard inventory={inventory} toggle={toggle} 
        getProducts={getProducts} getId={getId} 
        btn={btn} getName={getName} getPrice={getPrice} getImg={getImg}/>
        <Form getProducts={getProducts} toggle={toggle} 
        btn={btn} id={id}
        editPrice={editPrice} editName={editName}
        editImg={editImg}/>
      </div>
    </div>
    );
}

export default App;