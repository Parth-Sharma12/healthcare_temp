// Import necessary React modules
import React from 'react';
import { useState } from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import { Request } from './Request.js';

import { useNavigate } from 'react-router-dom';

// CSS for styling
import '../CSS/AdminPanel.css';

// Create a functional component for the webpage
export const AdminPanel = () => {
  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };
  const linkStyle = {
    color: 'black',
    textDecoration: 'none',
  };
  const doctorData = [
    { id: 1, name: 'Smit Mehta' },
    { id: 2, name: 'Parth Sharma' },
    { id: 3, name: 'Vivek Maltare' },
    { id: 4, name: 'Andrew Garfield' },
    { id: 5, name: 'Paul Walker' },

  ];

  return (
    <div className="app-container">
      {/* Navbar */}
      <nav class="navbar navbar-expand-lg ">
        <img class="logo" src="images/logo.png" alt="Logo" />
        <a class="navbar-brand" href="#">Tranquil Minds</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">

            <li class="nav-item">
              <a class="nav-link" href="#"> <Link to="/Profile" style={linkStyle}>Profile</Link></a>
            </li>
            <span onClick={handleShowModal} style={{ cursor: 'pointer' }}>
              Requests
            </span>

            {/* Doctor Approval Modal */}
            <Request
              showModal={showModal}
              handleClose={handleCloseModal}
            />

          </ul>

        </div>
      </nav>
      <div className='main-content'>
        <div className="vertical-column">

        </div>
        <div className="table-container">
          <table className="doctor-table">
            <thead>
              <tr>
                <th>Doctor ID</th>
                <th>Doctor Name</th>

              </tr>
            </thead>
            <tbody>
              {doctorData.map((doctor) => (
                <tr key={doctor.id}>
                  <td>{doctor.id}</td>
                  <td>{doctor.name}</td>
                  <td>
                    <button className="view-details-btn">View Details</button>
                  </td>
                  <td>
                    <button className="disable-btn">Disable</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="picture">
            <img class="theme" src="images/adminpanel.png" alt="theme" />
          </div>
        </div>
      </div>

    </div>
  );
};
