import React, { Component } from 'react';
import emailjs from 'emailjs-com';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import styled from 'styled-components'

const NameInput = styled.input`
  flex-grow:1;
  @media (max-width: 768px) {
    flex: 1 33%;
  }
`;
const EmailInput = styled.input`
  flex-grow:1;
  @media (max-width: 768px) {
    flex: 1 33%;
  }
`;
const SubjectInput = styled.input`
  flex: 1 100%;
  @media (max-width: 768px) {
    flex: 1 33%;
  }
`;
const InputDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
const FormDiv = styled.div`
  display:flex;
  justify-content:center;
  @media (max-width: 768px) {
  }
`;
const SubmitButton = styled.button`
  display:block;
  margin:auto;
  @media (max-width: 768px) {
  }
`;
const TextArea = styled.textarea`
  width: 100%;
  margin-bottom: 5px;
  height: 300px;
  @media (max-width: 768px) {
    width: 100%;
  }
`;
const Form = styled.form`
  box-shadow: 10px 10px 10px #333;
  background-color: #f1f1f1;
  padding: 10px;
  border-radius: 10px;
`
// Email validation
const emailRegex = RegExp(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/);

// Form validation
const formValid = ({ formErrors, ...rest }) => {
  let valid = true;

  // Validate form errors being empty
  Object.values(formErrors).forEach((val) => {
    val.length > 0 && (valid = false);
  });

  // Validate the form was filled out
  Object.values(rest).forEach((val) => {
    val === '' && (valid = false);
  });

  return valid;
};

class ContactForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      subject: '',
      message: '',
      formErrors: {
        name: '',
        email: '',
        subject: '',
        message: '',
      },
    };
  }

  toastifySuccess() {
    toast.success('Form sent!', {
      position: 'bottom-right',
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: false,
      className: 'submit-feedback success',
    });
  }

  toastifyFail() {
    toast.error('Form failed to send!', {
      position: 'bottom-right',
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: false,
      className: 'submit-feedback fail',
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();

    if (formValid(this.state)) {
      // Handle form validation success
      const { name, email, subject, message } = this.state;

      // Set template params
      let templateParams = {
        name: name,
        email: email,
        subject: subject,
        message: message,
      };

      emailjs.send('service_3tpy3sw', 'template_xwi18ll', templateParams, 'user_hLj5c2BmV6zODQQTutlQs');

      console.log(`
        --SUBMITTING--
        Name: ${name}
        Email: ${email}
        Subject: ${subject}
        Message: ${message}
      `);

      this.toastifySuccess();
      this.resetForm();
    } else {
      // Handle form validation failure
      console.error('FORM INVALID - DISPLAY ERROR MESSAGE');
      this.toastifyFail();
    }
  };

  // Function to reset form
  resetForm() {
    this.setState({
      name: '',
      email: '',
      subject: '',
      message: '',
    });
  }

  handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    let formErrors = { ...this.state.formErrors };

    switch (name) {
      case 'name':
        formErrors.name = value.length < 1 ? 'Please enter your name.' : '';
        break;
      case 'email':
        formErrors.email = emailRegex.test(value) ? '' : 'Please enter a valid email address.';
        break;
      case 'subject':
        formErrors.subject = value.length < 1 ? 'Please enter a subject.' : '';
        break;
      case 'message':
        formErrors.message = value.length < 1 ? 'Please enter a message' : '';
        break;
      default:
        break;
    }
    this.setState({ formErrors, [name]: value });
  };

  render() {
    const { formErrors } = this.state;

    return (
      <FormDiv>
        <Form onSubmit={this.handleSubmit} noValidate>
          <InputDiv>
            <NameInput
              type='text'
              name='name'
              value={this.state.name}
              className={`form-control formInput ${formErrors.name.length > 0 ? 'error' : null}`}
              onChange={this.handleChange}
              placeholder='Name'
              noValidate
            ></NameInput>
            {formErrors.name.length > 0 && (
              <span className='errorMessage'>{formErrors.name}</span>
            )}
            <EmailInput
              type='email'
              name='email'
              value={this.state.email}
              className={`form-control formInput ${formErrors.email.length > 0 ? 'error' : null}`}
              onChange={this.handleChange}
              placeholder='Email'
              noValidate
            ></EmailInput>
            {formErrors.email.length > 0 && (
              <span className='errorMessage'>{formErrors.email}</span>
            )}

            <SubjectInput
              type='subject'
              name='subject'
              value={this.state.subject}
              className={`form-control formInput ${formErrors.subject.length > 0 ? 'error' : null
                }`}
              onChange={this.handleChange}
              placeholder='Subject'
              noValidate
            ></SubjectInput>
            {formErrors.subject.length > 0 && (
              <span className='errorMessage'>{formErrors.subject}</span>
            )}
          </InputDiv>
          <TextArea
            name='message'
            value={this.state.message}
            className={`form-control formInput ${formErrors.message.length > 0 ? 'error' : null
              }`}
            onChange={this.handleChange}
            placeholder='Message'
            noValidate
          ></TextArea>
          {formErrors.message.length > 0 && (
            <span className='errorMessage'>{formErrors.message}</span>
          )}
          <SubmitButton className='submit-btn' type='submit'>
            Submit
          </SubmitButton>
        </Form>
        <ToastContainer />
      </FormDiv>
    );
  }
}

export default ContactForm;