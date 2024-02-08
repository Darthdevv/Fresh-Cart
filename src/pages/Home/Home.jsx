import Carousel from "../../components/Carousel";


function Home() {
  return (
    <>
      <div className=" min-h-screen bg-[#fff]">
        <div className=" text-center">
          <div className="max-w-full">
            <Carousel/>       
          </div>
        </div>
      </div>
    </>
  );
}

export default Home