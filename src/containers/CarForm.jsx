import React from 'react';
import { Form, Field } from "react-final-form";

const CarForm = (props) => {
  const onSubmit = formValues => {
    props.onSubmit(formValues);
  }

  const validate = formValues => {
    const errors = {};

    if (!formValues.brand) {
      errors.brand = 'Required';
    }
    if (!formValues.model) {
      errors.model = 'Required';
    }
    if (!formValues.owner) {
      errors.owner = 'Required';
    }
    if (!formValues.plate) {
      errors.plate = 'Required';
    }

    return errors;
  }

  const renderError = ({ error, touched }) => {
    if (touched && error) {
      return (
        <div className="alert alert-danger" role="alert">
          <p className="text-muted my-0">{error}</p>
        </div>
      )
    }
  }

  const renderInput = ({ input,label, meta }) => {
    const className = `field ${meta.error && meta.touched ? "error" : ""}`;

    return (
      <div className={className} >
        <label htmlFor="" className="form-label">{label}</label>
        <input type="text" className="form-control" {...input} autoComplete="off" />
        {renderError(meta)}
      </div>
    )
  }

  return (
    <Form
      onSubmit={onSubmit}
      validate={validate}
      render={({ handleSubmit }) => (
        <form onSubmit={handleSubmit} className='p-4 my-2 shadow bg-light'>
            <Field name="brand" component={renderInput} label="Enter the brand" />
            <Field name="model" component={renderInput} label="Enter the model" />
            <Field name="owner" component={renderInput} label="Enter the owner" />
            <Field name="plate" component={renderInput} label="Enter the plate" />
            <button className="btn btn-success my-3">Add</button>
          </form>
      )}
    />
  );
};

export default CarForm;
