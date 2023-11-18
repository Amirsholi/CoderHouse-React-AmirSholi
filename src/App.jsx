
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './components/ui/header';
import Cart from './components/cart/cart';
import ItemListContainter from './components/productos/itemListContainer';
import ItemDetailContainer from './components/productos/itemDetailContainer';
import Home from './components/productos/home';
import ShopComponentContext from './components/context/shopContext';



function App() {


  return (
    <>
    <ShopComponentContext>
      <BrowserRouter>
        <Header/>

        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/cart" element={<Cart/>}/>
          <Route exact path="/category/:categoryName" element={<ItemListContainter/>}/>
          <Route exact path="/Item/:itemId" element={<ItemDetailContainer/>}/>
        </Routes>
      </BrowserRouter>  
    </ShopComponentContext>
    </>
  )
}

export default App;

