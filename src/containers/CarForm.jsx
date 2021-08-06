import React from 'react';
import { Form, Field } from 'react-final-form';

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
    if (!formValues.registration) {
      errors.registration = 'Required';
    }

    return errors;
  }

  const renderError = (meta) => {
    console.log(meta)
  }

  const renderInput = ({ input,label, meta }) => {
    // const className = `field ${meta.error && meta.touched ? "error" : ""}`;

    return (
      <div >
        <label htmlFor="" className="form-label">{label}</label>
        <input type="text" className="form-control" {...input} autocomplete="off" />
        {renderError(meta)}
      </div>
    )
  }

  return (
    <Form
    onSubmit={onSubmit}
    validate={validate}
    render={({ handleSubmit }) => {
      <form onSubmit={handleSubmit} className='p-4 shadow-sm'>
          <Field name="brand" component={renderInput} label="Enter the brand" />
          <Field name="model" component={renderInput} label="Enter the model" />
          <Field name="owner" component={renderInput} label="Enter the owner" />
          <Field name="registration" component={renderInput} label="Enter the registration" />
          <button className="btn btn-success">Add</button>
        </form>
      }}
    >
    </Form>
  );
};

export default CarForm;
