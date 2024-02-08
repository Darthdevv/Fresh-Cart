import axios from "axios"
import { useEffect, useState } from "react"



function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function getProducts() {
      let { data } = await axios.get(
        "https://ecommerce.routemisr.com/api/v1/products"
      );
      setProducts(data.data);
      console.log(data.data);
    }

      getProducts();
  },[])
  return (
    <>
      <div className=" min-h-screen bg-[#fff]">
        <div className=" text-center">
          <div className="max-w-full flex items-center justify-center flex-wrap py-5">
            {products.map((product) => (
              <div
                className="w-[29%] max-md:w-[50%] max-sm:w-[100%] grid place-items-center"
                key={product.id}
              >
                <img src={product.imageCover} alt="brands" />
                <p>{ product.description}</p>
                <span className="title">{product.title}</span>
                <span className="text-[#0aad0a]">Price: ${  product.price}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Products