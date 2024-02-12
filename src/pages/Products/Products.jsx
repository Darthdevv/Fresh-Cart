import axios from "axios"
import { useEffect, useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import Loader from "../../components/Loader/Loader";



function Products() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {

    async function getProducts() {
      let { data } = await axios.get(
        "https://ecommerce.routemisr.com/api/v1/products"
      );
      setLoading(false);
      setProducts(data.data);
      console.log(data.data);
    }

      getProducts();
  }, [])

  if (loading) return <Loader/>;
  
  return (
    <>
      <div className=" min-h-screen bg-[#fff]">
        <div>
          <div className="max-w-full flex items-center justify-center flex-wrap py-5">
            {products.map((product) => (
              <div
                className="product w-[20%] max-lg:w-[30%] max-md:w-[45%] max-sm:w-[100%] flex flex-col items-start justify-center m-4 p-3 rounded-lg cursor-pointer"
                key={product.id}
              >
                <img src={product.imageCover} className=" self-center" width={200} alt="brands" />
                <span className="text-main self-start mt-3">{product.category.name}</span>
                <h5 className="title self-start text-lg font-semibold">
                  {product.title.split(" ").slice(0, 2).join(" ")}
                </h5>
                <div className="flex items-start justify-start w-full mb-2">
                  <div className="title text-md text-nowrap">{product.price} EGP</div>
                  <div className="title text-md text-nowrap ml-auto">
                    <FontAwesomeIcon icon={faStar} className="rating-color"/>
                    {product.ratingsAverage}
                  </div>
                </div>
              <button className="btn-accent rounded-md p-2 w-full font-bold flex-shrink-0 text-[#fff] bg-main">Add to Cart</button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Products