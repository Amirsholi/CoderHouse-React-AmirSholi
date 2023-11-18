import { useContext, useState } from "react";
import Counter from "../ui/itemCount";
import { ShopContext } from "../context/shopContext";

const ItemDetail = () => {
  const [counter, setCounter] = useState(1);

  const { item, addToCart } = useContext(ShopContext);

  return (
    <>
      <section className=" flex gap-6 mt-10">
      <img className="h-[520px] w-[380px] mb-4 object-contain" src={item.image} />
        <div className="basis-1/2">
          <h2 className="text-2xl font-semibold border-b border-gray-200 pb-4 mb-4">
            {item.title}
          </h2>
          <p className="text-4xl">$ {item.price}</p>
          <Counter max={item.stock} counter={counter} setCounter={setCounter} />
          <p className="text-2xl">stock {item.stock}</p>
          <button className="w-full hover:bg-blue-600" onClick={addToCart}>
            Agregar al carrito
          </button>
        </div>
      </section>
      <section className="mt-12">
        <h3 className="text-xl font-semibold border-b border-gray-200 pb-4 my-4">
          Descripcion
        </h3>
        <p className="text-gray-600">{item.description}</p>
      </section>
    </>
  );
};

export default ItemDetail;
