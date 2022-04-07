import React from 'react'
import {Link} from "react-router-dom";

function Item({id,image, stock, book_name, writer_name,gender,price}) {
  return (
    <div className="bg-white">
  <div className="max-w-2xl mx-auto py-10 px-2 sm:py-12 sm:px-6 lg:max-w-7xl lg:px-8">
    
    <div className="col d-flex justify-content-center mb-4">
          <img src={image} alt=""></img>
        </div>
        <div className="mt-4 flex justify-between">
          <div>
            <h3 className="text-sm text-gray-700">
             
                <span aria-hidden="true" ></span>
                {book_name}
           
            </h3>
            <p className="mt-1 text-sm text-gray-500">{writer_name}</p>
            <p className="mt-1 text-sm text-gray-500">{gender}</p>
          </div>
          <p className="text-sm font-medium text-gray-900">${price}</p>
          <Link className="btn btn-npm install firebase" to={`/item/${id}`}>
              Detalles del Libro
          </Link>
        </div>
      

</div>
</div>

  )
}

export default Item