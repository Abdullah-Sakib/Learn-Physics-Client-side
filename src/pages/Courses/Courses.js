import React from "react";
import { Link, useLoaderData, useNavigation } from "react-router-dom";
import CoursesCart from "./CoursesCart";
import { FaAngleDoubleRight } from "react-icons/fa";

const Courses = () => {
  const data = useLoaderData();
  const navigation = useNavigation();
  if (navigation.state === "loading") {
    return (
      <div className="min-h-[80vh] flex justify-center items-center">
        <div
          className="spinner-border border-dashed animate-spin inline-block w-12 h-12 border-4 rounded-full border-primary"
          role="status"
        ></div>
      </div>
    );
  }
  return (
    <div className="grid grid-cols-12 ">
      <div className="col-span-12 md:col-span-3 px-4 mt-5 text-start">
        {data.map((option) => (
          <p
            key={option.id}
            className="mb-4 font-semibold text-lg text-gray-700"
          >
            <Link to={`/course/${option.id}`}>
              {" "}
              <FaAngleDoubleRight className="mr-2 inline text-orange-400 text-xl"></FaAngleDoubleRight>{" "}
              {option.name}
            </Link>
          </p>
        ))}
      </div>

      <div className="col-span-12 md:col-span-9 px-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-5 ">
        {data.map((option) => (
          <CoursesCart key={option.id} data={option}></CoursesCart>
        ))}
      </div>
    </div>
  );
};

export default Courses;
