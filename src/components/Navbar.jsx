import { Link,NavLink } from 'react-router-dom'
import Logo from '../assets/images/freshcart-logo.svg'

function Navbar() {
  return (
    <>
      <div className="navbar w-full container mx-auto lg:px-5 flex items-center justify-between bg-[#f0f3f2]">
        <div>
          <div className="">
            <Link to={"/home"} className="btn btn-ghost text-xl">
              <img src={Logo} alt="FreshCart" />
            </Link>
          </div>
          <div className="">
            <ul className="menu menu-horizontal px-1 text-base">
              <li>
                <NavLink to={"/products"}>Products</NavLink>
              </li>
              <li>
                <NavLink to={"/categories"}>Categories</NavLink>
              </li>
              <li>
                <NavLink to={"/brands"}>Brands</NavLink>
              </li>
              <li>
                <NavLink to={"/wishlist"}>WishList</NavLink>
              </li>
              <li>
                <NavLink to={"/cart"}>Cart</NavLink>
              </li>
            </ul>
          </div>
        </div>
        <div className="">
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle"
            >
              <div className="indicator">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
                <span className="badge bg-[#0aad0a] text-[#f0f3f2] border-0 badge-sm indicator-item">
                  8
                </span>
              </div>
            </div>
            <div
              tabIndex={0}
              className="mt-3 z-[1] card card-compact dropdown-content w-52 bg-base-100 shadow"
            >
              <div className="card-body">
                <span className="font-bold text-lg">8 Items</span>
                <span className="text-info">Subtotal: $999</span>
                <div className="card-actions">
                  <button className="btn btn-primary btn-block">
                    View cart
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="flex-none">
            <ul className="menu menu-horizontal px-1">
              <li>
                <a>Link</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar