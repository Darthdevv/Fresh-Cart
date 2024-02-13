/* eslint-disable react/prop-types */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

function ProductItem({ product }) {
  return (
    <>
      <div className="product w-[20%] max-lg:w-[30%] max-md:w-[45%] max-sm:w-[100%] flex flex-col items-start justify-center m-4 p-3 rounded-lg cursor-pointer">
        <Link to={'/productDetails/' + product.id}>
          <img
            src={product.imageCover}
            className=" self-center"
            width={200}
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
        <button className="btn-accent rounded-md p-2 w-full font-bold flex-shrink-0 text-[#fff] bg-main">
          Add to Cart
        </button>
      </div>
    </>
  );
}

export default ProductItem;
