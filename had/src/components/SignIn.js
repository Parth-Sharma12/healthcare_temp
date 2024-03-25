import axios from 'axios';
import { useState } from 'react';
import React from 'react'
import './SignIn.css';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
export const SignIn = () => {
  const navigate = useNavigate();
  const [userLoginDetails, setUserLoginDetails] = useState({
    email: '',
    password: '',
  });
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://192.168.0.109:8082/api/user/authenticate', userLoginDetails);
      if (response.status === 200) {
        window.localStorage.setItem('authToken', response.data);
        navigate("/DoctorHome")
      }
    } catch (error) {
      console.error('Error posting data:', error.response.status);
      let errorStatus = error.response.status;
      console.log(errorStatus);
    }
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserLoginDetails({ ...userLoginDetails, [name]: value });
  };
  return (
    <div>
     
      
      <div className="card">
        <div className="card-body py-5 px-md-5">
          <form className='labels' onSubmit={handleSubmit} >
            <div className='Login'>
              <h2>Login</h2>
            </div>
            <div className="form-outline mb-4">
              <input type="email" id="form3Example3" name='email' value={userLoginDetails.email} onChange={handleChange} className="form-control" required />
              <label className="form-label" for="form3Example3">Email address/Username</label>
            </div>

            <div className="form-outline mb-4">
              <input type="password" name='password' value={userLoginDetails.password} onChange={handleChange} id="form3Example4" className="form-control" required />
              <label className="form-label" for="form3Example4">Password</label>
            </div>

            <div className="form-check d-flex justify-content-center mb-4">
              <input className="form-check-input me-2" type="checkbox" value="" id="form2Example33" checked />
              <label className="form-check-label" for="form2Example33">
                Accept all our terms and conditions
              </label>
            </div>
            <div className="log">
              <button type="submit" className="signup-button">Login</button>
            </div>
          </form>
          <div className="register_page">
            <p>Don't have an account? <Link to="/signup">Register</Link></p>
          </div>
        </div>
      </div>
    </div>
  );

}
