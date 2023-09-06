import React, { useState } from 'react'
import './Login.css'
import axios from 'axios';
import { useHistory } from 'react-router-dom';

function ResetPassword() {
const divStyle = {
    // padding- left: 2.5rem,
    // padding - right: 2.5rem
};
  const buttonStyle = {
    backgroundColor: '#BA68C8', // Change this to the desired color
    marginLeft: '10px',    // Change this to the desired value for shifting rightwards
    // fontSize: '1.2rem'
    padding: '10px 200px',    // Increase button size
    borderRadius: '5px'

  };

  const loginhead = {
    marginRight: '200px',
    marginTop:'60px'
  }
  const[confirmPassword , setConfirmPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [message, setMessage] = useState('');
  const history = useHistory();

  const handlePasswordSubmit = async (event) => {
    event.preventDefault();
    console.log("inside handle method");
    try {
      console.log(newPassword);
      const response = await axios.post('http://localhost:8080/user/storenewpass', { newPassword });
      setMessage(response.data);
      history.push("/")
    } catch (error) {
      setMessage('Password change failed.');
      console.log(error.data);
    }
  };
  return (
    // <section class="vh-100">
    <section>
     
      
     <div class="container-fluid h-custom">
    <div class="row d-flex justify-content-center align-items-center h-100">
      <div class="col-md-9 col-lg-6 col-xl-5">
        <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
          class="img-fluid" />
          </div>
      <div class="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
         

            <form>
              <h4 class="fw-normal mb-3 pb-3" style={loginhead}>Reset Password:</h4>
          {/* <!-- Email input --> */}
              <div class="form-outline mb-4">
               <label class="form-label" for="form3Example3">Password</label>
            <input type="password" id="form3Example4" class="form-control form-control-sm"
                  placeholder="IAmRacoon@1234" onChange={(e) => {setConfirmPassword(e.target.value)}}/>
          </div>

          {/* <!-- Password input --> */}
              <div class="form-outline mb-3">
              <label class="form-label" for="form3Example4">Confirm Password</label>
            <input type="password" id="form3Example5" class="form-control form-control-sm"
                  placeholder="IAmRacoon@1234" onChange={(e) => {setNewPassword(e.target.value)}}/>
            
          </div>

          <div class="d-flex justify-content-between align-items-center">
            {/* <!-- Checkbox --> */}
            <div class="form-check mb-0">
              
            </div>
            <a href="#!" class="text-body">Already have an Account?</a>
          </div>

          <div class="text-center text-lg-start mt-4 pt-2 mb-5">
                <button type="button" class="btn btn-primary btn-lg"
                  style={buttonStyle} onClick = {handlePasswordSubmit}> Reset Password </button>    
          </div>
        </form>
      </div>
    </div>
  </div>
</section>
  )
}

export default ResetPassword