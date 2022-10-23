import './App.css';
import Header from './components/Header';
import { Route, Routes, } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Login from './components/Login';
import Registration from './components/Registration';
import Logout from './components/Logout';
import Notes from './components/Notes';
function App() {
  return (
    <>
      <Header />
      <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/note' element={<Notes />} />
      <Route path='/login' element={<Login />} />
      <Route path='/register' element={<Registration />} />
      <Route path='/logout' element={<Logout />} />
    </Routes>
    </>
  );
}

export default App;
