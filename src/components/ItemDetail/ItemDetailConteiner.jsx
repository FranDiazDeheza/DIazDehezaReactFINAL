import React, { useState,useEffect } from "react";
import ItemDetail from "./ItemDetail"
import {useParams} from "react-router-dom";
import { getBook } from "../../firebase";

function ItemDetailConteiner() {

  const [item,setbookss] = useState([]);
  const {id} = useParams()

  useEffect(() => {
    let requestbooks = getBook(id)
 

  requestbooks.then ((booksResolve) => {
    setbookss(booksResolve);}).catch ( (errorReject) => {
      console.log(errorReject);})
      .finally (() => {
        console.log("Concluido")
      })
    

    
}
  ,[id]
  
  );


  return (

    <div>

     
      
         <ItemDetail 
             book_name={item.book_name}
             writer_name={item.writer_name}
             gender={item.gender}
             stock={item.stock}
             image={item.image}
             price={item.price}
             id={item.id} /> 
       
      
    </div>








  )
} 

export default ItemDetailConteiner