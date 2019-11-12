import React from 'react';

const FormErrors = ({ formErrors }) =>
  <div className='formErrors'>
    {Object.keys(formErrors).map((fieldName, i) => 
      formErrors[fieldName].length > 0 ? <p key={i}>{fieldName} {formErrors[fieldName]}</p> : ''
    )}
  </div>

export default FormErrors;