

function Register() {
  return (
    <>
      <div className=" min-h-screen flex items-center justify-center bg-[#fff]">
        <div className="hero-content flex-col w-full">
          <div className="card shrink-0 w-full max-w-[800px]">
            <form className="card-body w-full">
              <h1 className="title text-2xl">Register Now :</h1>
              <div className="form-control">
                <label className="label">
                  <span className="title">name :</span>
                </label>
                <input type="text" className="input input-bordered" required />
              </div>
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
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="title">rePassword :</span>
                </label>
                <input
                  type="password"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="title">phone :</span>
                </label>
                <input type="tel" className="input input-bordered" required />
              </div>
              <div className="self-end mt-4">
                <button className="btn btn-accent">register</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Register