// https://www.lightgalleryjs.com/docs/getting-started/
// https://www.lightgalleryjs.com/demos/html-markup/

import lightGallery from "https://cdnjs.cloudflare.com/ajax/libs/lightgallery/2.7.1/lightgallery.es5.min.js";

import lgZoom from "https://cdnjs.cloudflare.com/ajax/libs/lightgallery/2.7.1/plugins/zoom/lg-zoom.es5.min.js";

const $lgContainer = document.getElementById("swiper-container");

const lg = lightGallery($lgContainer, {
  speed: 500,
  showZoomInOutIcons: true,
  actualSize: false,
	controls: true,
	selector: '.swiper-slide > a',
  plugins: [lgZoom],
  licenseKey: '0000-0000-000-0000',
});