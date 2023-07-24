import { useCartContext } from "../provider/CartProvider";

const Cart = ({product}) => {

  const { dispatch } = useCartContext();

  const {
    state: { cart },
  } = useCartContext();

  const deleteFromCart = () => {
    dispatch({ type: "REMOVE_FROM_CART", payload: product });
    alert("Producto eliminado del carrito");
  };

  const cleanCart = () => {
    dispatch({ type: "CLEAR_CART"});
    alert("El carrito se ha limpiado");
  };

  return (
    <section className="w-full min-h-[800px] flex justify-center">
      <div className="container flex flex-col items-center p-4">
        <h1 className="font-bold text-3xl">Carrito de compra</h1>
        <button className="text-blue-500" onClick={cleanCart}>Limpiar carrito</button>
        <div className="flex flex-wrap gap-4">
          {cart.map((product) => (
            <div className="flex flex-col gap-2 rounded-xl bg-white p-4 w-44 items-center">
              <img
                src={product.image}
                className="w-24 h-24 object-cover"
                alt={product.title}
              />
              <h1>{product.title}</h1>
              <span>${product.price}</span>
              <span>ID {product.id}</span>
              <button className="text-blue-500" onClick={deleteFromCart}>Eliminar del carrito</button>
              
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Cart;