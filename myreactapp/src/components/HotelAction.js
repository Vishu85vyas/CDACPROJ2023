import React from 'react'
import './Login.css'
import './verticalLine.css'
import {
  BrowserRouter as Router,
  useHistory,
} from "react-router-dom";

function Action() {

  const history = useHistory(); // Initialize useHistory

  const handleAddHotel = async (event) => {
    event.preventDefault();
    history.push('/addHotel'); // Replace with the URL of the page you want to navigate to
  };
  
  const handleViewHotel = async (event) => {
    event.preventDefault();
    history.push('/viewHotel'); // Replace with the URL of the page you want to navigate to
  };


  const buttonStyle = {
    backgroundColor: '#BA68C8', // Change this to the desired color
    marginLeft: '10px',    // Change this to the desired value for shifting rightwards
    // fontSize: '1.2rem'
    padding: '20px 200px',    // Increase button size
    borderRadius: '5px',
    marginBottom:'20px'

  };

  const loginhead = {
    marginRight: '350px',
    marginTop:'20px'
  }

  return (
    <section style={{display:'fl'}}>
    <div class="container-fluid h-custom">
    <div class="row d-flex justify-content-center align-items-center h-100">
      <div class="col-md-9 col-lg-6 col-xl-5">
        <img src="https://images.unsplash.com/photo-1631049552057-403cdb8f0658?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGhvdGVsJTIwcm9vbXxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80"
          class="img-fluid" />
          </div>
        
      
      
      <div class="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
            {/* //class="form-control form-control-lg" */}
            <div>
              <div class="vertical-dotted-line"></div>
              </div>
            <form>
              <h4 class="fw-normal mb-3 pb-2" style={loginhead}> Choose Action :</h4>
            
              <div class="text-center text-lg-start mt-4 pt-2">
                <button type="button" class="btn btn-primary btn-lg"
                  style={buttonStyle} onClick={handleAddHotel}> Add Hotel</button>
                
              </div>

              <div class="text-center text-lg-start mt-4 pt-2">
                <button type="button" class="btn btn-primary btn-lg" onClick={handleViewHotel}
                  style={{ ...buttonStyle, backgroundColor: '#9C27B0',marginBottom:'100px' }}> View Hotel </button>
                
              </div>

              

           </form>
      </div>
    </div>
  </div>
</section>
  )
}

export default Action