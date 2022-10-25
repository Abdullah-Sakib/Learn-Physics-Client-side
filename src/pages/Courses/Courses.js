import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CoursesCart from './CoursesCart';

const Courses = () => {
  const data = useLoaderData();
  return (
    <div className='grid grid-cols-12 '>
      <div className='col-span-3  text-start'>
        {
          data.map(option => <p key={option.id} className='mb-3'>{option.name}</p>)
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