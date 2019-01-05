import Gallery from "react-photo-gallery";
import Lightbox from "react-images";

const galleries = document.querySelectorAll(
  ".wp-block-jsforwpadvblocks-gallery"
);

class App extends React.Component {
  constructor() {
    super();
    this.state = { currentImage: 0 };
    this.closeLightbox = this.closeLightbox.bind(this);
    this.openLightbox = this.openLightbox.bind(this);
    this.gotoNext = this.gotoNext.bind(this);
    this.gotoPrevious = this.gotoPrevious.bind(this);
  }
  openLightbox(event, obj) {
    this.setState({
      currentImage: obj.index,
      lightboxIsOpen: true
    });
  }
  closeLightbox() {
    this.setState({
      currentImage: 0,
      lightboxIsOpen: false
    });
  }
  gotoPrevious() {
    this.setState({
      currentImage: this.state.currentImage - 1
    });
  }
  gotoNext() {
    this.setState({
      currentImage: this.state.currentImage + 1
    });
  }
  render() {
    return (
      <div>
        <Gallery
          photos={this.props.photos}
          direction={this.props.direction}
          onClick={this.openLightbox}
        />
        <Lightbox
          images={this.props.photos}
          onClose={this.closeLightbox}
          onClickPrev={this.gotoPrevious}
          onClickNext={this.gotoNext}
          currentImage={this.state.currentImage}
          isOpen={this.state.lightboxIsOpen}
        />
      </div>
    );
  }
}

galleries.forEach((gallery, index) => {
  const direction = gallery.dataset.direction;
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
  wp.element.render(<App photos={photos} direction={direction} />, gallery);
});
