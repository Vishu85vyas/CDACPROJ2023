import React from 'react'
import axios from 'axios';
import './Login.css'
import { useState } from 'react';
import {
  BrowserRouter as Router,
  useHistory
} from "react-router-dom";

function RegisterHotel() {

  const history = useHistory();
  
  const [hotelData, setHotelData] = useState({
    name: '',
    email: '',
    address: ''
    
  });


  const [roomData, setRoomData] = useState({
    type: '',
    status:'',
      number: '',
      price: ''
    });

  const handleSubmit = async (event) =>
  {
    event.preventDefault();

       const hotelRegistrationData = {
          name: hotelData.name,
          email: hotelData.email,
          address: hotelData.address,
         
      // ... include other fields you want to send
    };
    try {
      const response = await axios.post('http://localhost:8080/hotel', hotelRegistrationData);
        console.log('Response from server:', response.data);
        history.push('/action');
      // Perform any other actions after successful registration
    } catch (error) {
      console.error('Error sending data:', error);
      // Handle errors if the request fails
      history.push('/action');
    }
  };


    
   
  const buttonStyle = {
    backgroundColor: '#BA68C8', // Change this to the desired color
    marginLeft: '10px',    // Change this to the desired value for shifting rightwards
    // fontSize: '1.2rem'
    padding: '10px 200px',    // Increase button size
    borderRadius: '5px',
    marginBottom:'50px'

  };

  const loginhead = {
    marginRight: '350px',
    marginTop:'20px'
  }

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
          {/* //class="form-control form-control-lg" */}

            <form>
              <h4 class="fw-normal mb-3 pb-3" style={loginhead}>Register Hotel</h4>
              <div class="form-outline mb-4">
               <label class="form-label" for="form3Example3">Hotel Name</label>
            <input type="text" id="form3Example3"  className="form-control form-control-sm"
              placeholder="sanketracoon@gmail.com" />
          </div>
          {/* <!-- Email input --> */}
              <div class="form-outline mb-4">
               <label class="form-label" for="form3Example3">Email</label>
            <input type="email" id="form3Example3" class="form-control form-control-sm"
              placeholder="sanketracoon@gmail.com" />
          </div>

              
              <div class="form-outline mb-4">
               <label class="form-label" for="form3Example3">Address</label>
            <input type="text" id="form3Example3" class="form-control form-control-sm"
              placeholder="302,Anuda Chambers,Karad.411023" />
              </div>

                 <table class="table">
                  <thead>
                    <tr>
                      <th scope="col">Room:</th>
                      <th scope="col">No of Rooms</th>
                      <th scope="col">Price</th>
                      
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">DELUXE</th>
                      <td><input type="text" id="deluxe_no" class="form-control" style={{width:'100px',marginLeft:'50px'}}/></td>
                      <td><input type="text" id="deluxe_price" class="form-control" style={{width:'100px',marginLeft:'50px'}}/></td>
                      
                    </tr>
                    <tr>
                      <th scope="row">AC</th>
                      <td><input type="text" id="ac_no" class="form-control" style={{width:'100px',marginLeft:'50px'}}/></td>
                      <td><input type="text" id="ac_price" class="form-control" style={{width:'100px',marginLeft:'50px'}}/></td>
                      
                    </tr>
                    <tr>
                      <th scope="row">NON-AC</th>
                      <td><input type="text" id="nonac_no" class="form-control" style={{width:'100px',marginLeft:'50px'}}/></td>
                      <td><input type="text" id="nonac_price" class="form-control" style={{width:'100px',marginLeft:'50px'}}/></td>
                      
                    </tr>
                  </tbody>
                </table>
          <div class="text-center text-lg-start mt-4 pt-2">
                <button type="button" class="btn btn-primary btn-lg"
                  style={buttonStyle} onClick={handleSubmit}>  Register </button>
                
          </div>
        </form>
      </div>
    </div>
  </div>
</section>
  )
}

export default RegisterHotel