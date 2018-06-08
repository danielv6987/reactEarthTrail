"use strict"
import _ from "lodash"
import React, {Component} from "react"
import {connect} from "react-redux"
import {reduxForm, Field} from "redux-form"
import validator from "validator"
import * as actions from "../../actions"
import CustomField from "../layout/Field"
import formFields from "./formFields"

class SearchForm extends Component {
    clearForm = (e) => {
        e.preventDefault()
        this.props.clearTrails()
        this.props.reset()
    }

    submitForm = values => {
        this.props.searchTrailForm(values)
    }

    renderFields() {
        return _.map(formFields, ({type, label, name, options}) => {
            return (
                <Field
                    key={name}
                    component={CustomField}
                    type={type}
                    label={label}
                    name={name}
                    options={options}
                />
            )
        })
    }

    render() {
        return (
            <div>
                <form>
                    {this.renderFields()}
                    <div className="control is-pulled-left">
                        <button
                            className="button is-danger"
                            onClick={this.clearForm}>
                            <span>Clear</span>
                            <span className="icon is-small">
                <i className="fa fa-ban"/>
              </span>
                        </button>
                    </div>
                    <div className="control is-pulled-right">
                        <button
                            className="button is-primary"
                            type="submit"
                            onClick={this.props.handleSubmit(this.submitForm)}>
                            <span>Search</span>
                            <span className="icon is-small">
                <i className="fa fa-search"/>
              </span>
                        </button>
                    </div>
                </form>
            </div>
        )
    }
}

function mapStateToProps({index}) {
    return {index}
}

const Form = connect(mapStateToProps, actions)(SearchForm)

export default reduxForm({
    form: "trailSearchForm"
})(Form)
