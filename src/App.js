import React, { useState } from 'react';
import './App.css';
import Dashboard from '../src/Components/Dashboard/Dashboard'
import Form from '../src/Components/Form/Form'
import Header from '../src/Components/Header/Header'

function App() {
const [inventory, getInventory] = useState([
  {name: 'hello1', price: 5, image: 'http://res.cloudinary.com/kvge/image/upload/c_scale,w_800/v1525285958/Small-Logo-Front-Mock-Up-Black.png'},
  {name: 'hello2', price: 10, image: 'http://res.cloudinary.com/kvge/image/upload/c_scale,w_800/v1525285958/Small-Logo-Front-Mock-Up-Black.png'},
  {name: 'hello3', price: 15, image: 'http://res.cloudinary.com/kvge/image/upload/c_scale,w_800/v1525285958/Small-Logo-Front-Mock-Up-Black.png'},
  {name: 'hello4', price: 20, image: 'http://res.cloudinary.com/kvge/image/upload/c_scale,w_800/v1525285958/Small-Logo-Front-Mock-Up-Black.png'}
])
  return (
    <div className="App">
    <Header/>
    <Dashboard inventory={inventory}/>
    <Form/>
    </div>
    );
}
  export default App;