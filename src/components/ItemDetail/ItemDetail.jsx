import React, {useState} from 'react'
import ItemCount from '../ItemCount/ItemCount'
import {useContext} from 'react'
import CartContext from '../context/CartContext'; 
import {Link} from "react-router-dom"



function ItemDetail({id,image,stock, book_name, writer_name,gender,price}) {

 

  const {addItem,getItemInCart} = useContext (CartContext);
  const ItemAAgregar = {id,image,stock, book_name, writer_name,gender,price}

  let stockNuevo = ItemAAgregar.stock  ;
  const [existinCart,setexistinCart] = useState(false)
  
  
  function addToCart(qty){
    addItem (ItemAAgregar, qty)
    setexistinCart(true)
  }


let itemInCart = getItemInCart(ItemAAgregar.id);

if (itemInCart) {
  stockNuevo = ItemAAgregar.stock - itemInCart.qty;
}









  return (
    <div className="bg-white">
  <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
    
    <div className="col d-flex justify-content-center mb-4">
          <img src={image} alt=""></img>
        </div>
        <div id="info" className="mt-4">
          <div>
          <h3 id="titlebook" className="text-sm text-center text-gray-700">
              
                <span aria-n="true"></span>
                {book_name}
              
            </h3>
            <p id="genderbook" className="mt-1 text-sm text-center text-gray-500">{writer_name}</p>
            <p className="text-sm text-center text-gray-500">{gender}</p>
          </div>
          <p id="price" className="mt-1 text-sm  text-center font-medium text-gray-900">${price}</p>
       
        </div>
        {  existinCart ?
         <Link to="/ViewCarrito"  type="button" className="mt-1 btn btn-info d-flex justify-content-center px-1"> Terminar Compra </Link> 
         :
        <ItemCount addToCart={addToCart} stock={stockNuevo}></ItemCount> 
      }
        
      

</div>
</div>

  )
}

export default ItemDetail