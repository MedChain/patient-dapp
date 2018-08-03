import React from 'react'
import { bindActionCreators } from 'redux'
import { Form, Text, Scope } from 'informed'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import {
  switchPatient,
} from '../../modules/patient'

import './profile.css'

const FormContent = () => (
  <div>
    <fieldset>
      <div class="form-row">
        <div class="form-group col-md-6">
          <label htmlFor="firstname">First Name</label>
          <Text class="form-control" field="firstname" id="firstname" />
        </div>
        <div class="form-group col-md-6">
          <label htmlFor="lastname">Last Name</label>
          <Text class="form-control" field="lastname" id="lastname" />
        </div>
      </div>

      <fieldset>
        <Scope scope="address">
          <div class="form-group">
            <label for="address">Address</label>
            <Text class="form-control" field="address" id="address" />
          </div>
          <div class="form-row">
            <div class="form-group col-md-6">
              <label htmlFor="city">City</label>
              <Text class="form-control" field="city" id="city" />
            </div>

            <div class="form-group col-md-4">
              <label htmlFor="state">State</label>
              <Text class="form-control" field="state" id="state" />
            </div>
            <div class="form-group col-md-2">
              <label for="zip">Zip</label>
              <Text class="form-control" field="zip" id="zip" />
            </div>
          </div>
        </Scope>
      </fieldset>
      <fieldset>
        <legend>Emergency Contacts</legend>
        <Scope scope="ice[0]">
          <div class="form-row">
            <div class="form-group col-md-6">
              <label htmlFor="name">Contact 1 Name</label>
              <Text class="form-control" field="name" id="name" />
            </div>
            <div class="form-group col-md-6">
              <label htmlFor="phone">Phone Number</label>
              <Text class="form-control" field="phone" id="phone" />
            </div>
          </div>
        </Scope>
        <Scope scope="ice[1]">
          <div class="form-row">
            <div class="form-group col-md-6">
              <label htmlFor="name">Contact 2 Name</label>
              <Text class="form-control" field="name" id="name" />
            </div>
            <div class="form-group col-md-6">
              <label htmlFor="phone"> Phone Number</label>
              <Text class="form-control" field="phone" id="phone" />
            </div>
          </div>
        </Scope>
      </fieldset>
    </fieldset>
    <div class="col-auto">
      <button type="submit" class="btn btn-primary mb-2">
        Submit
      </button>
    </div>
    <Link to="/">Back to home</Link>
  </div>
)

class Profile extends React.Component {
  constructor(props) {
    super(props)

    // Remember! This binding is necessary to make `this` work in the callback
    this.setFormApi = this.setFormApi.bind(this)
  }

  componentDidMount() {
    !this.props.isFetching && this.props.switchPatient(1);
  }

  setFormApi(formApi) {
    this.formApi = formApi
  }

  render() {
    this.props.patient &&
      this.formApi &&
      this.formApi.setValues(this.props.patient)
    return (
      <div id="doctor-vitals">
        {/* <PatientSelector /> */}
        <h2>Update Profile</h2>
        <Form
          id="doctor-form"
          component={FormContent}
          getApi={this.setFormApi}
        />
      </div>
    )
  }
}

const mapStateToProps = ({ patient }) => ({
  patient: patient.patient || null
})

const mapDispatchToProps = dispatch =>
  bindActionCreators({
      switchPatient,
    },
    dispatch
  )

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Profile)
