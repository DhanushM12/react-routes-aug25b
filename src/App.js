import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Home';
import Login from './Login';
import Notfound from './Notfound';

function App() {
  return (
    <div className="App">
      <Routes>
      <Route path='*' element={<Notfound />}/>
        <Route path='/' element={<Home />}/>
        <Route path='/login' element={<Login />} />
        
      </Routes>
    </div>
  );
}

export default App;
