import React, { useState,useEffect } from "react";
import ItemList from "./ItemList"
import {useParams} from "react-router-dom";
import {getallBooks,getAllBooksFrom} from "../firebase"









function ItemListConteiner(props) {
  const [books,setbooks] = useState([]);
  let {categoryid} = useParams();

  useEffect(() => {
 const result = categoryid? getAllBooksFrom(categoryid) : getallBooks();

  result.then(itemsPromise => {setbooks(itemsPromise)})
    

    
}
  ,[categoryid]
  
  );


  return (

    <div>

      <h1> {props.greeting} </h1>
      <ItemList books={books} />

    </div>






  )
}

export default ItemListConteiner