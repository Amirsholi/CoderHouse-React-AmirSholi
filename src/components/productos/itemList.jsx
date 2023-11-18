import Item from "./item";




const ItemList = ({items, cart}) => {

    return(
        <>
        <section className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-10 mt-3">

            {items && (items.map(i => <Item key={i.id} item={i} cart={cart}/>))}

        </section>

        </>
    )
}


export default ItemList;