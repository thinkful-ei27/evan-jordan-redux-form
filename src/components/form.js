import React from 'react';
import { reduxForm, Field } from 'redux-form';
import './form.css';
import {required, fiveLong, isNumber} from '../validators'

export class Form extends React.Component {
  onSubmit(values) {
    console.log(values);
  }
  render() {
    console.log(this.props)
    return (
      <form>
        <label htmlFor="trackingNumber">Tracking Number</label>
        <Field
          id="trackingNumber"
          name="trackingNumber"
          type="text"
          className="trackingNumber"
          component="input"
          validate={[required, fiveLong, isNumber]}
        />
        <label htmlFor="issue">What is your deal?!</label>
        <Field name="issue" className="issue" component="select">
          <option value="Missed">Missed Delivery</option>
          <option value="Stolen">Stolen Delivery</option>
          <option value="Late">Late Delivery</option>
        </Field>
        <label htmlFor="moreDetails">Provide more details</label>
        <Field
          component="input"
          name="moreDetails"
          id="moreDetails"
          type="textArea"
          className="moreDetails"
        />
        <Field component="button" name="submitButton">
          Submit
        </Field>
      </form>
    );
  }
}

export default reduxForm({
  form: 'complaintForm'
})(Form);
