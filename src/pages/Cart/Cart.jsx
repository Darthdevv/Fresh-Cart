import { useContext, useEffect, useState } from "react";
import { FaRegTrashCan } from "react-icons/fa6";
import { StoreContext } from "../../context/storeContext";
import Loader from "../../components/Loader/Loader";

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
              <div
                key={cartItem._id}
                className="w-full p-2 flex items-center justify-start gap-8 border-b border-[#dcdada]"
              >
                <img
                  className="w-[100px]"
                  src={cartItem?.product?.imageCover}
                  alt="cartItem"
                />
                <div>
                  <p className="title">{cartItem?.product?.title}</p>
                  <div className="text-[#0aad0a] my-2">
                    Price : {cartItem?.price} EGP
                  </div>
                  <button className="title flex items-center justify-between gap-2 rounded-md py-[2.5px] px-2 border border-[#0aad0a]">
                    <FaRegTrashCan className="text-[#0aad0a]" /> Remove{" "}
                  </button>
                </div>
                <div className="ml-auto flex items justify-center gap-2">
                  <button className="title rounded-md py-[2.5px] px-2 border border-[#0aad0a]">
                    +
                  </button>
                  <span className="title">{cartItem?.count }</span>
                  <button className="title rounded-md py-[2.5px] px-2 border border-[#0aad0a]">
                    -
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Cart;
