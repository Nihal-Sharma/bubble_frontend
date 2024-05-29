import logo from './logo.svg';
import './App.css';
import { BrowserRouter , Route , Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Navbar_Comp/Home';
import Services from './Navbar_Comp/Services';
import ContactUs from './Navbar_Comp/ContactUs';
import AboutUs from './Navbar_Comp/AboutUs';
import ChooseService from './Components/ChooseService';
import LoginForm from './Components/LoginForm';
import UsernameLogin from './Components/UsernameLogin';
import SignUp from './Components/SignUp';
import FinalBook from './Components/finalBook';
import Complain from './Navbar_Comp/Complain';
import Orders from './Navbar_Comp/Orders';

function App() {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='/' element ={<Home/>} />
        <Route path='/Services' element ={<Services/>} />
        <Route path='/ContactUs' element ={<ContactUs/>} />
        <Route path='/offers' element ={<AboutUs/>} />
        <Route path='/complain' element = {<Complain/>} />
        <Route path='/login' element = {<UsernameLogin/>}/>
        <Route path='/signup' element = {<SignUp/>}/>
        <Route path='/chooseservice' element = {<ChooseService/>}/>
        <Route path='/finalbook/:name' element = {<FinalBook/>}/>
        <Route path='/orders' element = {<Orders/>} />
      </Routes>
    </div>
  );
}

export default App;
