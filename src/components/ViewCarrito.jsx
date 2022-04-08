import React from 'react';
import {useContext} from "react"
import CartContext from './context/CartContext';
import {Link} from "react-router-dom"
import CarrForm from './CarrForm';
import { sendOrder } from "../firebase";
import { Timestamp } from "firebase/firestore/lite"
import {useState} from "react"






function Carrito(){
    const [orderDone,setOrderDone] = useState(false)
    const {removeItem,itemsCart,clearCart,getTotalPrice} = useContext(CartContext);




function handleSubmit(buyer){
    

    let itemsForOrder = itemsCart.map((ItemAAgregar) => {
        return {id: ItemAAgregar.id, name: ItemAAgregar.book_name, price: ItemAAgregar.price,qty: ItemAAgregar.qty}
    });
    
    const order = {
        "buyer": buyer,
        items: [...itemsForOrder],
        total: getTotalPrice(),
        timestamp : Timestamp.fromDate (new Date())
    };
    
    let createOrder = sendOrder(order);
    createOrder.then(idorder => setOrderDone(idorder));
    clearCart();

}

if(orderDone){
    return (
        <div className="container" id="noelem">
            <h1>Gracias por tu compra!</h1>
            <img id="gif"src="https://thumbs.gfycat.com/FloweryVerifiableFennecfox-max-1mb.gif" ></img>
            <p>Este es tu codigo de compra: <strong>{orderDone}</strong> guardalo por cualquier problema</p>
            <p>¿y si llevas uno, por que no dos?</p>
            <Link type="button" className="btn btn-primary" to="../">Ir a la Biblioteca</Link>
             

        </div>
    )
}
      if(itemsCart.length === 0){
        return (
            <div className="container" id="noelem">
                <h1>No hay elementos</h1>
                <p>Te invitamos a adquirir un libro!</p>
                <Link type="button" className="btn btn-primary" to="../">Ir a la Biblioteca</Link>
                 

            </div>
        )
    }

  else {
      return (


          <div className="container">
              <h1 id="carrix"> Carrito de Compras</h1>
              <br></br>
              <table className="table">
              <thead>
              <tr>
                  <th>Libro</th>
                  <th>Precio</th>
                  <th>Cantidad</th>
                  <th>Total</th>
                  <th>Eliminar</th>
              </tr>
              </thead>
              <tbody>
                  

                  {
                  itemsCart.map(ItemAAgregar => {
                     return <tr key={ItemAAgregar.id}>
                          <td>{ItemAAgregar.book_name}</td>
                          <td>{ItemAAgregar.price}</td>
                          <td>{ItemAAgregar.qty}</td>
                          <td>${(ItemAAgregar.qty * ItemAAgregar.price ).toFixed(2)}</td>
                          <td>
                              <button className="btn btn-danger" onClick={() => removeItem(ItemAAgregar.id)}>
                                Eliminar Producto
                              </button>
                          </td>

                           </tr>


                  })}
                  
              </tbody>
              </table>
              <button id="vac" onClick={clearCart} className="btn btn-danger h-500 center-v center-h" > Vaciar Carrito</button>
             <CarrForm handleSubmit={handleSubmit} />
            </div>





      )

  }
}



export default Carrito