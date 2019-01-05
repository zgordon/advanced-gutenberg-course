/*
 * Base Google Map example
 */
const { Component } = wp.element;

import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker
} from "react-google-maps";

// - Localize default map location
// - Search form in sidebar
// - Wire autocomplete for locations
// - onSelect location, add to sidebar and map

const MyMapComponent = withScriptjs(
  withGoogleMap(props => (
    <GoogleMap defaultZoom={8} defaultCenter={{ lat: -34.397, lng: 150.644 }}>
      {props.isMarkerShown && (
        <Marker position={{ lat: -34.397, lng: 150.644 }} />
      )}
    </GoogleMap>
  ))
);

export default MyMapComponent;

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
