import axios from "axios";
import { baseUrl } from "../../api/api";
import { useQuery } from "react-query";
import Loader from "../../components/Loader/Loader";


function AllOrders() {
  function getProducts() {
    return axios.get(baseUrl + "/api/v1/orders/user/65cbf7408462ab02c7212c34");
  }

  let {data, isLoading } = useQuery('getProducts', getProducts);
  console.log(data)

  if (isLoading) return <Loader/>;

  return (
    <>
      <div className=" min-h-screen bg-[#fff]">
        <div>
          <div className="max-w-full flex items-center justify-center flex-wrap py-5">
            <h1>Orders:</h1>
          </div>
        </div>
      </div>
    </>
  );
}

export default AllOrders