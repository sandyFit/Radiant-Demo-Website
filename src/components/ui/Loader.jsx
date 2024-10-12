import React from 'react';
import { useSelector } from 'react-redux';
import '../../assets/loader.css';

const Loader = () => {
  const loading = useSelector((state) => state.alerts.loading);

  return (
    loading && (      
      <div class="loader"></div>
    )
  );
};

export default Loader;
