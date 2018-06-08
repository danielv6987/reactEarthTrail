'use strict'
import React, {Component} from 'react';
import {connect} from 'react-redux'

class Header extends Component {

    render() {
        return (
            <section className="hero is-primary">
                <div className="hero-body">
                    <div className="container">
                        <h1 className="title">
                            EarthQuakes
                        </h1>
                        <h2 className="subtitle">
                            Find earthquakes
                        </h2>
                    </div>
                </div>
            </section>
        );
    };
}

export default connect()(Header);
