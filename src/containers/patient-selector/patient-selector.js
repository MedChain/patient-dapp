import React from 'react';
import AsyncSelect from 'react-select/lib/Async';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import {
  savePatientList,
  switchPatient,
} from '../../modules/patient'

let optionItems = [];

const filterResults = (inputValue: string) => {
  return optionItems.filter(i =>
    i.label.toLowerCase().includes(inputValue.toLowerCase())
  );
}

// Async load of options
const loadOptions = (inputValue, callback) => {
  // from this url
  fetch('http://localhost:3000/api/patient/all')
      .then(response => {
          return response.json();
      }).then(data => {
        // massage the data into option/label objects
        console.log(data);
        optionItems = data.map((result) => ({
          value: result.id,
          label: result.firstname + " " + result.lastname,
        }));

      callback(filterResults(inputValue));
  });
};


class PatientSelector extends React.Component {
  componentDidMount() {
    fetch('http://localhost:3000/api/patient/all')
        .then(response => {
            return response.json();
        }).then(data => {
          // massage the data into option/label objects
          const patientList = data.reduce((result, next) => {
            result[next.id] = next;
            return result;
          }, {})
          this.props.savePatientList(patientList);
        });
  }

  handleInputChange = (newValue: string) => {
    const inputValue = newValue.value;
    this.props.switchPatient(inputValue);
    return inputValue;
  }

  render() {
    console.log("The currentPatient = " + this.props.currentPatient);
    return (
      <div>
        <AsyncSelect
          cacheOptions
          loadOptions={loadOptions}
          defaultOptions
          onChange={this.handleInputChange}
        />
      </div>
    );
  }
}

const mapStateToProps = ({ patient }) => ({
  patients: patient.patients,
  isFetching: patient.isFetching,
  currentPatient: patient.currentPatient
})

const mapDispatchToProps = dispatch =>
  bindActionCreators({
      savePatientList,
      switchPatient,
    },
    dispatch
  )

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PatientSelector)
