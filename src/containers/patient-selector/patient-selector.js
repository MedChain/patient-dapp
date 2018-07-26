import React, { Component } from 'react';
import AsyncSelect from 'react-select/lib/Async';

type State = {
  inputValue: string,
};
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
      console.log(filterResults(inputValue));
      callback(filterResults(inputValue));
  });
};

export default class WithCallbacks extends Component<*, State> {
  state = { inputValue: '' };
  handleInputChange = (newValue: string) => {
    const inputValue = newValue.value;
    this.setState({ inputValue });
    return inputValue;
  };
  render() {
    return (
      <div>
        <pre>inputValue: "{this.state.inputValue}"</pre>
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
