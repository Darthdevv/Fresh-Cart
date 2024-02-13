import { useParams } from "react-router"
import { useQuery } from "react-query";
import axios from "axios";
import { baseUrl } from "../../api/api";
import Loader from "../../components/Loader/Loader";


function ProductDetails() {

  const productDetail = useParams();
  console.log(productDetail.id);

  function getProductDetails() {
    return axios.get(baseUrl + '/api/v1/products/' + productDetail.id)
  }

  let { data, isLoading } = useQuery('getProductDetails', getProductDetails);
  console.log(data?.data.data)


  if (isLoading) return <Loader />;
  return (
    <>
      <div className=" min-h-screen bg-white">
        <div className=" text-center">
          <div className="w-full flex items-center justify-center p-5">
            <div className="w-[20%]">
              <img
                src={data.data.data.imageCover}
                className="w-[300px]"
                alt="imageCover"
              />
            </div>
            <div className="w-[50%]">
              <h4>{data.data.data.title}</h4>
              <p>{data.data.data.description}</p>
              <button className="btn-accent w-full rounded-md p-2"> Add to Cart</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductDetails