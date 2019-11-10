import React, { Component } from 'react';
import FormErrors from '../FormErrors/FormErrors';
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
        const name = e.target.name;
        const value = e.target.value;
        this.setState({ [name]: value }, () => { this.validateField(name, value) });
    }

    validateField(fieldName, value) {
        let fieldValidationErrors = this.state.formErrors;
        let firstNameValid = this.state.firstNameValid;
        let lastNameValid = this.state.lastNameValid;
        let phoneValid = this.state.phoneValid;
        let ageValid = this.state.ageValid;

        switch (fieldName) {
            case 'firstName':
                firstNameValid = value.match(/^([A-Z]+)([a-z]{1,20})$/i);
                fieldValidationErrors.firstName = firstNameValid ? '' : ' is invalid';
                break;
            case 'lastName':
                lastNameValid = value.match(/^([A-Z]+)([a-z]{1,20})$/i);
                fieldValidationErrors.lastName = lastNameValid ? '' : ' is invalid';
                break;
            case 'phone':
                phoneValid = value.match(/^([0-9]{11,20})$/i);
                fieldValidationErrors.phone = phoneValid ? '' : ' is invalid';
                break;
            case 'age':
                ageValid = value.match(/^([0-9]{1,3})$/i);
                fieldValidationErrors.age = ageValid ? '' : ' is invalid';
                break;
            default:
                break;
        }
        this.setState({
            formErrors: fieldValidationErrors,
            firstNameValid: firstNameValid,
            lastNameValid: lastNameValid,
            phoneValid: phoneValid,
            ageValid: ageValid,
        }, this.validateForm);
    }
    validateForm() {
        this.setState({
            formValid: this.state.firstNameValid &&
                this.state.lastNameValid &&
                this.state.phoneValid &&
                this.state.ageValid
        });
    }

    render() {
        const { handleAdd } = this.props;
        return (
            <div className="form">
                <div className="error_panel">
                    <FormErrors formErrors={this.state.formErrors} />
                </div>
                <form className="valid_form" id="myForm">
                    <label>First Name</label>
                    <input type="text" name="firstName" value={this.state.firstName} onChange={this.handleUserInput} />
                    <label>Last Name</label>
                    <input type="text" name="lastName" value={this.state.lastName} onChange={this.handleUserInput} />
                    <label>Phone</label>
                    <input type="text" name="phone" value={this.state.phone} onChange={this.handleUserInput} />
                    <label>Age</label>
                    <input type="text" name="age" value={this.state.age} onChange={this.handleUserInput} />
                    <button
                        type="submit"
                        disabled={!this.state.formValid}
                        onClick={(e) => {
                            e.preventDefault();
                            handleAdd({
                                'firstName': this.state.firstName,
                                'lastName': this.state.lastName,
                                'phone': this.state.phone,
                                'age': this.state.age
                            })
                        }}>Add to table</button>
                </form>
            </div >
        )
    }
}

export default Form;