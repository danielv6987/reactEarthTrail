'use strict'
/**
 *
 *
 * The ...input is spreading the object passed as a props from reduxForm
 * we are wiring the vent like onBlur and onChange
 * would of been equivalent to onBlur={input.onBlur} onBlur={props.input.onBlur}
 * @description
 * @param input
 * contains useful information regarding the field like errors, has it been touched, changed
 * @param meta
 * @returns {XML}
 *
 *
 *
 * export default ({input,label,meta}) => {
 * {meta.error}
 */
import React, {Component} from 'react';
import _ from 'lodash';

export default class CustomField extends Component {
    constructor(props) {
        super(props)
        this.label = props.label
        this.type = props.type
        this.options = props.options
    }

    renderField({input}) {
        switch (this.type) {
            case "select":
                return (
                    <div className="select is-primary">
                        <select {...input}>
                            {this.renderOptions()}
                        </select>
                    </div>
                )
            default:
                return <input className="input" type="text" {...input}/>
        }
    }

    renderOptions() {
        return _.map(this.options, ({value, show}) => {
            return <option key={value} value={value}>{show}</option>
        })
    }

    render() {
        return (
            <div className="field">
                <label className="label">{this.label}</label>
                <div className="control">
                    {this.renderField(this.props)}
                </div>
            </div>
        )
    }
}