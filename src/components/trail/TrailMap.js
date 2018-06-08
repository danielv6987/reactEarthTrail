import React from "react"
import {
    withScriptjs,
    withGoogleMap,
    GoogleMap,
    Marker,
    GroundOverlay,
    FusionTablesLayer,
    Circle
} from "react-google-maps"

const QuakesMap = withGoogleMap(({trails, location}) => (
    <GoogleMap defaultZoom={8} center={{lat: location.lat, lng: location.lng}}>
        {trails.map((trail, index) => (
            <Marker
                key={index}
                position={{lat: trail.lat, lng: trail.lon}}
            />
        ))}

    </GoogleMap>
))
export default QuakesMap
