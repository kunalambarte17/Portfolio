import React, { useState } from 'react'
import './Form.css'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Form() {

  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    toast.success('Form Submitted', {
      position: "bottom-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
    const formData = new FormData(event.target);

    formData.append("access_key", "6ca269cb-48c9-47d7-9cb1-e6df8c043316");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div className='heading'>
      <h2>Let's Work <span>Together</span></h2>
      <div className='container contact-box'>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input type="text" 
          id="name" 
          name='name' 
          placeholder="Your Name" 
          required />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" 
          id="email" name='email' 
          placeholder="Your@email.com" 
          required />
        </div>
        <div className="form-group">
          <label htmlFor="budget">Budget</label>
          <select id="budget" 
          name='budget' 
          required>
            <option value="" disabled selected className='selected'>
              Select...
            </option>
            <option value="low">$500</option>
            <option value="medium">$1000</option>
            <option value="high">$1500</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name='message'
            placeholder="Message"
            rows="3"
            required
          ></textarea>
        </div>
        <button type="submit" className="submit-btn">
          Submit
        </button>
      </form>
      </div>
      <ToastContainer/>
    </div>
  )
}
export default Form

