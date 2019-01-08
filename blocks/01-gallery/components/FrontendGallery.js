import Gallery from "react-photo-gallery";
import Lightbox from "react-images";

export default class FrontendGallery extends React.Component {
  state = {
    currentImage: 0
  };
  openLightbox = (event, obj) => {
    this.setState({
      currentImage: obj.index,
      lightboxIsOpen: true
    });
  };
  closeLightbox = () => {
    this.setState({
      currentImage: 0,
      lightboxIsOpen: false
    });
  };
  gotoPrevious = () => {
    this.setState({
      currentImage: this.state.currentImage - 1
    });
  };
  gotoNext = () => {
    this.setState({
      currentImage: this.state.currentImage + 1
    });
  };
  render() {
    return (
      <div>
        <Gallery
          photos={this.props.photos}
          direction={this.props.direction}
          onClick={this.openLightbox}
        />
        {this.props.islightboxenabled == "true" && (
          <Lightbox
            images={this.props.photos}
            onClose={this.closeLightbox}
            onClickPrev={this.gotoPrevious}
            onClickNext={this.gotoNext}
            currentImage={this.state.currentImage}
            isOpen={this.state.lightboxIsOpen}
          />
        )}
      </div>
    );
  }
}
