
import About from './About';
import './App.css';
import Contact from './Contact';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { useState, createContext } from 'react';
import Home from './Home';

export const AppContext = createContext();

function App() {
  const [username, setUsername] = useState("iTsir");
  return (
    <div className="App">
      <AppContext.Provider value={{ username, setUsername }}>
        <Router>
          <Link to={'/'}>Home</Link> |
          <Link to={'/About'}>About</Link> |
          <Link to={'/Contact'}>Contact</Link>
          <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/About' element={<About />}></Route>
            <Route path='/Contact' element={<Contact />}></Route>
          </Routes>
        </Router>
      </AppContext.Provider>


    </div>
  );
}

export default App;
