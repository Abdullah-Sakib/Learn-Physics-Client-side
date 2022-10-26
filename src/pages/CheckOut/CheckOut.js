import React from "react";
import { useLoaderData } from "react-router-dom";
import { MdOutlinePayment } from "react-icons/md";
import { FaStar } from "react-icons/fa";

const CheckOut = () => {
  const data = useLoaderData();
  const { courseImg, courseName, rattings, level, length } = data;
  return (
    <div className="container mx-auto">
      <div className=" md:flex pt-8">

        <div className="md:w-1/2  text-start px-5">
          <h2 className="text-2xl font-semibold mb-3">Complete Payment</h2>
          <p className="text-gray-500">
            <span className="font-semibold ">Step 1: Account Creation</span> |{" "}
            <span className="font-semibold text-black">
              Step 2: Payment Details
            </span>
          </p>
          <h1 className="text-2xl font-bold mt-7 mb-2">Secure Checkout</h1>
          <p className="font-semibold text-gray-500">
            {" "}
            <MdOutlinePayment className="inline"></MdOutlinePayment> Payment
            Method
          </p>
          <div className="mt-4">
            <div className="form-control ">
              <label className="label">
                <span className="label-text font-semibold">
                  Credit or Debit Card
                </span>
              </label>
              <input
                type="text"
                placeholder="card number"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text font-semibold">Name on Card</span>
              </label>
              <input
                type="text"
                placeholder="name"
                className="input input-bordered"
              />
            </div>
            <button className="btn btn-primary w-full my-8">
              Complete Purchase
            </button>
            <div className="bg-gray-300 px-3 py-2 rounded-lg mb-10">
              <p className="text-center text-sm text-gray-700">
                Your card will be charged when you select "Complete Purchase".
                You will gain access to this product immediately after your
                purchase complete.
              </p>
            </div>
          </div>
        </div>

        <div className="md:w-1/2 ">
          <div>
            <div className="">
              <div className="card  w-2/3 mx-auto rounded-lg card-compact  bg-base-100 shadow-lg ">
                <figure className="h-52 w-full">
                  <img className="w-full" src={courseImg} alt="" />
                </figure>
                <div className="card-body  bg-white text-start">
                  <div className="">
                    <h2 className="card-title mt-1">{courseName}</h2>
                  </div>
                  <div className="mt-4">
                    <span>
                      <FaStar className="text-orange-400 mr-1 inline"></FaStar>{" "}
                      {rattings}
                    </span>
                    <span className="mx-3">•</span>
                    <span className="">{level}</span>
                    <span className="mx-3">•</span>
                    <span>{length}</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="md:flex items-end gap-5 mt-6 mb-10">
              <div className="form-control flex-grow px-4">
                <label className="label">
                  <span className="label-text font-semibold">
                    Enrollment Code (Optional)
                  </span>
                </label>
                <input
                  type="text"
                  placeholder="card number"
                  className="input input-bordered "
                />
              </div>
              <button className="btn btn-primary mt-2 w-1/5 ">Apply</button>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default CheckOut;
