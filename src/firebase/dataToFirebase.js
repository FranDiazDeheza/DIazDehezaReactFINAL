import { db } from "."
import { collection,setDoc,doc } from "firebase/firestore/lite"

const database = [{
    "image": "https://images.cdn1.buscalibre.com/fit-in/360x360/65/3c/653c80e8812293a4061faad35a822642.jpg",
    "stock": 12,
    "book_name": "El Fantasma de Canterville",
    "writer_name": "Oscar Wilde",
    "gender": "Terror",
    "price" : 8210,
    
  }, {
    "image": "https://contentv2.tap-commerce.com/cover/large/9789505153527_1.jpg?id_com=1113",
    "stock": 24,
    "book_name": "Operacion Masacre",
    "writer_name": "Rodolfo Wolsh",
    "gender": "Policial",
    "price" : 5400,
    
  }, {
    "image": "https://images.cdn3.buscalibre.com/fit-in/360x360/93/96/939646b62ed22985f2b50e6b9057a22f.jpg",
    "stock": 37,
    "book_name": "Demian",
    "writer_name": "Hermann Hesse",
    "gender": "Ficcion",
    "price" : 950,
    
  }, {
    "image": "https://www.elejandria.com/covers/Don_Quijote_de_la_Mancha-Cervantes_Miguel-md.png",
    "stock": 40,
    "book_name": "Don Quijote",
    "writer_name": "Miguel de Cervantes",
    "gender": "Novela",
    "price" : 1250,
    
  }, {
    "image": "https://pictures.abebooks.com/isbn/9788420662572-us.jpg",
    "stock": 51,
    "book_name": "Historia de dos ciudades",
    "writer_name": "Charles Dickens",
    "gender": "Novela",
    "price" : 540,
    
  }, {
    "image": "https://images.cdn1.buscalibre.com/fit-in/360x360/c6/78/c678ab2c90ed50d7d8849e30bc92b05a.jpg",
    "stock": 68,
    "book_name": "El señor de los anillos ",
    "writer_name": "J.R.R. Tolkien",
    "gender": "Fantasia",
    "price" : 7525,
    
  }, {
    "image": "https://images.cdn2.buscalibre.com/fit-in/360x360/0d/0f/0d0f0b348670d4ed65fa3a46b1d80e55.jpg",
    "stock": 72,
    "book_name": "El Principito",
    "writer_name": "Antoine de Saint-Exupéry",
    "gender": "Fantasia",
    "price" : 350,
    
  }, {
    "image": "https://images.cdn2.buscalibre.com/fit-in/360x360/f6/4d/f64d43080d71f684b1830f8484c25801.jpg",
    "stock": 81,
    "book_name": "20.000 leguas de viaje submarino",
    "writer_name": "Julio Verne",
    "gender": "Ficcion",
    "price" : 2400,
    
  }, {
    "image": "https://images.cdn1.buscalibre.com/fit-in/360x360/ca/4f/ca4fa3bca258ad0a0125c219612ae367.jpg",
    "stock": 9,
    "book_name": "Sense & Sensibility" ,
    "writer_name": "Jane Austen",
    "gender": "Drama",
    "price" : 4500,
    
  }, {
    "image": "https://www.libreriasinopsis.com/imagenes/9788420/978842064931.JPG",
    "stock": 10,
    "book_name": "Guerra y paz",
    "writer_name": "Leon Tolstoy",
    "gender": "Novela",
    "price" : 3450,
    
  },
  {
    "image": "https://imagessl1.casadellibro.com/a/l/t5/21/9788498381221.jpg",
    "stock": 31,
    "book_name": "Mil Soles Esplendidos",
    "writer_name": "Khaled Hosseini",
    "gender": "Drama",
    "price" : 675,
    
  },
  {
    "image": "https://www.elejandria.com/covers/El_perro_del_hortelano-Lope_de_Vega-lg.png",
    "stock": 17,
    "book_name": "El Perro del Hortelano",
    "writer_name": "Lope de Vega",
    "gender": "Drama",
    "price" : 4500,
    
  },
  {
    "image": "https://contentv2.tap-commerce.com/cover/large/9789877182361_1.jpg?id_com=1162",
    "stock": 7,
    "book_name": "Cuentos Policiales",
    "writer_name": "Edgar Allan Poe",
    "gender": "Policial",
    "price" : 1700,
    
  },
  {
    "image": "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1314735183l/12477077.jpg",
    "stock": 16,
    "book_name": "El misterio de Salem's Lot",
    "writer_name": "Stephen King",
    "gender": "Terror",
    "price" : 4990,
    
  },
  {
    "image": "https://http2.mlstatic.com/D_NQ_NP_770895-MLA41517676262_042020-O.jpg",
    "stock": 23,
    "book_name": "Dracula",
    "writer_name": "Bram Stoker",
    "gender": "Terror",
    "price" : 4990,
    
  },
   
  
  
  
  
  
  ]

async function dataToFirebase() {
    database.forEach((item) => {
        const newItem = doc(collection(db,"books"))

        setDoc(newItem, item).then(() => {
            console.log("Document Written with id:", newItem.id)
        })
        .catch(err => {
            console.error("Error adding document: ",err)
        })







    })
}  


export default dataToFirebase;