import { useCartContext } from "../provider/CartProvider";
import ProductDescription from "../pages/ProductDescription";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { CartContextProvider } from "../provider/CartProvider";

const ProductItem = ({ product }) => {
  const { dispatch } = useCartContext();

  const addToCart = () => {
    dispatch({ type: "ADD_TO_CART", payload: product });
    alert("Producto añadido a carrito");
  };

  const verMas = ({product}) => { 
    
    ProductDescription(product);
    alert("Este producto it's okay");
  };

  return (
    <div className="flex flex-col gap-2 rounded-xl bg-white p-4 w-44 items-center">
      <img
        src={product.image}
        className="w-24 h-24 object-cover"
        alt={product.title}
      />
      <h1>{product.title}</h1>
      <span>${product.price}</span>
      <button className="text-blue-500" onClick={addToCart}>
        Añadir a carrito
      </button>      
      <button className="text-blue-500" onClick={verMas}>
        Ver Más
      </button>
    </div>
  );
};

export default ProductItem;