import MainCarousel from "../../components/MainCarousel";


function Home() {
  return (
    <>
      <div className=" min-h-screen bg-[#fff]">
        <div className=" text-center">
          <div className="max-w-full">
            <MainCarousel/>       
          </div>
        </div>
      </div>
    </>
  );
}

export default Home