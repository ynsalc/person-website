import React from "react";
import devImage from "../../assets/dev-img.png";

const Banner = () => {
  return (
    <div className="xl:flex xl:justify-between md:flex md:justify-between xl:items-center md:items-center">
      <div className="xl:w-2/4 md:w-2/4 sm:w-full">
        <p className="text-white text-5xl text-title">
          Merhaba ben Yunus ALICI.
        </p>
        <br />
        <span className="text-white text-xl text-p">
          Frontend Developer'ım.
        </span>
        <br />
        <span className="text-white text-xl text-p">
          React.js ile profesyonel projeler geliştiriyorum.
        </span>
        <br />
        <span className="text-white text-xl text-p">
          2017 yılından itibaren aktif olarak sektörde görev almaktayım.
        </span>
        <button className="bg-gradient-to-r from-cyan-500 to-blue-500 p-3 text-white rounded-md mt-6 text-title">
          İletişime Geç
        </button>
      </div>
      <img src={devImage} alt="asd" className="xl:w-2/4 md:w-2/4 sm:w-full" />
    </div>
  );
};

export default Banner;
