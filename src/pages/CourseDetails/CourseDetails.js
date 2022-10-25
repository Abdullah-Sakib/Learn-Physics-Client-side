import React from "react";
import { FaStar } from "react-icons/fa";
import { Link, useLoaderData } from "react-router-dom";

const CourseDetails = () => {
  const courseData = useLoaderData();
  console.log(courseData);
  const {
    id,
    courseImg,
    courseName,
    description,
    instructorImg,
    instructor,
    offeredBy,
    rattings,
    level,
    length,
  } = courseData;
  return (
    <div>
      <div className="relative flex flex-col py-16 lg:pt-0 lg:flex-col lg:pb-0 ">
        <div className="flex flex-col items-start w-full max-w-xl px-4 mx-auto lg:px-8 lg:max-w-screen-xl">
          <div className="mb-16 lg:my-40 lg:max-w-lg lg:pr-5">
            <div className="max-w-xl mb-6">
              <div>
                <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
                  Learn Physics
                </p>
              </div>
              <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none md:leading-tight">
                {courseName}
              </h2>
              <p className="text-base text-gray-700 md:text-lg">
                {description.slice(0, 160) + "..."}
              </p>
            </div>

            <div className="flex items-center justify-center">
              <img
                className="rounded-full w-10 mr-3"
                src={instructorImg}
                alt=""
              />
              <div>
                <p className="text-lg text-start font-semibold">
                  {instructor}
                </p>
              </div>
            </div>

          </div>
        </div>
        <div className="inset-y-0 right-0 w-full max-w-xl px-4 mx-auto lg:pl-8 lg:pr-0 lg:mb-0 lg:mx-0 lg:w-1/2 lg:max-w-full lg:absolute xl:px-0">
          <img
            className=" w-2/3 h-56 rounded shadow-lg lg:rounded-3xl lg:shadow-none sm:h-96 lg:h-2/3 mx-auto  md:mt-24"
            src={courseImg}
            alt=""
          />
        </div>
      </div>

      <div className=" md:flex  mb-20">
        <div className="px-5 mt-5">
          <div className="container mx-auto ">
            <h2 className="text-3xl text-start my-5 font-semibold">
              Instructor
            </h2>
            <div className="flex items-center">
              <img
                className="rounded-full w-20 mr-3"
                src={instructorImg}
                alt=""
              />
              <div>
                <p className="text-2xl text-start font-semibold">
                  {instructor}
                </p>
                <p className="text-lg text-start font-semibold text-gray-600">
                  {offeredBy}
                </p>
              </div>
            </div>
          </div>

          <div className="container mt-10 mx-auto text-start">
            <h2 className="text-3xl text-start mt-5 mb-2 font-semibold">
              Course information
            </h2>
            <p className="text-xl">Level : {level}</p>
            <p className="text-xl">Course length : {length}</p>
            <p className="flex items-center text-xl">
              Rattings : <FaStar className="text-orange-500 mx-2"></FaStar> ({" "}
              <span>{rattings}</span> )
            </p>
          </div>
        </div>

        <div className="w-full px-5 md:px-0 md:w-2/3 mx-auto mb-20 ">
          <h2 className="text-4xl my-5 font-semibold">Course Description</h2>
          <p className="text-lg text-start text-gray-600 font-semibold">
            {description}
          </p>
        </div>
      </div>

      <div className="flex flex-col mb-20 items-center ">
        <Link
          to={`/checkout/${id}`}
          className="inline-flex items-center justify-center w-full h-12 px-6 mb-3 font-medium tracking-wide text-white transition duration-200 rounded shadow-md md:w-auto md:mr-4 md:mb-0 bg-blue-500 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
        >
          Get Primium Access
        </Link>
      </div>
    </div>
  );
};

export default CourseDetails;
