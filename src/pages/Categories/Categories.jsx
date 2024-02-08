import axios from "axios"
import { useState,useEffect } from "react"

function Categories() {

  const [categories, setCategories] = useState([]);
  
  useEffect(() => {
    async function getCategories() {
      let { data } = await axios.get(
        "https://ecommerce.routemisr.com/api/v1/categories"
      );
      setCategories(data.data);
      console.log(data.data);
    }
    getCategories();
  },[])
  return (
    <>
      <div className=" min-h-screen bg-[#fff]">
        <div className=" text-center">
          <div className="max-w-full flex items-center justify-center flex-wrap py-5">
            {categories.map((category) => (
              <div
                className="w-[29%] max-md:w-[50%] max-sm:w-[100%] grid place-items-center"
                key={category.id}
              >
                <img src={category.image} alt="brands" />
                <span>{category.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Categories