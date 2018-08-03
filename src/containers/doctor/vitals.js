import React from 'react'
import { Form, Text, Scope } from 'informed'
import { Link } from 'react-router-dom'
import PatientSelector from '../patient-selector/patient-selector'
import { connect } from 'react-redux'

const FormContent = () => (
  <div>
    <fieldset>
      <legend>Vitals</legend>
      <Scope scope="stats">
      <div class="form-group row">
        <label class="col-sm-2 col-form-label" htmlFor="heart-rate">HeartRate:</label>
          <div class="col-sm-10">
            <Text class ="form-control" field="heart-rate" id="heart-rate" />
            </div>
            </div>
        <div class="form-group row">
          <label  class="col-sm-2 col-form-label" htmlFor="blood-pressure">Blood Pressure:</label>
          <div class="col-sm-10">
          <Text class ="form-control" field="blood-pressure" id="blood-pressure" />
          </div>
          </div>
        <div class="form-group row">
          <label class="col-sm-2 col-form-label" htmlFor="temperature">Temperature:</label>
          <div class="col-sm-10">
          <Text class ="form-control" field="temperature" id="temperature" />
          </div>
          </div>

        <div class="form-group row">
          <label class="col-sm-2 col-form-label" htmlFor="respitory-rate">Respitory Rate:</label>
          <div class="col-sm-10">
          <Text class ="form-control" field="respitory-rate" id="respitory-rate" />
          </div>
          </div>
        <div class="form-group row">
          <label class="col-sm-2 col-form-label" htmlFor="height">Height:</label>
          <div class="col-sm-10">
          <Text class ="form-control" field="height" id="height" />
          </div>
          </div>
        <div class="form-group row">
        <label class="col-sm-2 col-form-label" htmlFor="weight">Weight:</label>
        <div class="col-sm-10">
        <Text class ="form-control" field="weight" id="weight" />
        </div>
          </div>
      </Scope>
    </fieldset>
    <div class="col-auto">
      <button type="submit" class="btn btn-primary mb-2">
        Submit
      </button>
    </div>
    <Link to="/">Back to home</Link>
  </div>
)

class Vitals extends React.Component {
  constructor(props) {
    super(props)

    // Remember! This binding is necessary to make `this` work in the callback
    this.setFormApi = this.setFormApi.bind(this)
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
        <h2>Update Vital Signs for</h2>
        <PatientSelector />
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
  patient: patient.patients[patient.currentPatient] || null
})

export default connect(
  mapStateToProps,
  null
)(Vitals)
