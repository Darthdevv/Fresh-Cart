

function Login() {
  return (
    <>
      <div className=" min-h-screen flex items-center justify-center bg-[#fff]">
        <div className="hero-content flex-col w-full">
          <div className="card shrink-0 w-full max-w-[800px]">
            <form className="card-body w-full">
            <h1 className="title text-2xl">Login Now :</h1>
              <div className="form-control">
                <label className="label">
                  <span className="title">email :</span>
                </label>
                <input type="email" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="title">password :</span>
                </label>
                <input
                  type="password"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <a href="#" className="title link link-hover">
                    forgot password?
                  </a>
                </label>
              </div>
              <div className="self-end mt-4">
                <button className="btn btn-accent">login</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login