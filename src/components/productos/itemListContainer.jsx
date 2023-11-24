import { useParams } from "react-router-dom"
import { useContext, useEffect, useState } from "react";
import CategoriesMenu from "../ui/categorys";
import ItemList from "./itemList";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../firebase/client";
import { ShopContext } from "../context/shopContext";




const ItemListContainter =  () => {

    const {products, setProducts} = useContext(ShopContext);
    const {categoryName} = useParams();

    const productsRef = collection(db, "productos");

    const getProducts = async () =>{
        const data = await getDocs(productsRef);
        const dataFiltrada = data.docs.map((doc) => ({...doc.data(), id: doc.id}));
        setProducts(dataFiltrada);
    }

    useEffect(()=>{
        getProducts()
    },[categoryName])


    return (
        <div className="contenedor font-quicksand bg-white border shadow-2xl mt-10">
            <div className="flex w-full gap-4">                

                <div className="w-[15%] flex flex-col gap-2 p-2" onClick={getProducts}>
                    <CategoriesMenu /> 
                </div>

                <div className="flex-1 p-2 mb-8">

                {
                    
                categoryName === "vitaminas" ? 

                <h1 className="text-center text-3xl my-32">No hay {categoryName}</h1> :

                <ItemList items={categoryName == "todos" ? products : 
                products.filter((product) => product.categoryId == `${categoryName}`)} cartFlag={false}/> 

                }
                    
                </div>
            </div>
        </div>
    )
}

export default ItemListContainter;