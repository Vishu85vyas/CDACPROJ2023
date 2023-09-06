import React, { useState } from 'react';
import axios from 'axios';

const RegisterForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    mobileNumber: '',
    address: '',
    city: '',
    role: 'GUEST'  // Set a default user type if needed
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleRegister = async () => {
    try {
      const response = await axios.post('http://localhost:8080/user/signUp', formData);
      console.log('User registered:', response.data);
      // You can redirect the user or perform other actions after registration
    } catch (error) {
      console.error('Registration error:', error);
      // Handle error, show a message, etc.
    }
  };

  const loginhead = {
    marginRight: '200px',
    marginTop: '60px'
  };

  const buttonStyle = {
    backgroundColor: '#BA68C8', // Change this to the desired color
    marginLeft: '10px',    // Change this to the desired value for shifting rightwards
    padding: '10px 200px',    // Increase button size
    borderRadius: '5px'
  };

  return (
    <section>
      <div className="container-fluid h-custom">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-md-9 col-lg-6 col-xl-5">
            <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
              className="img-fluid" alt="register" />
          </div>
          <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
            <form>
              <h4 className="fw-normal mb-3 pb-3" style={loginhead}>Register</h4>
              <div className="form-outline mb-4">
                <label className="form-label" htmlFor="formName">Name</label>
                <input type="text" id="formName" className="form-control form-control-sm"
                  placeholder="John Doe" name="name" onChange={handleChange} />
              </div>

              <div className="form-outline mb-4">
                <label className="form-label" htmlFor="formEmail">Email</label>
                <input type="email" id="formEmail" className="form-control form-control-sm"
                  placeholder="john@example.com" name="email" onChange={handleChange} />
              </div>

              <div className="form-outline mb-3">
                <label className="form-label" htmlFor="formPassword">Password</label>
                <input type="password" id="formPassword" className="form-control form-control-sm"
                  placeholder="IAmRacoon@69" name="password" onChange={handleChange} />
              </div>

              <div className="form-outline mb-3">
                <label className="form-label" htmlFor="formConfirmPassword">Confirm Password</label>
                <input type="password" id="formConfirmPassword" className="form-control form-control-sm"
                  placeholder="IAmRacoon@69" name="confirmPassword" onChange={handleChange} />
              </div>

              <div className="form-outline mb-4">
                <label className="form-label" htmlFor="formMobile">Mobile Number</label>
                <input type="text" id="formMobile" className="form-control form-control-sm"
                  placeholder="9123849322" name="mobileNumber" onChange={handleChange} />
              </div>

              <div className="form-outline mb-4">
                <label className="form-label" htmlFor="formAddress">Address</label>
                <input type="text" id="formAddress" className="form-control form-control-sm"
                  placeholder="302, Anuda Chambers, Karad. 411023" name="address" onChange={handleChange} />
              </div>

              <div className="form-outline mb-4">
                <label className="form-label" htmlFor="formCity">City</label>
                <input type="text" id="formCity" className="form-control form-control-sm"
                  placeholder="Pune" name="city" onChange={handleChange} />
              </div>
              <div className="form-outline mb-4">
                <label className="form-label" htmlFor="formRole">Role</label>
                <select id="formRole" className="form-control" name="role" onChange={handleChange}>
                  <option value="GUEST">Guest</option>
                  <option value="OWNER">Hotel Owner</option>
                </select>
              </div>
              <div className="text-center text-lg-start mt-4 pt-2">
                <button type="button" className="btn btn-primary btn-lg"
                  style={buttonStyle} onClick={handleRegister}> Register </button>
              </div>

            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RegisterForm;
