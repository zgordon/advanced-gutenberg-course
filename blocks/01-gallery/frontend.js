const { render } = wp.element;

import FrontendGallery from "./components/FrontendGallery";

const galleries = document.querySelectorAll(
  ".wp-block-jsforwpadvblocks-gallery"
);

galleries.forEach((gallery, index) => {
  const direction = gallery.dataset.direction;
  const islightboxenabled = gallery.dataset.islightboxenabled;
  const images = gallery.querySelectorAll("img");
  const photos = [];
  images.forEach(image => {
    photos.push({
      src: image.src,
      width: image.width,
      height: image.height,
      alt: image.alt,
      caption: image.title
    });
  });
  render(
    <FrontendGallery
      photos={photos}
      direction={direction}
      islightboxenabled={islightboxenabled}
    />,
    gallery
  );
});
