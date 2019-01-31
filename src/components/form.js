import React from 'react';
import { reduxForm, Field } from 'redux-form';
import './form.css'

export class Form extends React.Component {
  onSubmit(values) {
    console.log(values);
  }
  render() {
    return (
      <form>
        <label htmlFor='trackingNumber'>Tracking Number</label>
        <input id='trackingNumber' name='trackingNumber' type='number' className='trackingNumber'></input>
        <label htmlFor='issue'>What is your deal?!</label>
        <select id='issue' name='issue' className='issue'>
          <option value='Missed'>Missed Delivery</option>
          <option value='Stolen'>Stolen Delivery</option>
          <option value='Late'>Late Delivery</option>
        </select>
        <label htmlFor='moreDetails'>Provide more details</label>
        <input name='moreDetails' id='moreDetails' type='textArea' className='moreDetails'></input>
      </form>

    )
  }
}

export default Form;