import React from "react"
import { connect } from "react-redux"
import TrailListItem from "./TrailListItem"

export const TrailList = props => (
    <div className="results">
        {props.trails.length === 0 ? (
            <div>
                <span>No Trails</span>
            </div>
        ) : (
            props.trails.map((trail, index) => {
                return <TrailListItem key={index} {...trail} />
            })
        )}
    </div>
)

const mapStateToProps = ({ index }) => {
    return {
        trails: index && index.trails ? index.trails : []
    }
}

export default connect(mapStateToProps)(TrailList)
