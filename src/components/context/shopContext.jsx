import { createContext, useEffect, useState } from "react";



export const ShopContext = createContext();





const ShopComponentContext = ({children}) => {

    const [item, setItem] = useState();
    const [cart, setCart] = useState ([]);
    const [products, setProducts] = useState([]);
    const [cartLength, setCarLength] = useState()


    
    const addToCart = () =>{

        if(cart.length === 0){
            localStorage.setItem("cart", JSON.stringify([item]))

        }else{

            localStorage.setItem("cart", JSON.stringify([...cart, item]))
        }
        setCart(JSON.parse(localStorage.getItem("cart") || "" ))
        
    }
    return(
        <ShopContext.Provider value={{item, setItem, products, setProducts, cart, addToCart}}>
            {children}
        </ShopContext.Provider>
    )
}

export default ShopComponentContext;