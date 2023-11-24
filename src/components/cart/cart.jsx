import { useContext } from "react";
import { ShopContext } from "../context/shopContext";
import ItemList from "../productos/itemList";
import CartItem from "./cartItem";
import { Link } from "react-router-dom";
import EmptyCart from "./emptyCart";



const Cart = () => {

    const {cart} = useContext(ShopContext);


    return(
        <>
        <div className="contenedor flex flex-row-reverse font-quicksand bg-white border shadow-2xl p-5 mt-10 gap-4">
            
                <div className=" w-[20%] h-[325px]"> <CartItem/> </div> 
            
            <div className="flex-1 p-2">
            {cart.length > 0 ?
                <ItemList items={cart} cartFlag={true}/>
                :
                <Link className="bg-red-200 " to={"/category/todos"}><EmptyCart/></Link>}
            </div>
        </div>
        </>
    )
}

export default Cart;