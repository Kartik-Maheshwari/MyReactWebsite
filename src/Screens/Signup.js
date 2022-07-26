import React from 'react'
import axios from 'axios'
import { useState } from 'react'
import { API_BASE_URL } from '../config/constant'

function Signup() {

    const [fname, setFname] = useState("");
    const [lname, setLname] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [password, setPassword] = useState("");

    function alertFunction(message, type) {
        var wrapper = document.createElement('div')
        wrapper.innerHTML = '<div class="alert alert-' + type + ' alert-dismissible" role="alert">' + message + '<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button></div>'
        var alertPlaceholder = document.getElementById('alertmessage')
        alertPlaceholder.append(wrapper)
    }

    const signup = (event) => {
        event.preventDefault()
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }
        const reqData = {
            name: fname + ' ' + lname,
            email: email,
            phone: phone,
            password: password
        }
        axios.post(`${API_BASE_URL}/users`, reqData, config)
            .then((response) => {
                alertFunction('Registration Successfull, Please Proceed to Login', 'success')
                setEmail("");
                setFname("");
                setLname("");
                setPhone("");
                setPassword("");
            })
            .catch((err) => {
                alertFunction('Some Error Occurred', 'danger')
                console.log(err)
            })
    }
    return (
        <div className='container'>
            <h3 className='text-center text-uppercase pt-3'>Create An Account</h3>
            <div id="alertmessage"></div>
            <div className='mx-auto content-for-container shadow p-3 mb-5 bg-body rounded text-muted'>
                <form onSubmit={(event) => signup(event)}>
                    <div className="mb-3">
                        <label htmlFor="firstname" className="form-label">First Name</label>
                        <input value={fname} onChange={(e) => setFname(e.target.value)} type="text" className="form-control" id="firstname" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="lastname" className="form-label">Last Name</label>
                        <input value={lname} onChange={(e) => setLname(e.target.value)} type="text" className="form-control" id="lastname" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="phone" className="form-label">Contact Number</label>
                        <input value={phone} onChange={(e) => setPhone(e.target.value)} type="number" className="form-control" id="phone" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email address</label>
                        <input value={email}onChange={(e) => setEmail(e.target.value)} type="email" className="form-control" id="email" required />
                        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password" className="form-label">Password</label>
                        <input value={password} onChange={() => setPassword()} type="password" className="form-control" id="password" required />
                    </div>
                    <div className='d-grid'>
                        <button type="submit" className="btn btn-primary">Sign Up</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Signup