import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';


const Home = () => {
  const {user} = useContext(AuthContext);
  return (
    <div>
      <h2>Home </h2>
      <img src={user?.photoURL} alt="" />
    </div>
  );
};

export default Home;