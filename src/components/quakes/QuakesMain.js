'use strict'
import React, {Component} from 'react'
import QuakesHeader from "./QuakesHeader"
import QuakesMap from "./QuakesMap"
import QuakesList from "./QuakesList"
import SearchForm from "./SearchForm"
import {connect} from "react-redux"
import * as actions from "../../actions"

class QuakesMain extends Component {

    render() {
        return (
            <div>
                <QuakesHeader/>
                <section className="section">
                    <div className="container">
                        <div className="columns">
                            <div className="column is-5 is-offset-3">
                                <SearchForm/>

                                {this.props.earthquakes.length > 0 && (
                                    <div className="googleMap">
                                        <QuakesMap
                                            earthquakes={this.props.earthquakes}
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
                                <QuakesList/>
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
        earthquakes: index && index.earthquakes ? index.earthquakes : [],
        location: index && index.location ? index.location : null
    }
}

export default connect(mapStateToProps, actions)(QuakesMain)