import React, { useState,useEffect } from 'react'
import './Form.css'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import AOS from 'aos'
import 'aos/dist/aos.css'

function Form() {
    useEffect(()=> {
      AOS.init({duration: 1000, once: true});
    }, [])

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
    <div className='heading' data-aos="slide-up">
      <h2>Let's Work <span>Together</span></h2>
      <div className='container contact-box'>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name <b className='color'>*</b></label>
          <input type="text" 
          id="name" 
          name='name' 
          placeholder="Your Name" 
          required />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email <b className='color'>*</b></label>
          <input type="email" 
          id="email" name='email' 
          placeholder="Your@email.com" 
          required />
        </div>
        <div className="form-group">
          <label htmlFor="subject">Subject <b className='color'>*</b></label>
          <input type="text" 
          id="subject" name='subject' 
          placeholder="Enter Subject" 
          required />
        </div>
        <div className="form-group">
          <label htmlFor="message">More about Project <b className='color'>*</b></label>
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

