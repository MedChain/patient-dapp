
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
    <label htmlFor="name">First Name</label>
      <Text class="form-control" field="firstname" id="firstname" />
    </div>
  <div class="form-group col-md-6">
    <label htmlFor="name">Last Name</label>
    <Text class="form-control" field="lastname" id="lastname" />
  </div>
  </div>

  <fieldset>
    <Scope scope="address">
    <div class="form-group">
      <label for="inputAddress">Address</label>
      <Text feild="Address" class="form-control"/>
      </div>
      <div class="form-row">
        <div class="form-group col-md-6">
          <label htmlFor="city">City</label>
          <Text class ="form-control"field="city" id="city" />
          </div>
          
      <div class="form-group col-md-4">
        <label htmlFor="state">State</label>
        <Text class="form-control" field="state" id="state" />
        </div>
        <div class="form-group col-md-2">
          <label for="inputZip">Zip</label>
          <Text type="text" class="form-control" id="inputZip"/>
        </div>
        </div>
    </Scope>
  </fieldset>
  <fieldset>
    <legend>Emergency Contacts</legend>
    <div class="form-row">
      <div class="form-group col-md-6">
        <label htmlFor="ice-0">Contact 1 Name</label>
        <Text class="form-control" field="ice[0]" id="friend-0"/>
      </div>
    <div class="form-group col-md-6">
      <label htmlFor="name">Phone Number</label>
      <Text class="form-control" field="lastname" id="lastname" />
    </div>
  </div>
  <div class="form-row">
      <div class="form-group col-md-6">
        <label htmlFor="ice-1">Contact 2 Name</label>
        <Text class="form-control" field="ice[1]" id="friend-0"/>
      </div>
    <div class="form-group col-md-6">
      <label htmlFor="name"> Phone Number</label>
      <Text class="form-control" field="lastname" id="lastname" />
    </div>
  </div>
  </fieldset>
</fieldset>
{/* <fieldset>
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
</fieldset> */}
<div class="col-auto">
  <button type="submit" class="btn btn-primary mb-2">Submit</button>
</div>
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
    {/* /* <PatientSelector /> */}
    <h2>Update Profile</h2> 
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

