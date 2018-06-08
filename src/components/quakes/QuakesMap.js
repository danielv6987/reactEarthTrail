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

function test(e) {
    console.log(e)
}

const QuakesMap = withGoogleMap(({earthquakes, location}) => (
    <GoogleMap defaultZoom={8} center={{lat: location.lat, lng: location.lng}}>
        {console.log(location)}
        {earthquakes.map((earthquake, index) => (
            <Circle
                key={index}
                options={{
                    strokeOpacity: 0.8,
                    strokeWeight: 2,
                    fillColor: "#FF0000",
                    fillOpacity: 0.35
                }}
                center={{lat: earthquake.lat, lng: earthquake.lng}}
                radius={80 * 100}
                onClick={test.bind(this, {earthquake, index})}
            />
        ))}

    </GoogleMap>
))
export default QuakesMap
