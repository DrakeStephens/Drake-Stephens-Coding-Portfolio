import React, { useState } from 'react';
import { validateEmail } from '../utils/helpers';

function Contact() {
    const [formState, setFormState] = useState({ name:'', email: '', message: ''});
    const [errorMessage, setErrorMessage] = useState('');

    const { name, email, message } = formState;
    
    function handleChange(e) {
        setFormState({...formState, [e.target.name]: e.target.value })
        if (e.target.name === 'email') {
            const isValid = validateEmail(e.target.value);
            console.log(isValid);
            // isValid conditional statement
            if (!isValid) {
                setErrorMessage('Your email is invalid.');
              } else {
                setErrorMessage('');
              } 
        }  else {
            if (!e.target.value.length) {
              setErrorMessage(`${e.target.name} is required.`);
            } else {
              setErrorMessage('');
            }
          }
        console.log('errorMessage', errorMessage);
        if (!errorMessage) {
            setFormState({ ...formState, [e.target.name]: e.target.value });
          }
      }
        function handleSubmit(e) {
            e.preventDefault();
            console.log(formState);
        }
    return(
    <div className="bg-dark p-5">
    <div className="container bg-light p-5">
        <h1 className="bg-light p-5">Contact me</h1>
        <form onSubmit={handleSubmit}>
            <div className="form-Group">
                <label>Name:</label>
                <input className="form-control p-4" type="text" defaultValue={name} onBlur={handleChange} name="name" />
            </div>
            <div className="form-Group">
                <label htmlFor="email">Email address:</label>
                <input className="form-control p-4" type="email" defaultValue={email} onBlur={handleChange} name="email" />            
            </div>
            <div className="form-Group">
                <label htmlFor="message">Message:</label>
                <textarea className="form-control p-4" name="message" defaultValue={message} onBlur={handleChange} rows="5"  />
            </div>
            {errorMessage && (
                <div>
                    <p>{errorMessage}</p>
                </div>
            )}
            <button className="btn btn-info my-3">Submit</button>
        </form>
    </div>
    </div>
    );
}

export default Contact;