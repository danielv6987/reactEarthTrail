import React from "react"
import { connect } from "react-redux"
import QuakesListItem from "./QuakesListItem"

export const QuakesList = props => (
  <div className="results">
    {props.earthquakes.length === 0 ? (
      <div>
        <span>No Earthquakes</span>
      </div>
    ) : (
      props.earthquakes.map((earthquake, index) => {
        return <QuakesListItem key={index} {...earthquake} />
      })
    )}
  </div>
)

const mapStateToProps = ({ index }) => {
  return {
    earthquakes: index && index.earthquakes ? index.earthquakes : []
  }
}

export default connect(mapStateToProps)(QuakesList)
