import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Dashboard from './components/Default1';
import Login from './components/Login';
import Home from './components/Home';
import Default1 from './components/Default1';
import Register from './components/Register';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import GetRoomDetails from './components/GetRoomDetails';
import HotelList from './components/HotelList';
import BookingSummary from './components/BookingSummary';
import ForgotPassword from './components/ForgotPassword';
import ResetPassword from './components/ResetPassword';
import Action from './components/HotelAction';
import RegisterHotel from './components/RegisterHotel';

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Login}></Route>
        <Route exact path="/home" component={Home}></Route>
        <Route exact path="/Rooms" component={GetRoomDetails}></Route>
        <Route exact path="/register" component={Register}></Route>
        <Route exact path="/BookingSummary" component={BookingSummary}></Route>
        <Route exact path="/forgotpassword" component={ForgotPassword}></Route>
        <Route exact path="/ResetPassword" component={ResetPassword}></Route>
        <Route exact path="/action" component={Action}></Route>
        <Route exact path="/addHotel" component={RegisterHotel}></Route>
        <Route exact path="/viewHotel" component={HotelList}></Route>
      </Switch>
      <Footer />
    </>

  );
}

export default App;
