import { useContext, useEffect, useState } from "react";
import { StoreContext } from "../../context/storeContext";
import Loader from "../../components/Loader/Loader";
import CartItem from "./cartItem";

function Cart() {

  const [cartData, setCartData] = useState([]);
  const { getCart } = useContext(StoreContext);
  const [loading, setLoading] = useState(true);



  useEffect(() => {
    (async () => {
      const data = await getCart();
      setCartData(data)
      console.log(data)
      setLoading(false)
      if(data.numOfCartItems === 0) console.log("cart is empty");
    })()
  }, [getCart]);


  if(loading) return <Loader/>

  return (
    <>
      <div className=" min-h-screen bg-white">
        <div className="hero-content">
          <div className="max-w-full container bg-[#f0f3f2] py-5 px-3">
            <h1 className="text-3xl font-bold title">Shop Cart :</h1>
            <h4 className="py-2 text-[#0aad0a]">
              Total Cart Price: {cartData?.data?.totalCartPrice} EGP
            </h4>
            {cartData?.data?.products?.map((cartItem) => (
              <CartItem key={cartItem._id} cartItem={cartItem} setCartData={setCartData } />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Cart;
