import logo from './logo.svg';
import './App.css';
import './css/registerpage.css';
import Form from './components/registerpage';
import LoginForm from './components/login';
import Home from './components/home';
import './css/home.css';
import { BrowserRouter as Router, Route, Switch, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      
      <Router>
  <Routes>
    <Route path="/" element={<Home/>} />
    <Route exact path="/login" element={<LoginForm/>} />
    <Route exact path="/register" element={<Form/>} />
    </Routes>
</Router>
    
    
    </div>
  );
}

export default App;
