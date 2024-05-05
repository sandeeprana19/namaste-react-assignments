import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div className="pt-[8.625rem] mb-7">
      <div className="w-[56.25rem] mx-auto">
        <div className="flex items-center justify-between gap-x-2">
          <h1 className="font-bold text-xl">Cart</h1>
          {cartItems.length !== 0 && (
            <button
              className="h-11 bg-orange-600 hover:bg-orange-800 transition-all text-white rounded-md border-none p-[0.625rem] text-sm font-semibold outline-none"
              onClick={handleClearCart}
            >
              Clear Cart
            </button>
          )}
        </div>
        {cartItems.length === 0 && (
          <p className="text-base mt-2">
            Your cart is empty. You can go to the home page to view more
            restaurant and add food to your cart.
          </p>
        )}
        {cartItems.length !== 0 && (
          <div className="h-[calc(100vh-14rem)] overflow-y-auto mt-4">
            <ItemList items={cartItems} />
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
