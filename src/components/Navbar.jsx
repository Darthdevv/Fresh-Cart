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
                <NavLink to={"/home"}>Home</NavLink>
              </li>
            </ul>
          </div>
        </div>
        <div>
          <Link to={'/wishlist'} className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle"
            >
              <div className="indicator">
                <span>
                  <svg
                    width="18"
                    className="h-5 w-5"
                    height="18"
                    viewBox="0 0 48 48"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M15 8C8.92487 8 4 12.9249 4 19C4 30 17 40 24 42.3262C31 40 44 30 44 19C44 12.9249 39.0751 8 33 8C29.2797 8 25.9907 9.8469 24 12.6738C22.0093 9.8469 18.7203 8 15 8Z"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="4"
                      strokeLinecap="butt"
                      strokeLinejoin="bevel"
                    ></path>
                  </svg>
                </span>
              </div>
            </div>
          </Link>
          <Link to={'/cart'} className="dropdown dropdown-end">
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
              className="mt-3 z-[1] card card-compact dropdown-content w-52 bg-[#f0f3f2] shadow"
            >
              <div className="card-body">
                <span className="font-bold text-lg">8 Items</span>
                <span className="text-[#0aad0a] font-semibold">Subtotal: $999</span>
                <div className="card-actions">
                  <button className="btn btn-accent btn-block">
                    View cart
                  </button>
                </div>
              </div>
            </div>
          </Link>
          <div className="flex-none">
            <ul className="menu menu-horizontal px-1">
              <li>
                <Link>SignOut</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar