
import { BrowserRouter, Routes,
  Route } from 'react-router-dom';
import './App.css';
import Aboutus from './Page/Aboutus';
import Coffee from './Page/Coffee';

import Landingpage from './Page/Landingpage';
import Nav from './Page/Nav';
import Navbar from './Page/Navbar/Navbar';


import Thridpart from './Page/Thridpart';
//import router tags 


function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
      <Navbar/>
    
      <Routes>
        <Route path='/'element={<Landingpage/>}></Route>
        <Route path='/aboutus'element={<Aboutus/>}></Route>
        <Route path='/feature'element={<Thridpart/>}></Route>
        <Route path='/coffees'element={<Coffee/>}></Route>
        
      </Routes>
      </BrowserRouter>
      
    
    </div>
  );
}

export default App;
