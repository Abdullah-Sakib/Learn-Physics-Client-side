import React, { useContext } from 'react';
import { FaGithub, FaGoogle } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';

const Register = () => {
  const { googleLogIn, gitHubLogIn } = useContext(AuthContext);
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
            <form className="card-body w-full lg:w-96">
              <h1 className="text-xl font-bold">Register now!</h1>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="text"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="text"
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Register</button>
              </div>
              <label className="text-center ">
                <Link
                  to="/register"
                  className="label-text-alt link link-hover text-center"
                >
                  Already have an account?
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
              <p className="flex-grow font-semibold">Continue with Facebook</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;