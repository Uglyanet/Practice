import React from 'react';

const InputLabel = ({ handleUserInput, value, name, label_text }) => {
    return (
        <div>
            <label>{label_text}</label>
            <input type="text" name={name} value={value} onChange={handleUserInput} />
        </div>
    );
}


export default InputLabel;