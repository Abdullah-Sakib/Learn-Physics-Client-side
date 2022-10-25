import React from "react";
import { Link } from "react-router-dom";
import { FaGithub, FaGoogle } from "react-icons/fa";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider/AuthProvider";

const Login = () => {
  const { googleLogIn, gitHubLogIn, logInWithEmailPassword } = useContext(AuthContext);
  const handleSubmit  = event => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    logInWithEmailPassword(email, password)
    .then(result => {
      form.reset();
      console.log(result.user);
    })
    .catch(error => console.error(error));
  }
  const handleGoogleLogIn = () => {
    googleLogIn()
      .then((result) => {
        console.log(result.user);
      })
      .catch((error) => console.error(error));
  };
  const handleGigHubLogIn = () => {
    gitHubLogIn()
      .then((result) => {
        console.log(result.user);
      })
      .catch((error) => console.error(error));
  };
  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col ">
          <div className="card flex-shrink-0 rounded-lg w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleSubmit} className="card-body w-full lg:w-96">
              <h1 className="text-xl font-bold">Login now!</h1>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <Link to="/" className="label-text-alt link link-hover">
                    Forgot password?
                  </Link>
                </label>
              </div>
              <div className="form-control mt-6">
                <button type="submit" className="btn btn-primary">Login</button>
              </div>
              <label className="text-center ">
                <Link
                  to="/register"
                  className="label-text-alt link link-hover text-center"
                >
                  Don't have account?
                </Link>
              </label>
            </form>
          </div>

          <div className="w-full  mt-4">
            <button
              onClick={handleGoogleLogIn}
              className="flex items-center border bg-white shadow-lg rounded-lg w-full p-1 mb-2"
            >
              <FaGoogle className="text-2xl text-orange-500 m-1"></FaGoogle>
              <p className="flex-grow font-semibold">Continue with Google</p>
            </button>
            <button
              onClick={handleGigHubLogIn}
              className="flex items-center bg-white border shadow-lg   rounded-lg  w-full p-1"
            >
              <FaGithub className="text-2xl  m-1"></FaGithub>
              <p className="flex-grow font-semibold">Continue with Github</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
