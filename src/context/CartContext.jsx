import React, {useState, useContext} from 'react'
const CartContext = React.createContext([]);
export const useCartContext = () => useContext(CartContext)

const CartProvider = ({children}) => {

const [carrito, setCart] = useState([]);

const addProduct = (item, newQuantity) => {
    const newCart = carrito.filter(prod => prod.id !== item.id);
    newCart.push({...item, quantity: newQuantity});
    setCart(newCart);
}

const totalPrice = () => {
  return carrito.reduce((prev, act) => prev + act.quantity * act.precio, 0)
}

const totalProducts = () => carrito.reduce((acumulador, productoActual) => acumulador + productoActual.quantity, 0);

const clearCart = () => setCart([]);

const estaEnElCart = (id) => carrito.find(product => product.id === id) ? true : false;

const borrarProducto = (id) => setCart(carrito.filter(product => product.id !== id));

const validarFormulario = (campos) => {
  return campos.some((campo) => campo === "")
}


  return (
    <CartContext.Provider value={{
        clearCart,
        estaEnElCart,
        borrarProducto,
        addProduct,
        totalPrice,
        totalProducts,
        validarFormulario,
        carrito   
    }}>
        {children}
    </CartContext.Provider>
  )
}

export default CartProvider