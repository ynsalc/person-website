import React from "react";

const Navbar = () => {
  return (
    <div className="flex justify-between mt-7">
      <span className="text-xl text-white font-extrabold text-title">{`{{ <Ynsalc /> }}`}</span>
      <div className="text-white text-l flex">
        <span className="mr-7 last:mr-0 text-p">Anasayfa</span>
        <span className="mr-7 last:mr-0 text-p">Özgeçmiş</span>
        <span className="mr-7 last:mr-0 text-p">Blog</span>
        <span className="mr-7 last:mr-0 text-p">Projeler</span>
        <span className="mr-7 last:mr-0 text-p">İletişim</span>
      </div>
    </div>
  );
};

export default Navbar;
