	import React,{useState} from 'react';
	import './SignUp.css';
	import ErrorModal from '../modals/ErrorModal' ;
	import axios from 'axios'; 
	import { useNavigate } from 'react-router-dom';
	export const SignUp = () => {
		const navigate=useNavigate();
		const [error,setError] = useState(null);
		const [doctorDetails, setDoctorDetails] = useState({
			email: '',
			password: '',
			firstName: '',
			middleName: '',
			lastName: '',
			age: null,
			gender: '',
			mobileNo: '',
			licenceNo: '',
			description: '',
			consultationFee: null,
			experience: null,
			isSenior: false,
			isDisabled: false,
		});
		const handleChange = (e) => {
			const { name, value, type, checked } = e.target;
			const inputValue = type === 'checkbox' || type === 'radio' ? checked : value;
			setDoctorDetails({ ...doctorDetails, [name]: inputValue });
		};
		const handleSubmit = async (e) => {
			e.preventDefault();

			try {
				//eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJwYXJ0aC5zaGFybWFAaWlpdGIuYWMuaW4iLCJyb2xlIjpbIkRPQ1RPUiJdLCJpYXQiOjE3MDg5NTU2OTgsImV4cCI6MTcwODk5MTY5OH0.ZELzR-ptpxEHg8azQkvejdm38b7bVkdB8AZExRpliZI
				// Replace 'YOUR_API_ENDPOINT' with the actual endpoint where you want to send the POST request
				const response = await axios.post('https://192.168.0.109:8082/api/doctor/register', doctorDetails);
				console.log(response.data);
				console.log(response.status);
				if(response.status===200){
					window.localStorage.setItem('authToken', response.data.accessToken);
					navigate('/DoctorHome');
				}
			} catch (error) {
				if(error.response.status === 409){
					console.log(error.response.status);
					setError({title:'Error',message : ' Email already exist.'})

				}
				else{
					console.error('Error posting data:', error);
				}
			}
		};
		const closeModal=()=>{
			setError(null);
		}
		return (
			<div >
				<div class="container">
					<h1 class="well">Registration Form</h1>
					<div class="col-lg-12 well">
						<div class="row">
							<form onSubmit={handleSubmit}>
								<div class="col-sm-12 ">
									<div class="row name_field">
										<div class="col-sm-3 form-group">
											<label>First Name</label>
											<input type="text" placeholder="Enter First Name Here.." class="form-control" name="firstName" value={doctorDetails.firstName} onChange={handleChange} required />
										</div>
										<div class="col-sm-3 form-group">
											<label>Middle Name</label>
											<input type="text" placeholder="Enter Middle Name Here.." class="form-control" name="middleName" value={doctorDetails.middleName} onChange={handleChange} required />
										</div>
										<div class="col-sm-3 form-group">
											<label>Last Name</label>
											<input type="text" placeholder="Enter Last Name Here.." class="form-control" name="lastName" value={doctorDetails.lastName} onChange={handleChange} required />
										</div>
									</div>
									<div class="form-group desc">
										<label>Description</label>
										<textarea placeholder="Enter Description Here.." rows="3" class="form-control" name="description" value={doctorDetails.description} onChange={handleChange} required  ></textarea>
									</div>
									<div class="row Licence_field">
										<div class="col-sm-3 form-group">
											<label>Licence Number</label>
											<input type="text" placeholder="Enter Licence Number Here.." class="form-control" name="licenceNo" value={doctorDetails.licenceNo} onChange={handleChange} />
										</div>

										<div class="col-sm-3 form-group">
											<label>Email Address</label>
											<input type="text" placeholder="Enter Email Address Here.." class="form-control" name="email" value={doctorDetails.email} onChange={handleChange} required />
										</div>
									</div>
									<div class="row contact_field">
										<div class="col-sm-3 form-group">
											<label>Contact number</label>
											<input type="text" placeholder="Enter Contact Number Here.." class="form-control" name="mobileNo" value={doctorDetails.mobileNo} onChange={handleChange} required />
										</div>
										<div class="col-sm-3 form-group">
											<label>Password</label>
											<input type="text" placeholder="Enter Password Here.." class="form-control" name="password" value={doctorDetails.password} onChange={handleChange} required />
										</div>
										<div class="col-sm-3 form-group">
											<label>Gender</label>
											<select class="form-control" name="gender" value={doctorDetails.gender} onChange={handleChange}>
												<option value="" disabled selected>Choose gender</option>
												<option value="MALE">MALE</option>
												<option value="FEMALE">FEMALE</option>
												<option value="OTHER">OTHER</option>
											</select>
										</div>
									</div>
									<div class="row Age_field">
										<div class="col-sm-3 form-group ">
											<label>Age</label>
											<input type="text" placeholder="Enter Age Here.." class="form-control" name="age" value={doctorDetails.age} onChange={handleChange} required />
										</div>
										<div class="col-sm-3 form-group ">
											<label>Consultation fee</label>
											<input type="text" placeholder="Enter Consultation fee Here.." class="form-control" name="consultationFee" value={doctorDetails.consultationFee} onChange={handleChange} required />
										</div>
										<div class="col-sm-3 form-group ">
											<label>Experience</label>
											<input type="text" placeholder="Enter Experience Here.." class="form-control" name="experience" value={doctorDetails.experience} onChange={handleChange} required />
										</div>
									</div>
									<div className="checkbox">
										<label htmlFor="isSenior">
											<input
												type="checkbox"
												id="isSenior"
												name="isSenior"
												checked={doctorDetails.isSenior}
												onChange={handleChange}
											/>
											Applying as a senior doctor
										</label>
									</div>
									<button type="submit" class="btn btn-lg btn-info" >Submit</button>
									{error && <ErrorModal title={error.title} message={error.message} onClose={closeModal}/>}
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		)
	}
