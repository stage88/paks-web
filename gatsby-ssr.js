/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */

// You can delete this file if you're not using it

import React from 'react';

export const onRenderBody = ({ setHeadComponents, setPostBodyComponents }) => {
  setHeadComponents([
    <link key='1' rel='stylesheet' href='css/bootstrap.min.css' />,
    <link key='2' rel='stylesheet' href='css/animate.css' />,
    // <link key="3" rel="stylesheet" href="css/owl.carousel.min.css" />,
    <link key='4' rel='stylesheet' href='css/themify-icons.css' />,
    <link key='5' rel='stylesheet' href='css/flaticon.css' />,
    // <link key="6" rel="stylesheet" href="css/magnific-popup.css" />,
    // <link key="7" rel="stylesheet" href="css/slick.css" />,
  ]);
  setPostBodyComponents([
    // <script key="1" type="text/javascript" src="js/jquery-1.12.1.min.js"></script>,
    // <script key="2" type="text/javascript" src="js/popper.min.js"></script>,
    // <script key="3" type="text/javascript" src="js/bootstrap.min.js"></script>,
    // <script key="4" type="text/javascript" src="js/jquery.magnific-popup.js"></script>,
    // <script key="5" type="text/javascript" src="js/swiper.min.js"></script>,
    // <script key="6" type="text/javascript" src="js/isotope.pkgd.min.js"></script>,
    // <script key="7" type="text/javascript" src="js/owl.carousel.min.js"></script>,
    // <script key="8" type="text/javascript" src="js/jquery.nice-select.min.js"></script>,
    // <script key="9" type="text/javascript" src="js/slick.min.js"></script>,
    // <script key="10" type="text/javascript" src="js/jquery.counterup.min.js"></script>,
    // <script key="11" type="text/javascript" src="js/waypoints.min.js"></script>,
    // <script key="12" type="text/javascript" src="js/custom.js"></script>,
  ]);
};
