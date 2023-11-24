import { useContext, useState } from "react";
import Counter from "../ui/itemCount";
import { ShopContext } from "../context/shopContext";
import Boton from "../ui/boton";

const ItemDetail = () => {
  const [counter, setCounter] = useState(1);

  const { item, addToCart } = useContext(ShopContext);


  return (
    <>
      <section className=" flex gap-6 mt-10 shadow-2xl border bg-white border-gray-100">
      <img className="h-[520px] w-[380px] my-9 object-contain" src={item.image} />
        <div className="basis-1/2 ">
          <h2 className="text-2xl font-semibold border-b border-gray-200 mt-12 mb-4 ">
            {item.title}
          </h2>
          <p className="text-4xl font-roboto">$ {item.price}</p>
          

          <Counter max={item.stock} counter={counter} setCounter={setCounter} />
          <div className="pt-4">
          <Boton onClick={() => {addToCart(counter)}}>
            Agregar al carrito
          </Boton>
          </div>
        <h3 className="text-xl font-roboto border-b border-gray-200 mt-8">
          Descripcion
        </h3>
        <p className="text-gray-600 mb-4">{item.description}</p>
      
        </div>
      </section>
      
    </>
  );
};

export default ItemDetail;
