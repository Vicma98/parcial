import React from 'react';
import '../components/productos.css'; 

export function Productos() {
    const products = [
        { id: 1, name: 'Producto 1', price: '$10', imageUrl: '/ParcialWeb/public/image.png' },
        { id: 2, name: 'Producto 2', price: '$20', imageUrl: '/path/to/product2.jpg' },
        { id: 3, name: 'Producto 3', price: '$30', imageUrl: '/path/to/product3.jpg' },
        
    ];

    return (
        <div className="productos-container">
            <h1>Lista de Productos</h1>
            <div className="productos-list">
                {products.map(product => (
                    <div key={product.id} className="producto-card">
                        <img src={product.imageUrl} alt={product.name} />
                        <h2>{product.name}</h2>
                        <p>{product.price}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

function sumarCuadros(arrayNumeros) {
    let total = 0;
    arrayNumeros.forEach((numero) => {

        const numString = numero.toString();
        const longitud = numString.length;
        
        console.log("+ " + "-".repeat(longitud) + " +");
        
        console.log("| " + numString + " |");
        
      //se suma el numero al total
        total += numero;
    });
    
    const totalString = total.toString();
    const longitudTotal = totalString.length;
    
    
    console.log("+ " + "-".repeat(longitudTotal) + " +");
    
    console.log("| " + totalString + " |");
    
    
    console.log("+ " + "-".repeat(longitudTotal) + " +");
}

  // Ejemplo
const arrayNumeros = [1, 23, 453, 3267, 12354, 123456];
sumarCuadros(arrayNumeros);
