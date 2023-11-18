import Boton from "./boton";




const Counter = ({counter, setCounter, max}) => {

    const increase = () => counter < max && setCounter(counter + 1);
    const decrease = () => counter > 1 && setCounter(counter - 1);

    return (
        <div className="flex flex-col gap-5 mt-6">
            <div className="flex items-center gap-3">
                <Boton onClick={decrease} className="active:bg-blue-600">-</Boton>
                <p>{counter}</p>
                <Boton onClick={increase} className="active:bg-blue-600">+</Boton>
            </div>
        </div>
    )
}

export default Counter;