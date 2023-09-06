import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom';
const stylecard = {
    width: '400px',
    height: '500px',
    marginLeft: '40px',
    marginTop:'100px'
}



function HotelList() {
  const [roomData, setRooms] = useState([]);
  const history = useHistory();
  const checkIn = null;
  const checkOut = null;
  var price,type,roomid ;
  const city = "Jodhpur";
  const showBookingSummary = (room)=>{
        price = room.price
        type = room.type
        roomid = room.roomid
        history.push("/BookingSummary",{checkIn,checkOut,price,type,roomid});
  }
  const deleteHotel = async (id) => {
    try {
      const response = await axios.delete(`http://localhost:8080/room/${id}`);
      console.log('Room details deleted:', response.data);
    } catch (error) {
      console.error('Error deleting room details:', error);
    }
  }
  useEffect(() => {
    debugger;
    axios.get('http://localhost:8080/user/CheckAvailability/' + city)
      .then(response => setRooms(response.data))
      .catch(error => console.error('Error fetching room data:', error));
  }, []);
  return (
    <div className="container">
      <h1 className="my-4">Room List</h1>
      <div className="row">
        {roomData.map(room => (
          <div className="col-md-4 mb-4" key={room.roomid}>
            <div className="card">
              <img src='https://cf.bstatic.com/xdata/images/hotel/max1024x768/42565760.jpg?k=0267f660f854e0124514da32155e334b22d95d9ff8e3eb99b364a5fe00da2760&o=&hp=1' className="card-img-top" alt={`Room ${room.roomid}`} />
              <div className="card-body">
                <h5 className="card-title">Room ID: {room.roomid}</h5>
                <p className="card-text">
                 Status : {room.status === 0 ? 'Available' : 'Not Available'}
                </p>
                <p className="card-text">Type: {room.type}</p>
                <div className="d-flex justify-content-between">
                  <button className="btn btn-primary"   onClick={()=>{
                                 history.push("/register")
                             }}> Edit </button>
                  <button className="btn btn-primary"  onClick={()=>{
                                deleteHotel(room.roomid);
                             }}>Delete </button>
                  <p className="card-text">${room.price}  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HotelList