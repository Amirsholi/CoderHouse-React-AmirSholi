
import Carrucel from "../ui/slider";





const Home = () =>{

    const imagenes = ["/Farmacia.jpg", "/Farmacia2.jpg","/Farmacia3.jpg"]
return(
    <div className="font-quicksand ">
        <Carrucel list={imagenes}/>
        {/*<Link to={"/category/todos"}>
        <h1 className="font-quicksand text-4xl text-center mb-5">Ir a la tienda</h1>     
        <div className="w-full h-[600px] rounded-3xl overflow-hidden bg-white">
        <img className="w-full h-full object-contain" src={addToCart} />
        </div>
        </Link>*/}

    </div>

)
}
export default Home;