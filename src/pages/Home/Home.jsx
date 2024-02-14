import MainCarousel from "../../components/Carousels/MainCarousel";
import SecondaryCarousel from "../../components/Carousels/SecondaryCarousel";

function Home() {
  return (
    <>
      <div className=" min-h-screen bg-[#fff]">
        <div className=" text-center">
          <div className="max-w-full py-5">
            <MainCarousel />
            <SecondaryCarousel/>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home