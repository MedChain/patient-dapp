import React from 'react'
import { Form, Text, Scope } from 'informed';
import { Link } from 'react-router-dom'
import PatientSelector from '../patient-selector/patient-selector'
import { connect } from 'react-redux'

const FormContent = () => (
<div>
    <fieldset>
      <div class="form-row">
      <div class="form-group col-md-6">
        <label htmlFor="name">First Name:</label>
          <Text class="form-control" field="firstname" id="firstname" />
        </div>
      <div class="form-group col-md-6">
        <label htmlFor="name">Last Name:</label>
        <Text class="form-control" field="lastname" id="lastname" />
      </div>
      </div>

      <fieldset>
        <legend>Address:</legend>
        <Scope scope="address">
        <div class="form-group">
          <label for="inputAddress">Address</label>
          <Text feild="Address" class="form-control"/>
          </div>
          <label htmlFor="city">City:</label>
          <Text field="city" id="city" />
          <label htmlFor="state">State:</label>
          <Text field="state" id="state" />
        </Scope>
      </fieldset>
      <fieldset>
        <legend>In Case of Emergency:</legend>
        <label htmlFor="ice-0">Contact 1:</label>
        <Text field="ice[0]" id="friend-0"/>
        <label htmlFor="ice-1">Contact 2:</label>
        <Text field="ice[1]" id="friend-1"/>
        <label htmlFor="ice-2">Contact 3:</label>
        <Text field="ice[2]" id="ice-2"/>
      </fieldset>
    </fieldset>
    <fieldset>
      <legend>Stats:</legend>
      <Scope scope="stats">
        <label htmlFor="heart-rate">Heart Rate:</label>
        <Text field="heart-rate" id="heart-rate" />
        <label htmlFor="blood-pressure">Blood Pressure:</label>
        <Text field="blood-pressure" id="blood-pressure" />
        <label htmlFor="temperature">Temperature:</label>
        <Text field="temperature" id="temperature" />
        <label htmlFor="respitory-rate">Respitory Rate:</label>
        <Text field="respitory-rate" id="respitory-rate" />
        <label htmlFor="height">Height:</label>
        <Text field="height" id="height" />
        <label htmlFor="weight">Weight:</label>
        <Text field="weight" id="weight" />
      </Scope>
    </fieldset>
    <button type="submit">
      Submit
    </button>
    <Link to="/">Back to home</Link>
  </div>






  
)

class Vitals extends React.Component {
  constructor(props) {
    super(props);

    // Remember! This binding is necessary to make `this` work in the callback
    this.setFormApi = this.setFormApi.bind(this);
  }

  setFormApi(formApi){
    this.formApi = formApi;
  }

  render() {
    this.props.patient && this.formApi && this.formApi.setValues(this.props.patient);
    const name = (this.props.patient) ? this.props.patient.firstname + " " + this.props.patient.lastname : "a NEW patient's";
    return (
      <div id="doctor-vitals">
        <PatientSelector />
        <h2>Enter {name} vitals</h2>
        <Form id="doctor-form" component={FormContent} getApi={this.setFormApi} />
      </div>
    );
  }
}

const mapStateToProps = ({ patient }) => ({
  patient: patient.patients[patient.currentPatient] || null,
})


export default connect(
  mapStateToProps,
  null
)(Vitals)
