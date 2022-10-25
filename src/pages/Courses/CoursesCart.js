import React from "react";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";

const CoursesCart = ({ data }) => {
  const { id, img, name, providerImage, offeredBy, rattings, level, length } = data;
  return (
    <div>
      <Link to={`/course/${id}`}>
        <div className="card rounded-lg card-compact h-full bg-base-100 shadow-xl ">
          <figure className="h-52 w-full">
            <img className="w-full" src={img} alt="" />
          </figure>
          <div className="card-body bg-white text-start">
            <div className="h-32">
              <div className="flex items-center">
                <img className="mr-2" src={providerImage} alt="" />
                <span className="text-gray-600">{offeredBy}</span>
              </div>
              <h2 className="card-title mt-1">{name}</h2>
            </div>
            <div className="flex items-center">
              <FaStar className="text-orange-400 mr-1 "></FaStar>
              <span>{rattings}</span>
            </div>
            <div className="">
              <span className="">{level}</span>
              <span className="mx-3">•</span>
              <span>{length}</span>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default CoursesCart;
