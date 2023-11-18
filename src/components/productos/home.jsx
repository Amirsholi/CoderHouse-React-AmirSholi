
import { Link } from "react-router-dom";
import Boton from "../ui/boton";




const Home = () =>{

return(
    <div className=" contenedor font-quicksand mt-10 ">
        <h1>Nuestros Productos</h1>     
        <Link to={"/category/todos"}><Boton>Shop</Boton></Link>
    </div>

)
}
export default Home;