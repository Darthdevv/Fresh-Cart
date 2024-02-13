import { useParams } from "react-router"
import { useQuery } from "react-query";
import axios from "axios";
import { baseUrl } from "../../api/api";
import Loader from "../../components/Loader/Loader";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";


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
        <div>
          <div className="w-full flex items-start justify-center flex-wrap p-5">
            <div className="w-[30%] max-sm:w-[100%] max-sm:items-center">
              <img
                src={data.data.data.imageCover}
                className="w-[300px] max-sm:w-[100%]"
                alt="imageCover"
              />
            </div>
            <div className="w-[60%] max-sm:w-[100%] mt-32 max-sm:mt-0">
              <h4 className="title mb-2 text-lg">{data.data.data.title}</h4>
              <p className="sub-title mb-2 text-sm">{data.data.data.description.split(' ').slice(0,25).join(' ')}</p>
              <h4 className="title mb-2">{data.data.data.category.name}</h4>
              <div className="flex items-start justify-start w-full mb-2">
                  <div className="title text-md text-nowrap">{data.data.data.price} EGP</div>
                  <div className="title text-md text-nowrap ml-auto">
                    <FontAwesomeIcon icon={faStar} className="rating-color" />
                    {data.data.data.ratingsAverage}
                  </div>
                </div>
              <button className="btn-accent w-full rounded-md p-2"> Add to Cart</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductDetails