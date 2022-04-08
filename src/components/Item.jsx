import React from 'react'
import {Link} from "react-router-dom";

function Item({id,image, stock, book_name, writer_name,gender,price}) {
  return (
    
    
    <div className="bg-white">
     
  <div className="max-w-2xl mx-auto py-10 px-2 sm:py-12 sm:px-6 lg:max-w-7xl lg:px-8">
    
    <div className="col d-flex justify-content-center mb-4">
          <img src={image} alt=""></img>
        </div>
        <div className="mt-4">
          <div>
            <h3 id="titlebook" className="text-sm text-center text-gray-700">
             
                
                {book_name}
           
            </h3>
            <p id="genderbook" className="mt-1 text-sm text-center text-gray-500">{writer_name}</p>
            <p className="text-sm text-center text-gray-500">{gender}</p>
          </div>
          
          <p id="price" className="mt-1 text-sm  text-center font-medium text-gray-900">${price}</p>
          <div class="d-flex justify-content-center">
          <Link className="mt-12 btn btn-success  px-1" to={`/item/${id}`}>
              Detalles del Libro
          </Link>
          </div>
        </div>
      
<br>
</br>
</div>

</div>



  )
}

export default Item







