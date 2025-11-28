import React from 'react'
import './styles/contact.css'
const Contact = () => {
  return (
    <section className='contact' id='contact'>
      <div className='contact-overlay'>
        <h2 className=''>Contact <span>Fit World</span></h2>
        <p>Have Questions or want to join ? Let's get in touch!</p>
        <form className='contact-form'>
          <div className='input-group'>
            <input type="text" placeholder='Your name' required />
            <input type="email" placeholder='Enter email address' required />
          </div>
          <textarea placeholder='Your message' required ></textarea>
          <button type='submit' className='contact-btn'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact