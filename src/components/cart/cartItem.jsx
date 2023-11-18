


const CartItem = () =>{

    return(
        <>
        <div className="mt-6 h-full rounded-lg  bg-white p-6 shadow-md md:mt-0 ">
            <div className="mb-2 flex justify-between">
                <p className="text-gray-700">Subtotal</p>
                <p className="text-gray-700">UYU $00.00</p>
            </div>
            <div className="flex justify-between">
                <p className="text-gray-700">Envío</p>
                <p className="text-gray-700">UYU$ 00.00</p>
            </div>
            <hr className="my-4" />
            <div className="flex justify-between">
                <p className="text-lg font-bold">Total</p>
                <div className="">
                    <p className="mb-1 text-lg font-bold">UYU$ 00.00</p>
                    <p className="text-sm text-gray-700">IVA Incluido</p>
                </div>
            </div>
            <button className="mt-6 w-full rounded-md bg-blue-500 py-1.5 font-medium text-blue-50 hover:bg-blue-600">Check out</button>
        </div>
        

        </>
    )
}
export default CartItem;