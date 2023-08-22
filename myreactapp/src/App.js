import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Dashboard from './components/Default1';
import Login from './components/Login';

function App() {
  return (
    <div className="App">
      <Navbar/>
      {/* <Dashboard/> */}
      <Login/>
      <Footer/>
    </div>
  );
}

export default App;
