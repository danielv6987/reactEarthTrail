'use strict'
import axios from 'axios';
import {EARTHQ_LIST, EARTHQ_SRCLOC, TRAIL_LIST} from './types';


/*
 * When getUser is called the function will be return and ran. Redux-thunk will inspect the values
 * returned from the actions to determine if its a regular action being returned or a function.
 * and it will pass in the dispatch function.
 * React-thunk is a middleware
 */
export const getUser = () => async dispatch => {
    const res = await axios.get('/api/current_user')
    dispatch({type: FETCH_USER, payload: res.data})
}
// return (dispatch) => {
//     axios.get('/api/current_user')
//         .then(res => dispatch({type: FETCH_USER, payload: res}));
// };

export const searchForm = values => async dispatch => {
    const googleApi = `https://maps.googleapis.com/maps/api/geocode/json?address=${values.city ? values.city + "," : ''}${values.state}&key=${process.env.GMAP_CLIENT_KEY}`
    const googleRes = await axios.get(googleApi)
    dispatch({type: EARTHQ_SRCLOC, location: googleRes.data.results[0].geometry.location})
    const cords = googleRes.data.results[0].geometry.bounds
    const geoNameApi = `http://api.geonames.org/earthquakesJSON?username=danielv6987&north=${cords.northeast.lat}&south=${cords.southwest.lat}&east=${cords.northeast.lng}&west=${cords.southwest.lng}&maxRows=500`
    const geoRes = await axios.get(geoNameApi)
    dispatch({type: EARTHQ_LIST, earthquakes: geoRes.data.earthquakes})
}

export const searchTrailForm = values => async dispatch => {
    const config = {
        headers: {'X-Mashape-Key':'sSnVvtblChmshZVmD7oZS8eZbWAfp1uztzzjsnlmxqaqwWK7nk'}
    }
    const trailsApi = `https://trailapi-trailapi.p.mashape.com/?q[activities_activity_type_name_eq]=${values.activity ? values.activity : ''}${values.city ? `&q[city_cont]=${values.city}` : ''}&q[state_cont]=${values.state}&radius=25`

    const trailsRes = await axios.get(trailsApi,config)
    console.log(trailsRes)
    if(trailsRes.data.places.length>0){
        const place = trailsRes.data.places[0]
        dispatch({type: EARTHQ_SRCLOC, location: {lat:place.lat,lng:place.lon}})
    }
    dispatch({type: TRAIL_LIST, trails: trailsRes.data.places})
}

export const clearEarthquakes = () => ({
    type: EARTHQ_LIST,
    earthquakes: []
})

export const clearTrails = () => ({
    type: TRAIL_LIST,
    trails: []
})

export const setMessage = (message) => ({
    type: SET_MSG,
    message
})
