import React from 'react';

const Courses = () => {
  return (
    <div className='grid grid-cols-12'>
      <div className='col-span-3 border'>
        <h2>side nav</h2>
      </div>
      <div className='col-span-9 border'>
        <h2>courses</h2>
      </div>
    </div>
  );
};

export default Courses;