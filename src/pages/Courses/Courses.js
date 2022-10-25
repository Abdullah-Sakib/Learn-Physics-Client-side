import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CoursesCart from './CoursesCart';
import { FaAngleDoubleRight } from "react-icons/fa";

const Courses = () => {
  const data = useLoaderData();
  return (
    <div className='grid grid-cols-12 '>
      <div className='col-span-3 px-5 mt-5 text-start'>
        {
          data.map(option => <p key={option.id} className='mb-4 font-semibold text-lg text-gray-700'> <FaAngleDoubleRight className='mr-2 inline text-orange-400 text-xl'></FaAngleDoubleRight> {option.name}</p>)
        }
      </div>
      <div className='col-span-9 px-5 grid grid-cols-3 gap-5 my-5 '>
        {
          data.map(option => <CoursesCart key={option.id} data={option}></CoursesCart>)
        }
      </div>
    </div>
  );
};

export default Courses;