import Slider from "react-slick";
import axios from "axios";
import { useEffect, useState } from "react";

function SecondaryCarousel() {
  const [categories, setCategories] = useState([]);

  const settings = {
    // dots: false,
    // infinite: true,
    // speed: 500,
    // slidesToShow: 5,
    // slidesToScroll: 1,
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 7,
    speed: 500,
    rows: 2,
    slidesPerRow: 1,
  };

  useEffect(() => {
    async function getCategories() {
      let { data } = await axios.get(
        "https://ecommerce.routemisr.com/api/v1/categories"
      );
      setCategories(data.data);
      console.log(data.data);
    }

    getCategories();
  }, []);

  return (
    <>
      <div className="my-5 px-6">
        <h2 className="title text-start text-lg">Show popular categories</h2>
        <Slider {...settings}>
          {categories.map((category) => (
              <img
                key={category._id}
                className="w-full h-[150px] max-sm:h-[80px] flex-shrink-0"
                src={category.image}
              />
          ))}
        </Slider>
      </div>
      <div className="text-start">
        {categories
          .map((item) => (
            <span key={item._id} className="text-black mx-[24px]">
              {item.name}
            </span>
          ))
          .splice(0, 8)}
      </div>
    </>
  );
}

export default SecondaryCarousel;
