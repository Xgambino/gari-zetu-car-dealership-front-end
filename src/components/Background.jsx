import React from 'react';
import "../index.css";

const Background = ({ playStatus, heroCount }) => {
  if (playStatus) {
    return (
      <video className="background fade-in" autoPlay loop muted>
        <source src="https://www.bmw.com/content/dam/bmw/marketBMWCOM/bmw_com/categories/freude/sky/sky-04-media-hd.mp4" type="video/mp4" />
      </video>
    );
  } else if (heroCount === 0) {
    return <img src="https://www.topgear.com/sites/default/files/2023/08/P90492179_highRes_bmw-i7-xdrive60-m-sp%20%281%29.jpg" className="background fade-in" alt="image1" />;
  } else if (heroCount === 1) {
    return <img src="https://www.bmw.com.sg/content/dam/bmw/common/all-models/m-series/series-overview/bmw-m-series-seo-overview-ms-04.jpg" className="background fade-in" alt="image2" />;
  } else if (heroCount === 2) {
    return <img src="https://cloudfront-us-east-2.images.arcpublishing.com/reuters/U6DU4EGVOZNXPHXTMIPF7B5C64.jpg" className="background fade-in" alt="image3" />;
  }
};

export default Background;