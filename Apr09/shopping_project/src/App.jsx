// import { useEffect, useState } from 'react';
// import { BrowserRouter as Link } from 'react-router-dom';
import { Route, Routes } from 'react-router-dom'
import './App.css';
import Home from './Home'
import CartPage from './CartPage';

function App() {
  // const [items, setItems] = useState([]);

  // useEffect(() => {
  //   fetch('https://fakestoreapi.com/products/category/electronics')
  //     .then((res) => res.json())
  //     .then((json) => {
  //       setItems(json);
  //       console.log(json);
  //     });
  // }, []);

  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/cart" element={<CartPage/>}/>
      </Routes>
    </>
  );
}

export default App;