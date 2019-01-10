const { render } = wp.element;

import FrontendGallery from "./components/FrontendGallery";

const galleries = document.querySelectorAll(
  ".wp-block-jsforwpadvblocks-gallery"
);

galleries.forEach(gallery => {
  const direction = gallery.dataset.direction;
  const isLightboxEnabled = gallery.dataset.islightboxenabled;
  const images = gallery.querySelectorAll("img");

  const photos = [];
  images.forEach(img => {
    photos.push({
      src: img.src,
      width: img.width,
      width: img.width,
      height: img.height,
      height: img.height,
      alt: img.alt,
      caption: img.title
    });
  });
  render(
    <FrontendGallery
      photos={photos}
      direction={direction}
      isLightboxEnabled={isLightboxEnabled}
    />,
    gallery
  );
});
