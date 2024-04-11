import { useLocation } from "react-router-dom";
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom'

export default function CartPage () {
  const location = useLocation()
  const cartItems = location.state?.cartItems || null

  useEffect(() => {
    console.log("location.state:", location.state);
    console.log("cartItems:", cartItems);
  }, []);

  const navigate = useNavigate()
  const goHome = () => {
    navigate('/');
  }

  return (
    <div>
      <h1>Your shopping cart:</h1>
      {cartItems && cartItems.length === 0 ? (
        <p>Empty Cart</p>
      ) : (
        <div>
          {cartItems && cartItems.map((item) => (
            <div key={item.id}>
              <h3>{item.name}</h3>
              <img src={item.image} alt={item.title} width={150} />
              <p>Price: ${item.price} Quantity: {item.quantity}</p>
              <p>Subtotal: ${item.price * item.quantity}</p>
            </div>
          ))}
        </div>
      )}
      <button onClick={() => goHome()} style={{ backgroundColor: 'blue', color: 'white' }}>Go back to HomePage and RESET cart.</button>
    </div>
  );
};
