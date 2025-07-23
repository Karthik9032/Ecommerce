import './App.css'
import Home from './Pages/Home/Home';
import NavBar from './Components/Navbar/Navbar';
import Product from './Pages/Product/Product';
import CartPage from './Pages/CartPage/Cart';
import { Route,Routes } from 'react-router-dom';
 function App() {
  return (
    <div style={{overflow:'hidden'}}>
      <NavBar />
       <Routes>
  <Route path='/' element={<Home />} />
  <Route path='/Product/:id' element={<Product/>} />
  <Route path='/MyCart' element={<CartPage/>}/>
</Routes>

      {/*<Product/>
      <Home />*/}
    </div>
)
}

export default App
