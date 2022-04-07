import React from 'react';
import {useContext} from "react"
import CartContext from './context/CartContext';
import {Link} from "react-router-dom"




function Carrito(){
    const {removeItem,itemsCart,clearCart,getTotalPrice} = useContext(CartContext);



let itemsForOrder = itemsCart.map((ItemAAgregar) => {
    return {id: ItemAAgregar.id, name: ItemAAgregar.book_name, price: ItemAAgregar.price,qty: ItemAAgregar.qty}
});

const order = {
    buyer: {
        name: "coder",
        phonenumber: "18101816",
        mail: "genericmail@cdhouse.arg",
    },
    items: [...itemsForOrder],
    total: getTotalPrice(),
};


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
            </div>





      )
  }
}



export default Carrito