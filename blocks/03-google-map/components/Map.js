/*
 * Base Google Map example
 */
const { Fragment, Component } = wp.element;
const { compose } = wp.compose;

import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker
} from "react-google-maps";
import { SearchBox } from "react-google-maps/lib/components/places/SearchBox";

// - Localize default map location
// - Search form in sidebar
// - Wire autocomplete for locations
// - onSelect location, add to sidebar and map

class MyMapComponent extends Component {
  onSearchBoxMounted(ref) {
    refs.searchBox = ref;
  }
  render() {
    console.log(this.props);
    return (
      <GoogleMap defaultZoom={8} defaultCenter={{ lat: -34.397, lng: 150.644 }}>
        <SearchBox
          ref={this.onSearchBoxMounted}
          bounds={props.bounds}
          controlPosition={google.maps.ControlPosition.TOP_LEFT}
          onPlacesChanged={props.onPlacesChanged}
        >
          <input
            type="text"
            placeholder="Customized your placeholder"
            style={{
              boxSizing: `border-box`,
              border: `1px solid transparent`,
              width: `240px`,
              height: `32px`,
              marginTop: `27px`,
              padding: `0 12px`,
              borderRadius: `3px`,
              boxShadow: `0 2px 6px rgba(0, 0, 0, 0.3)`,
              fontSize: `14px`,
              outline: `none`,
              textOverflow: `ellipses`
            }}
          />
        </SearchBox>
        <Fragment>
          {/* <Marker position={{ lat: -34.397, lng: 150.644 }} />
        <Marker position={{ lat: -35, lng: 150 }} />
        <Marker position={{ lat: -36, lng: 152 }} /> */}
        </Fragment>
      </GoogleMap>
    );
  }
}

export default compose(
  withScriptjs,
  withGoogleMap
)(MyMapComponent);

// export default class SimpleMapPage extends Component {
//   static propTypes = {
//     center: PropTypes.array,
//     zoom: PropTypes.number,
//     greatPlaceCoords: PropTypes.any
//   };

//   static defaultProps = {
//     center: [59.938043, 30.337157],
//     zoom: 9,
//     greatPlaceCoords: { lat: 59.724465, lng: 30.080121 }
//   };

//   constructor(props) {
//     super(props);
//   }

//   render() {
//     return (
//       <GoogleMap
//         // apiKey={YOUR_GOOGLE_MAP_API_KEY} // set if you need stats etc ...
//         center={this.props.center}
//         zoom={this.props.zoom}
//       >
//         <MyGreatPlace
//           lat={59.955413}
//           lng={30.337844}
//           text={"A"} /* Kreyser Avrora */
//         />
//         <MyGreatPlace
//           {...this.props.greatPlaceCoords}
//           text={"B"} /* road circle */
//         />
//       </GoogleMap>
//     );
//   }
// }
