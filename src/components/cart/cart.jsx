import { useContext } from "react";
import { ShopContext } from "../context/shopContext";
import ItemList from "../productos/itemList";
import CartItem from "./cartItem";
import { Link } from "react-router-dom";
import Boton from "../ui/boton";



const Cart = () => {

    const {cart} = useContext(ShopContext);


    return(
        <>
        <div className="contenedor flex flex-row-reverse w-full gap-3 mt-3">
            <div className=" w-[20%] ">
                {cart.length > 0 ? <CartItem/> : <Link to={"/category/todos"}><Boton>Llenar Carrito</Boton></Link>}
            </div>
            <div className="flex-1 p-2">
                <ItemList items={cart} cart={true}/>
            </div>
        </div>
        </>
    )
}

export default Cart;