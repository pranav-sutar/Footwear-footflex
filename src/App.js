
import './App.css';
import Header01 from './components/Header01';
import Main02 from './components/Main02';
import Footer03 from './components/Footer03';
import './style.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from './components/About';
import Contact from './components/Contact';
import Admin from './components/Admin';
import LoginPage from './components/LoginPage';
import AllProducts from './components/AllProducts';
import CreateApi from './components/CreateApi';
import AllCards from './components/AllCards';
import Responce from './components/Responce';
function App() {
  return (
    <>
    <BrowserRouter>
      <Header01 />
          <Routes>
            <Route path='/' element={<Main02 />} />
            <Route path='/about' element={<About />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/admin' element={<Admin />} />
            <Route path='/loginpage' element={<LoginPage />} />
            <Route path='/product' element={<AllProducts />} />
            <Route path='/createapi' element={ <CreateApi />} />
            <Route path='/createapi/:id' element={ <CreateApi />} />
            <Route path='/allcards' element={ <AllCards/> }/>
            <Route path='/responce' element={<Responce />}/>
          </Routes>
       
       <Footer03 />   
    </BrowserRouter>
    
    </>
  );
}

export default App;
