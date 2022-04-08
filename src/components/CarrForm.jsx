import React, {useState} from 'react'
import { sendOrder } from "../firebase";



function CarrForm({handleSubmit}) {
    const [buyer,setBuyer] = useState({
        name:"",
        phonenumber:"",
        mail:"",
    })


 function handleInput(event){
     const target = event.target;

     const value = target.value;
     const nameInput= target.name;


     setBuyer({
         ...buyer,
         [nameInput]: value
     })

 }

 function handleForm(evt){
     evt.preventDefault();
     handleSubmit(buyer);
 }



  return (
    <div className="container mt-5">
        <h2> Completar con tu informacion para concluir la compra</h2>
        
    <form className="py-5">
        <div>
            <label htmlFor="name">Nombre y Apellido</label>
            <input onChange={evt => handleInput(evt)} value={buyer.name} type="text" name="name"></input>
        </div>
        <hr/>
        <div>
            <label htmlFor="phonenumber">Telefono</label>
            <input onChange={evt => handleInput(evt)} value={buyer.phonenumber} type="text" name="phonenumber"></input>
        </div>
        <hr/>
        <div>
            <label htmlFor="mail">Email</label>
            <input onChange={evt => handleInput(evt)} value={buyer.mail} type="text" name="mail"></input>
        </div>
        <hr/>
        <div className="btn-group text-center mt-4">
            <button onClick={handleForm} className="btn btn-success">Finalizar</button>
        </div>












    </form>
     














    </div>
  )
}

export default CarrForm