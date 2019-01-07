import FrontendGallery from "./components/FrontendGallery";

const galleries = document.querySelectorAll(
  ".wp-block-jsforwpadvblocks-gallery"
);

galleries.forEach((gallery, index) => {
  const direction = gallery.dataset.direction;
  const isLightboxEnabled = gallery.dataset.lightbox;
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
  wp.element.render(
    <FrontendGallery
      photos={photos}
      direction={direction}
      isLightboxEnabled={isLightboxEnabled}
    />,
    gallery
  );
});
