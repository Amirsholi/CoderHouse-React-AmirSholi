import Item from "./item";




const ItemList = ({items, cartFlag}) => {

    return(
        <>
        <section className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-10 mt-3">

            {items && (items.map(i => <Item key={i.id} item={i} cartFlag={cartFlag}/>))}

        </section>

        </>
    )
}


export default ItemList;