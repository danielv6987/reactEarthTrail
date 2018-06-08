'use strict'
import React, {Component} from 'react'
import TrailHeader from "./TrailHeader"
import TrailMap from "./TrailMap"
import TrailList from "./TrailList"
import SearchForm from "./SearchForm"
import {connect} from "react-redux"
import * as actions from "../../actions"
import TrailActivitiesModal from "./TrailActivitiesModal"

// <TrailActivitiesModal
// activities={this.props.activities}
// />

class QuakesMain extends Component {

    render() {
        return (
            <div>
                <TrailHeader/>
                <section className="section">
                    <div className="container">
                        <div className="columns">
                            <div className="column is-5 is-offset-3">

                                <SearchForm/>

                                {this.props.trails.length > 0 && this.props.location &&(
                                    <div className="googleMap">
                                        <TrailMap
                                            trails={this.props.trails}
                                            location={this.props.location}
                                            loadingElement={<div style={{height: `100%`}}/>}
                                            containerElement={
                                                <div style={{height: `400px`}}/>
                                            }
                                            mapElement={<div style={{height: `100%`}}/>}
                                        />
                                    </div>
                                )}
                            </div>
                            <div className="column is-4-desktop">
                                <TrailList/>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}

const mapStateToProps = ({index}) => {
    return {
        trails: index && index.trails ? index.trails : [],
        activities: index && index.activities ? index.activities : [],
        location: index && index.location ? index.location : null
    }
}

export default connect(mapStateToProps, actions)(QuakesMain)