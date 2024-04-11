import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'

export default function Home() {
  const [items, setItems] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [quantity, setQuantity] = useState(1);

  const addToCart = (item) => {
    const itemWithQuantity = { ...item, quantity };
    setCartItems([...cartItems, itemWithQuantity]);
    setQuantity(1);
    alert('Add to cart successful!');
  };

  useEffect(() => {
    console.log("cartItems=");
    console.log(cartItems);
  }, [cartItems]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products/category/electronics')
      .then((res) => res.json())
      .then((json) => {
        setItems(json);
        console.log(json);
      });
  }, []);

  const incrementQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const navigate = useNavigate()
  const goCart = () => {
    navigate('/cart', { state: { cartItems } })
  }

  return (
    <>
      <div>
      <h1>Vite + React  Levi Liao</h1>
      <button onClick={() => goCart()} style={{ backgroundColor: 'blue', color: 'white' }}>Go to CartPage</button>
      <div className="card">

        {items.map((item) => (
          <div key={item.id}>
            <h3>{item.title}</h3>
            <img src={item.image} alt={item.title} width={150} />
            <p>${item.price}</p>
            <button onClick={decrementQuantity}>-1</button>
            <input
              type="number"
              value={quantity}
              onChange={(e) => setQuantity(parseInt(e.target.value))}
              min="1"
            />
            <button onClick={incrementQuantity}>+1</button>
            <button onClick={() => addToCart(item)}>Add to Cart</button>
            <hr></hr>
          </div>
        ))}
        <br/>
        <button onClick={() => goCart()} style={{ backgroundColor: 'blue', color: 'white' }}>Go to CartPage</button>
      </div>
    </div>
    </>
  )
}


