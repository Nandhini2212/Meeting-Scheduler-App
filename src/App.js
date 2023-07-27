import logo from './logo.svg';
import './App.css';
import './css/scheduler.css';
import './css/registerpage.css';
import './css/muicalender.css';
import Form from './components/registerpage';
import LoginForm from './components/login';
import Home from './components/home';
import './css/detail.css';
import './css/home.css';
import Url from './components/url';

import AppointmentDetails from './components/successmsg';
import { BrowserRouter as Router, Route, Switch, Routes } from 'react-router-dom';
import Scheduletimes from './components/scheduletime';
import ServiceMenu from './components/details';
import AboutUs from './components/aboutus';
import Userpage from './components/user';
import './css/user.css';
import './css/url.css';
import './css/successmsg.css';
import './css/feedback.css';
import MuiCalender from './components/muicalender';
import Userinfo from './components/userinfo';
import FeedbackForm from './components/feedback';
function App() {
  return (
    <div className="App">
      
      <Router>
  <Routes>
    <Route path="/" element={<Home/>} />
    <Route path='/userinfo/:sname' element={<Userinfo/> }/>
    <Route path="/details" element={<ServiceMenu/>}/>
    <Route path='/about' element={<AboutUs/>}/>
    <Route path='/user' element={<Userpage/>}/>
    <Route path='/schedule' element={<Scheduletimes />}/>
    <Route exact path="/login" element={<LoginForm/>} />
    <Route exact path="/register" element={<Form/>} />
    <Route exact path="/calender" element={<MuiCalender/>} />
    <Route exact path="/url" element={<Url/>} />
    <Route exact path="/feedback" element={<FeedbackForm/>} />
    <Route path="/appointment-details/:date/:time" element={<AppointmentDetails/>} />

    </Routes>
</Router>
    
    
    </div>
  );
}

export default App;
