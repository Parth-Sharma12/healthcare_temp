import React from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
export const DoctorHome = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    window.localStorage.removeItem('authToken');
    navigate('/');
  };
  const handleViewDoctor = async () => {
    try {
      const authToken = localStorage.getItem('authToken');
      if (!authToken) {
        console.error('Authentication token not found');
        return;
      }
      const response = await axios.get('https://192.168.0.109/api/doctor/doctorbyid/3', {
        headers: {
          Authorization: `Bearer ${authToken}`,
          
        },
      });
      console.log(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  return (
    <div>
        <h1>welcome to doctor home page</h1>
        <button onClick={handleLogout}>
            Logout
        </button>
        <button onClick={handleViewDoctor}>View Doctors</button>
    </div>
  )
}
export default DoctorHome;