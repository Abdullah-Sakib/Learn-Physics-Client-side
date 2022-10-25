import React from 'react';
import { useLoaderData } from 'react-router-dom';

const CheckOut = () => {
  const data = useLoaderData();
  return (
    <div>
      <h2 className='text-3xl my-5 font-semibold'>{data.courseName}</h2>
    </div>
  );
};

export default CheckOut;