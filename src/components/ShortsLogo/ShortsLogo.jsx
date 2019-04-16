import React from 'react';

import ShortsLogo from './public/ShortsLogo.png'; // Tell Webpack this JS file uses this image

console.log(ShortsLogo); //

function ShortsLogo() {
  // Import result is the URL of your image
  return <img src={"./public/ShortsLogo.png"} alt="Logo" />;
}

export default ShortsLogo;