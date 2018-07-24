import React from 'react'
import { Form, Text, Scope } from 'informed';
import { Link } from 'react-router-dom'

const Vitals = () => (
  <div id="doctor-vitals">
    <h2>Enter John Doe's vitals</h2>
    <Form id="doctor-form">
      <label htmlFor="name">First name:</label>
      <Text field="name" id="name" />
      <br />
      <Scope scope="favorite">
        <label htmlFor="color">Favorite color:</label>
        <Text field="color" id="color" />
        <label htmlFor="food">Favorite food:</label>
        <Text field="food" id="food" />
      </Scope>
      <label htmlFor="friend-0">Friend 1:</label>
      <Text field="friends[0]" id="friend-0"/>
      <label htmlFor="friend-1">Friend 2:</label>
      <Text field="friends[1]" id="friend-1"/>
      <label htmlFor="friend-2">Friend 3:</label>
      <Text field="friends[2]" id="friend-2"/>
      <button type="submit">
        Submit
      </button>
      <Link to="/">Back to home</Link>
    </Form>
  </div>
)

export default Vitals
