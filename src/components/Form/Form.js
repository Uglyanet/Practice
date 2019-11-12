import React, { Component } from 'react';
import FormErrors from '../FormErrors/FormErrors';
import InputLabel from '../InputLabel/InputLabel';
import './Form.css';

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: '',
            lastName: '',
            phone: '',
            age: '',
            formErrors: { firstName: '', lastName: '', phone: '', age: '' },
            firstNameValid: false,
            lastNameValid: false,
            phoneValid: false,
            ageValid: false,
            formValid: false,
        }
    }

    handleUserInput = (e) => {
        const { name, value } = e.target;
        this.setState({ [name]: value }, () => { this.validateField(name, value) });
    }

    validateField(fieldName, value) {
        let { firstNameValid, lastNameValid, phoneValid, ageValid, formErrors } = this.state;

        switch (fieldName) {
            case 'firstName':
                firstNameValid = value.match(/^([A-Z]+)([a-z]{1,20})$/i);
                formErrors.firstName = firstNameValid ? '' : ' is invalid';
                break;
            case 'lastName':
                lastNameValid = value.match(/^([A-Z]+)([a-z]{1,20})$/i);
                formErrors.lastName = lastNameValid ? '' : ' is invalid';
                break;
            case 'phone':
                phoneValid = value.match(/^([0-9]{11,20})$/i);
                formErrors.phone = phoneValid ? '' : ' is invalid';
                break;
            case 'age':
                ageValid = value.match(/^([0-9]{1,3})$/i);
                formErrors.age = ageValid ? '' : ' is invalid';
                break;
            default:
                break;
        }
        this.setState({
            formErrors: formErrors,
            firstNameValid: firstNameValid,
            lastNameValid: lastNameValid,
            phoneValid: phoneValid,
            ageValid: ageValid,
        }, this.validateForm);
    }
    validateForm() {
        const { firstNameValid, lastNameValid, phoneValid, ageValid } = this.state;
        this.setState({
            formValid: firstNameValid &&
                lastNameValid &&
                phoneValid &&
                ageValid
        });
    }

    render() {
        const { handleAdd } = this.props;
        const { formValid, formErrors, firstName, lastName, phone, age } = this.state;
        return (
            <div className="form">
                <div className="error_panel">
                    <FormErrors formErrors={formErrors} />
                </div>
                <form className="valid_form">
                    <InputLabel label_text="First Name" name="firstName" value={firstName} handleUserInput={this.handleUserInput} />
                    <InputLabel label_text="Last Name" name="lastName" value={lastName} handleUserInput={this.handleUserInput} />
                    <InputLabel label_text="Phone" name="phone" value={phone} handleUserInput={this.handleUserInput} />
                    <InputLabel label_text="Age" name="age" value={age} handleUserInput={this.handleUserInput} />
                    <button
                        type="submit"
                        disabled={!formValid}
                        onClick={() => {
                            handleAdd({ 'firstName': firstName, 'lastName': lastName, 'phone': phone, 'age': age });
                        }}>Add to table</button>
                </form>
            </div >
        )
    }
}

export default Form;