import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './component/navbar';
import Home from './component/home';
import About from './component/about';
import Articles from './component/articles';
import Addblog from './component/addblog';
import Editdata from './component/editdata';


function App() {

  return(

    <>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/About' element={<About/>}/>
      <Route path='/Addblog' element={<Addblog/>}/>
      <Route path={'/Article/:id'} element={<Articles/>}/>
      <Route path='/Editdata/:id' element={<Editdata/>}/>
    </Routes>

    </>
    
    )
  
}

export default App;
