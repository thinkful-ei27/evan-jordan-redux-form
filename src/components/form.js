import React from 'react';
import { reduxForm, Field, SubmissionError } from 'redux-form';
import './form.css';
import { required, fiveLong, isNumber } from '../validators';
import Input from './input';
 
export class Form extends React.Component {
  onSubmit(values) {
    const url =
      'https://us-central1-delivery-form-api.cloudfunctions.net/api/report';
    return fetch(url, {
      method: 'POST',
      body: JSON.stringify(values),
      headers: { 'Content-Type': 'application/json' }
    })
      .then(res => {
        if (!res.ok) {
          return res.json().then(err => Promise.reject(err));
        }
        return res.json().then(data => console.log(data));
      })
      .catch(err => {
        const { reason, message, location } = err;
        if (reason === 'ValidationError') {
          return Promise.reject(
            new SubmissionError({
              [location]: message
            })
          );
        }
        return Promise.reject(
          new SubmissionError({
            _error: 'Error submitting form'
          })
        )
      });
  }
  render() {
    let successMessage;
    if (this.props.submitSucceeded) {
      successMessage = (
        <div className="message message-success">
          Form submitted Successfully!
        </div>
      );
    }

    let errorMessage;
    if (this.props.error) {
      errorMessage = (
        <div className="message message-error">
          {this.props.error}
        </div>
      )
    }
    return (
      <form onSubmit={this.props.handleSubmit(values => this.onSubmit(values))}>
        {successMessage}
        {errorMessage}
        <label htmlFor="trackingNumber">Tracking Number</label>
        <Field
          id="trackingNumber"
          name="trackingNumber"
          type="text"
          className="trackingNumber"
          component={Input}
          validate={[required, fiveLong, isNumber]}
        />
        <label htmlFor="issue">What is your deal?!</label>
        <Field name="issue" className="issue" component="select">
          <option value="not-delivered">My delivery hasn't arrived</option>
          <option value="wrong-item">The wrong item was delivered</option>
          <option value="missing-part">Missing Part</option>
          <option value="damaged">Damaged</option>
          <option value="other">Other</option>
        </Field>
        <label htmlFor="moreDetails">Provide more details</label>
        <Field
          component={Input}
          name="details"
          id="moreDetails"
          type="textArea"
          className="more-details"
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
