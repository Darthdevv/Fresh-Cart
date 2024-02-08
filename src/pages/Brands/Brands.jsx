import axios from "axios";
import { useEffect, useState } from "react";

function Brands() {
  const [brands, setBrands] = useState([]);

  useEffect(() => {
    async function getBrands() {
      let { data } = await axios.get(
        "https://ecommerce.routemisr.com/api/v1/brands"
      );
      setBrands(data.data);
      console.log(data.data);
    }

    getBrands();
  }, []);

  return (
    <>
      <div className=" min-h-screen bg-[#fff]">
        <div className=" text-center">
          <div className="max-w-full flex items-center justify-center flex-wrap py-5">
            {brands.map((brand) => (
              <div className="w-[29%] max-md:w-[50%] max-sm:w-[100%] grid place-items-center" key={brand.id}>
                <img src={brand.image} alt="brands" />
                <span>{brand.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Brands;
