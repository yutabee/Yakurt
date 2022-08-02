import './App.css';
import { Home } from './pages/Home';
import { Profile } from './pages/Profile';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className='App'>
    <Router>
        <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/profile' element={<Profile/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
