import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage: `url("https://images.unsplash.com/photo-1607988795691-3d0147b43231?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80")`,
        }}
      >
        <div className="hero-overlay bg-black bg-opacity-60"></div>
        <div className="text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold ">Learn Physics</h1>
            <p className="mb-5  text-stone-300">
              Learn Physics is a platform where you can learn physics. Here you
              will find the best physics courses teaches by the top instructors
              from the top universities.
            </p>
            <Link to="/courses">
              <button className="btn btn-primary">Get Started</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
