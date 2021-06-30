import React, { useEffect, useState } from "react";

import "./Banner.css";

const Banner = ({bannerImg}) => {
  return (
    <header className="banner"
    style={{
        backgroundSize: "cover",
        backgroundImage: `url(${bannerImg})`,
        backgroundPosition: "center center",
    }}
>
    <div className="banner-contents">

        <h1 className="banner-title"
        >
            Welcome Guest
        </h1>

    </div>

    <div className="banner-bottom" />

</header>
  );
};

export default Banner;
