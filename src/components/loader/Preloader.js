import React from 'react';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import Loader from 'react-loader-spinner';

const Preloader = () => (
  <div className="spinnerOverlay ">
    <Loader
      type="Grid"
      color="#00BFFF"
      height={100}
      width={100}
      timeout={30000}
    />
  </div>
);

export default Preloader;
