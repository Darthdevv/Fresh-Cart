/* eslint-disable react/prop-types */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { StoreContext } from "../../context/storeContext";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { toast } from "react-toastify";


function ProductItem({ product }) {
  const { setCounter, addToCart, setTotal } = useContext(StoreContext)
  const [loading, setLoading] = useState(false);
  
  async function addProductToCart(productId) {
    setLoading(true);
    const data = await addToCart(productId);
    console.log(data);
    if (data.status == 'success') {
      toast.success('Product added successfully');
      setCounter(data.numOfCartItems);
      setTotal(data.data.totalCartPrice);
      setLoading(false);
    }
  }

  return (
    <>
      <div className="product w-[20%] max-lg:w-[30%] max-md:w-[45%] max-sm:w-[100%] flex flex-col items-start justify-center m-4 p-3 rounded-lg cursor-pointer">
        <Link to={"/productDetails/" + product._id}>
          <img
            src={product.imageCover}
            className="w-[100%] self-center max-sm:w-[100%] max-md:w-[100%] max-lg:w-[100%]"
            alt="brands"
          />
          <span className="text-main self-start mt-3">
            {product.category.name}
          </span>
          <h5 className="title self-start text-lg font-semibold">
            {product.title.split(" ").slice(0, 2).join(" ")}
          </h5>
          <div className="flex items-start justify-start w-full mb-2">
            <div className="title text-md text-nowrap">{product.price} EGP</div>
            <div className="title text-md text-nowrap ml-auto">
              <FontAwesomeIcon icon={faStar} className="rating-color" />
              {product.ratingsAverage}
            </div>
          </div>
        </Link>
        <button
          onClick={() => addProductToCart(product._id)}
          disabled={loading}
          className="btn-accent rounded-md p-2 w-full font-bold flex-shrink-0 text-[#fff] bg-main"
        >
          {loading ? <FontAwesomeIcon icon={faSpinner} spinPulse /> : "Add to Cart"}
        </button>
      </div>
    </>
  );
}

export default ProductItem;
