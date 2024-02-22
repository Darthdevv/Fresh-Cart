import { useState } from "react";
import { useFormik } from "formik";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router";

function Address() {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const {
    handleBlur,
    handleChange,
    handleSubmit,
    touched,
    values,
    errors,
    dirty,
    isValid,
  } = useFormik({
    initialValues: {
      details: "",
      phone: "",
      city: "",
    },
    onSubmit: (values, actions) => {
      console.log(values);
      console.log(actions);
      sendDataToApi(values);
      actions.resetForm();
    },
  });

  async function sendDataToApi(values) {
    setLoading(true);
    try {
      let { data } = await axios.post(
        "https://ecommerce.routemisr.com/api/v1/auth/signin",
        values
      );
      console.log(data);
      if (data.message == "success") {
        localStorage.setItem('token', data.token)
        navigate("/");
      }
    } catch (error) {
      setLoading(false);
    }
  }

  return (
    <>
      <div className=" min-h-screen flex items-center justify-center bg-[#fff]">
        <div className="hero-content flex-col w-full">
          <div className="card shrink-0 w-full max-w-[800px]">
            <form onSubmit={handleSubmit} className="card-body w-full">
              <h1 className="title text-2xl">Address :</h1>

              <div className="form-control">
                <label htmlFor="details" className="label">
                  <span className="title">details :</span>
                </label>
                <input
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.details}
                  type="text"
                  id="details"
                  name="details"
                  className={errors.details && touched.details ? "input-error" : ""}
                />
              </div>

              <div className="form-control">
                <label htmlFor="phone" className="label">
                  <span className="title">phone :</span>
                </label>
                <input
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.phone}
                  type="text"
                  id="phone"
                  name="phone"
                  className={errors.phone && touched.phone ? "input-error" : ""}
                />
              </div>

              <div className="form-control">
                <label htmlFor="city" className="label">
                  <span className="title">city :</span>
                </label>
                <input
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.city}
                  type="text"
                  id="city"
                  name="city"
                  className={
                    errors.city && touched.city ? "input-error" : ""
                  }
                />
              </div>

              <div className="self-end mt-4">
                <button
                  disabled={!(isValid && dirty)}
                  type="submit"
                  className="btn btn-accent"
                >
                  {loading ? (
                    <FontAwesomeIcon icon={faSpinner} spinPulse />
                  ) : (
                    "confirm"
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Address;
