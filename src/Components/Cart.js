import { useSelector } from "react-redux";

const Cart = () => {
  const CartItems = useSelector((store) => store.cart.items);
  return (
    <div className="mt-72">
      <h1>Cart</h1>
      {CartItems.map((item) => (
        <li>{item.name}</li>
      ))}
    </div>
  );
};

export default Cart;
