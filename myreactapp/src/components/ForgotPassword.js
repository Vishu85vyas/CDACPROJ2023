import axios from 'axios';
import React, { useState } from 'react'
import { useHistory } from 'react-router-dom';

function ForgotPassword() {
    const loginhead = {
        marginRight: '200px',
        marginTop: '60px'
    }
    const buttonStyle = {
        backgroundColor: '#BA68C8', // Change this to the desired color
        marginLeft: '10px',    // Change this to the desired value for shifting rightwards
        // fontSize: '1.2rem'
        padding: '10px 200px',    // Increase button size
        borderRadius: '5px',
        marginBottom: '10px'

    };
    const [email, setEmail] = useState('');
    const [otp,setOTP] = useState('');
    const [message, setMessage] = useState('');
    const history = useHistory();

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await axios.post('http://localhost:8080/user/getOtpForForgotPass', { email });
            setMessage(response.data);
        } catch (error) {
            setMessage('Error sending OTP. Please try again.');
        }
    };
    const enterOtp = async (event) =>{
        event.preventDefault();
        try {
            //debugger;
            const response = await axios.post('http://localhost:8080/user/verify-otpforforgot', { otp })
            .then(response => {
                console.log(response.data);
                history.push("/ResetPassword")
            });
        }catch (error)
        {
            setMessage("Invalid OTP");
        }
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


                        <form>
                            <h4 class="fw-normal mb-3 pb-3" style={loginhead}>Forgot Pasword</h4>
                            {/* <!-- Email input --> */}
                            <div class="form-outline mb-4">
                                <label class="form-label" for="form3Example3">Email</label>
                                <input type="email" id="form3Example3" class="form-control form-control-sm"
                                    placeholder="sanketracoon@gmail.com" onChange={(e) => setEmail(e.target.value)} />
                            </div>

                            <div class="text-center text-lg-start mt-4 pt-2">
                                <button type="button" class="btn btn-primary btn-lg"
                                    style={buttonStyle} onClick={handleSubmit}> Send OTP </button>
                            </div>

                            {/* <!-- Password input --> */}
                            <div class="form-outline mb-3">
                                <label class="form-label" for="form3Example4">Enter OTP</label>
                                <input type="password" id="form3Example4" class="form-control form-control-sm"
                                    placeholder="IAmRacoon@69" onChange={(e) => setOTP(e.target.value)}/>

                            </div>

                            <div class="text-center text-lg-start mt-4 pt-2">
                                <button type="button" class="btn btn-primary btn-lg"
                                    style={buttonStyle} onClick={enterOtp}> Verify OTP </button>
                            </div>

                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ForgotPassword
