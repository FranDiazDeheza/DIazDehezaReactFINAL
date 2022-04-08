import React, {useState} from 'react';



export default function ItemCount({stock, addToCart})
{
    const [count,setCount] = useState(1);

    function resta() {
        if (count <= stock && count > 1) setCount(count - 1);
    }

    function suma(){
        if (count < stock) setCount(count + 1);
    }
    

return (
    
     <div className="container">
     <div className="border-primary container mt-5">
     <div id="botonmameno" className="btn-group" role="group" aria-label="Basic outlined example">    
     <button onClick={resta} type="button" className="btn btn-outline-primary"> - </button>
     <span className="my-auto px-5">{count}</span>
     <button onClick={suma}  type="button" className="btn btn-outline-primary"> + </button>
     </div>
     </div>
     <div className="container">
     <div className="text-center d-flex flex-column">
     <button onClick={() => addToCart(count)}  type="button" className="mt-4 btn btn-success cart-button px-5"> Agregar al Carrito </button>    
    <small className="text-muted mt-2">Stock Disponible {stock} </small> 
      
    
    
    </div>
    </div>    
    </div>
     
)
}













