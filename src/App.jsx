import './App.css'
import Carousel3Items from './components/carousel'
import ContactFooter from './components/contact-footer'
import { About } from './components/About'
import { People } from './components/People'
import { Gallery } from './components/Gallery'
import { Header, LeftLinks, RightLinks } from './components/Header'
import { Route, Routes } from 'react-router'
import { Home } from './components/Home'
import { Events } from './components/Events'


function App() {
  

  
  return (
    <div className="app">

      <Header/>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/home" element={<Home/>}/>
            <Route path="/people" element={<People/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/events" element={<Events/>}/>
            <Route path="/gallery" element={<Gallery/>}/>
        </Routes>

      {/* footer */}
      <ContactFooter/>
    </div>
  );
}

export default App;
