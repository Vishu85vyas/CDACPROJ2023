import axios from 'axios';
import React, { useState } from 'react'
import { useHistory, useLocation } from 'react-router-dom';

function BookingSummary(props) {
    const history = useHistory();
    const location = useLocation();
    const [bookingPrice, setBookingPrice] = useState(null);
    const handleChange = (e) => {
      const { name, value } = e.target;
      setBooking((prevBooking) => ({ ...prevBooking, [name]: value }));
    };
    const { checkIn, checkOut, price, type, roomid } = location.state;
    var total;
    var nightCount1;
    if (checkOut > checkIn) {
        const timeDifference = checkOut - checkIn;
        const nightCount = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));
        nightCount1 = nightCount;
        total = nightCount1 * price;
      } else {
        // Handle case where checkout is not greater than checkin
        nightCount1 = null;
      }
      const [booking, setBooking] = useState({
        checkIn: checkIn,
        checkOut: checkOut,
        roomType: type
      });
    const addSummary =  () => {
        try {
          const response = axios.post('http://localhost:8080/user/booking', booking);
          setBookingPrice(response.data);
        } catch (error) {
          console.error('Booking error:', error);
        }
      };
  return (
    <div className="container mt-5">
      <h1>Booking Summary</h1>
      <div className="row">
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title" >Check-in: {checkIn}</h5>
              <h5 className="card-title">Check-out: {checkOut}</h5>
              <h5 className="card-title">Price Per Night: {price}</h5>
              {/* <h5 className="card-title"> Number Of Days × Price Per Night: {nightCount1}</h5> */}
              <h5 className="card-title">Room Type: {type}</h5>
              <h5 className="card-title">Room ID: {roomid}</h5>
            </div>
          </div>
          <div className="my-5">
          <button className="btn btn-danger mx-5 me-5"  onClick={()=>{
                                history.push("/home");
                             }}>Cancel</button>
          <button className="btn btn-primary mx-5 me-5"  onClick={()=>{
                                history.push("/home")
                             }}>Update</button>
          <button className="btn btn-warning"  onClick ={()=>{
                                addSummary()
                             }}>Book Now</button>
          </div>
        </div>
        <div className="col-md-6">
          <img src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/42565760.jpg?k=0267f660f854e0124514da32155e334b22d95d9ff8e3eb99b364a5fe00da2760&o=&hp=1" alt="Room Image" className="img-fluid"/>
        </div>
      </div>
    </div>
  );
};

export default BookingSummary
