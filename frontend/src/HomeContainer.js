import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Home from './Home';
import { getAllColors } from "./store/actions/colorsAction";


const HomeContainer = () => {

  const colors = useSelector((state) => Object.values(state.colors));
  const dispatch = useDispatch();

  return (
  <Home colors={colors} 
  getAllColors={() => dispatch(getAllColors())} 
  />
  );
};

export default HomeContainer;