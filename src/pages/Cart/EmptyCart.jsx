import CartEmpty from "../../assets/images/emptycart.png";

function EmptyCart() {
  return (
    <div className=" min-h-screen  bg-white">
      <div className="hero-content text-center">
        <div className="max-w-full">
          <img className="relative w-full" src={CartEmpty} alt="empty cart" />
          <h1 className="absolute top-[77%] left-[40%] text-3xl font-bold text-main">
            Your cart is Empty
          </h1>
          <button className="absolute top-[85%] left-[44%] btn btn-accent">
            Continue Shopping
          </button>
        </div>
      </div>
    </div>
  );
}

export default EmptyCart;
