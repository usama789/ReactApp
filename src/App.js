import './App.css';
import Home from './Components/Home';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import About from './Components/Pages/About/About';
import Collection from './Components/Pages/Collection/Collection';
import Blog from './Components/Pages/Blog/Blog';
import { Contact } from './Components/Pages/Contact/Contact';
import KenBurns from './Components/Pages/Home/KenBurns';
import HalfSlider from './Components/Pages/Home/HalfSlider';
import HalfKenBurns from './Components/Pages/Home/HalfKenBurns';
import React from 'react';
function App() {
  
  return (
    <div>
    <React.StrictMode>
      <div>
      <Router>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/about' element={<About />}></Route>
          <Route path='/collection' element={<Collection />}></Route>
          <Route path='/blog' element={<Blog />}></Route>
          <Route path='/contact' element={<Contact />}></Route>
          <Route path='/kenburns' element={<KenBurns />}></Route>
          <Route path='/halfslider' element={<HalfSlider />}></Route>
          <Route path='/halfkenburns' element={<HalfKenBurns />}></Route>
          
        </Routes>
      </Router>
      </div>
      </React.StrictMode>
    </div>
    
  );
}

export default App;
