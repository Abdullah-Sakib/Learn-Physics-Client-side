import React from 'react';
import { useLoaderData } from 'react-router-dom';

const CourseDetails = () => {
  const courseData = useLoaderData();
  console.log(courseData);
  return (
    <div>
      <h2>Details</h2>
    </div>
  );
};

export default CourseDetails;