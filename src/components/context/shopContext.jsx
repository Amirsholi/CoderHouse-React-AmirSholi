import { createContext, useEffect, useState } from "react";



export const ShopContext = createContext();





const ShopComponentContext = ({children}) => {

    const [item, setItem] = useState();
    const [products, setProducts] = useState([]);



    const firstCart = JSON.parse(localStorage.getItem("cart")) || []
    


    const [cart, setCart] = useState (firstCart);




    
    const isInCart = (id) => {return cart.find(product => product.id === id) ? true : false};
    const removeProduct = (id) => {
        const filterCart = cart.filter(product => product.id !== id)
        setCart(filterCart)
        localStorage.setItem("cart", JSON.stringify(filterCart))
    };



    
    const addToCart = (newQuantity) =>{

        if(cart.length === 0){
            const newItem = {...item, quantity: newQuantity}
            
            
            
            const newCart = [...cart, newItem];
            setCart(newCart)
            localStorage.setItem("cart", JSON.stringify([newCart]))

        }else{
            const newCart = cart.filter((prod => prod.id !== item.id));
            newCart.push({...item, quantity: newQuantity})
            setCart(newCart)
            localStorage.setItem("cart", JSON.stringify(newCart))
        }
    }
    return(
        <ShopContext.Provider value={{item, setItem, products, setProducts, cart, addToCart, removeProduct, isInCart}}>
            {children}
        </ShopContext.Provider>
    )
}

export default ShopComponentContext;