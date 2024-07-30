import React from 'react';

const CatalogueVideo = () => {
  return (
    <div className="catalogue-background-video">
      <video autoPlay loop muted>
        <source src="https://www.bmw.com/content/dam/bmw/marketBMWCOM/bmw_com/categories/freude/sky/sky-04-media-hd.mp4" type="video/mp4" />
      </video>
    </div>
  );
};

export default CatalogueVideo;