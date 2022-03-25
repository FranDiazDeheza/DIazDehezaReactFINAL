import React from 'react'
import Item from './Item'

function ItemList({books}) {
  return (
    <div>

     {
     books.map (
         (item) => { 
             return <Item
             book_name={item.book_name}
             writer_name={item.writer_name}
             gender={item.gender}
             stock={item.stock}
             image={item.image}
             price={item.price}
             id={item.id}
             
             
             
             />


         })
         }

    </div>
  )
}

export default ItemList