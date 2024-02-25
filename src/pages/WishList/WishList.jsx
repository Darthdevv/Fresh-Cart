import axios from "axios"
import { useQuery } from "react-query"
import Loader from "../../components/Loader/Loader"
import { baseUrl } from "../../api/api"

function WishList() {
  function getWishList() {
    return axios.get(baseUrl + "/api/v1/wishlist", {
      headers: {
        token: localStorage.getItem('token'),
    }});
  }

  const { data, isLoading } = useQuery('getWishList', getWishList);
  console.log(data)

  if (isLoading) return <Loader />;
  return (
    <div>WishList</div>
  )
}

export default WishList