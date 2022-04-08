import './App.css';
import Navbar from './components/navBar';
import ItemListConteiner from './components/ItemListConteiner';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import ItemDetailConteiner from './components/ItemDetail/ItemDetailConteiner';
import Carrito from './components/ViewCarrito';
import {CartContextProvider} from './components/context/CartContext'; 
import 'bootstrap/dist/css/bootstrap.css';



function App() {
  
  
  return (


    
    <CartContextProvider>
  <Router>
 
  <Navbar />
  <Routes>
    <Route path="/" element={<ItemListConteiner  greeting="Libros" />} />
    <Route path="/category/:categoryid" element={<ItemListConteiner greeting ="Categoria" />} />
    <Route path="/item/:id" element={<ItemDetailConteiner greeting="Detalles" />} />
    <Route path="/ViewCarrito" element={<Carrito></Carrito>} />

  </Routes>
 
 </Router>  

 </CartContextProvider>

 
  );
}


export default App;