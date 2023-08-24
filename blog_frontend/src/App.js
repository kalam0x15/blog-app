import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './component/navbar';
import Home from './component/home';
import About from './component/about';
import Articles from './component/articles';
import Addblog from './component/addblog';


function App() {

  return(

    <>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/About' element={<About/>}/>
      <Route path='/Addblog' element={<Addblog/>}/>
      <Route path={'/Article/:id'} element={<Articles/>}/>
    </Routes>

    </>
    
    )
  
}

export default App;
