import {createContext, useState} from "react";



const CartContext = createContext();



export function CartContextProvider({children}) {
    const [itemsCart,setItemsCart] = useState ([])


function addItem(ItemAAgregar,qty) {
    if (isItemInCart(ItemAAgregar.id)){
        let index = itemsCart.findIndex(i => i.id === ItemAAgregar.id)
        let copyCart = [...itemsCart]
        copyCart[index].qty += qty
        setItemsCart(copyCart)

    }
    else {
    const itemToAdd = {...ItemAAgregar,qty}
    
    setItemsCart([...itemsCart,itemToAdd])
}
}

function isItemInCart(id) {
    return itemsCart.some(cadait => cadait.id === id)
       
}

function getItemInCart(id) {
    return itemsCart.find(cadait => cadait.id === id)
       
}


function clearCart(){
    setItemsCart([])
}

function countItemsinCart(){
    let totalItems = 0
   itemsCart.forEach(ItemAAgregar => totalItems += ItemAAgregar.qty)
   return totalItems;
}


function getTotalPrice() {  
    let totalPrice = 0
    itemsCart.forEach(ItemAAgregar => totalPrice += ItemAAgregar.qty * ItemAAgregar.price)
    return totalPrice;
 }

 function removeItem(idSupr) {
     setItemsCart (itemsCart.filter (ItemAAgregar => ItemAAgregar.id !== idSupr))
   
}

return (
    <CartContext.Provider value={ {addItem,removeItem,getTotalPrice,countItemsinCart,itemsCart,getItemInCart,clearCart} }>
     {children} 
    </CartContext.Provider>

    )
}

export default CartContext;