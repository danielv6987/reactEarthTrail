"use strict"
import {EARTHQ_LIST, EARTHQ_SRCLOC, TRAIL_LIST} from "../actions/types"

export default (state = null, action) => {
    switch (action.type) {
        case EARTHQ_LIST:
            return {
                ...state,
                earthquakes: action.earthquakes || []
            }
        case EARTHQ_SRCLOC:
            return {
                ...state,
                location: action.location || null
            }
        case TRAIL_LIST:
            return {
                ...state,
                trails: action.trails || []
            }
        default:
            return state
    }
}
