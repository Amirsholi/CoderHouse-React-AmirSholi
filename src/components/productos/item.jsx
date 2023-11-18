import { useContext } from "react";
import { Link } from "react-router-dom";
import { ShopContext } from "../context/shopContext";
import Boton from "../ui/boton";

const Item = ({ item, cart }) => {
  const ItemView = () => {
    if (cart) {
      return (
        <>
          <div className="py-4 border w-full h-[325px] border-gray-200 flex flex-col items-center justify-center shadow-sm rounded hover:shadow-lg hover:scale-110 ease-in duration-300">
            <img className="h-[60%] mb-4" src={item.image} />
            <h4 className="text-sm text-center px-1 mb-1">{item.title}</h4>
            <p className="text-lg font-semibold">$ {item.price}</p>
            <Boton className="bg-red-400" onClick={localStorage.removeItem}>Eliminaré</Boton>
          </div>
        </>
      );
    } else {
      return (
        <>
          <div className="py-4 border w-full h-[285px] border-gray-200 flex flex-col items-center justify-center shadow-sm rounded hover:shadow-lg hover:scale-110 ease-in duration-300">
            <img className="h-[70%] mb-4" src={item.image} />
            <h4 className="text-sm text-center px-1 mb-1">{item.title}</h4>
            <p className="text-lg font-semibold">$ {item.price}</p>
          </div>
        </>
      );
    }
  };

  const { setItem } = useContext(ShopContext);

  const handleClick = () => {
    setItem(item);
  };

  return (
    <>
      <article className="">
        <Link
          to={`/Item/${item.id}`}
          className="flex flex-col"
          onClick={handleClick}
        >
          {ItemView()}
        </Link>
      </article>
    </>
  );
};

export default Item;
//p-2 border w-full h-[200px] shadow-sm rounded hover:shadow-lg hover:scale-110 ease-in duration-300
