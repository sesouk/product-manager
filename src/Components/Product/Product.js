import React from 'react';

const Product = (props) => {
  Product.defaultProps = {
    inventory: []
  }
  const { getId, toggle, deleteProd, btn, inventory, 
    getName, getPrice, getImg, editProd} = props
    console.log(inventory);
  const products = inventory && inventory.map((e, i) => {
    return <div key ={i}>
    <div className='prodBtn'>
    <img src={e.img} alt={e.name}/>
    <div className='prodBtnHldr'>
    <div>Product: {e.name}</div>
    <div>Price: ${e.price}</div>
    <button onClick={() => deleteProd(e.id)}>Delete</button>
    <button onClick={() => {
      getId(e.id);
      if (editProd !== e.name) {
      getName(e.name) 
      getPrice(e.price) 
      getImg(e.img)}
      if (btn) toggle()
      }}>Edit</button>
    </div>
    </div>
    </div> 
  })
  return (
    <>
    {products}
    </>
  );
};

export default Product;