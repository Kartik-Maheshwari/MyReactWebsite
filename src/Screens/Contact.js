import React from 'react'
import './Contact.css'

function Contact() {
  return (
    <div className='container'>
      <h3 className='text-center text-uppercase pt-3'>Contact Us</h3>
      <div className='mx-auto content-for-container shadow p-3 mb-5 bg-body rounded text-muted'>
        <form>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">Full Name</label>
            <input type="text" className="form-control" id="name" />
          </div>
          <div className="mb-3">
            <label htmlFor="phone" className="form-label">Contact Number</label>
            <input type="number" className="form-control" id="phone" />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email address</label>
            <input type="email" className="form-control" id="email" required />
            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
          </div>
          <div className="mb-3">
            <label htmlFor="timing" className="form-label">When we can reach you</label>
            <select className="form-select" id="timing">
              <option selected>Best Time to reach</option>
              <option value="M">Morning</option>
              <option value="A">Afternoon</option>
              <option value="E">Evening</option>
            </select>
          </div>
          <div className="mb-3">
            <label htmlFor="query" className="form-label">Enter your Query below</label>
            <textarea className='form-control' id="query" required></textarea>
          </div>
          <div className='d-grid'>
            <button type="submit" className="btn btn-primary">Submit</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Contact