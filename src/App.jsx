import './App.css'
import Carousel3Items from './components/carousel'
import ContactFooter from './components/contact-footer'
import { About } from './components/About'
import { People } from './components/People'
import { Gallery } from './components/Gallery'
import { Events } from './components/Events'
import { useState } from 'react'

const view = window.innerHeight<window.innerWidth?"web":"mobile";

function App() {
  const carouselItems = [
    {
      image: "/DeekshaBhoomi.jpg",
      title: "Daily App - Task Management",
    },
    {
      image: "/ChaityaBhoomi.jpg",
      title: "Daily App - User Interface",
    },
    {
      image: "/chaityabhomigate.webp",
      title: "Daily App - Orange Theme",
    },
    {
      image: "/Pagoda_temple.jpg",
      title: "Daily App - Dark Mode",
    },
    {
      image: "/25BMBHIMAKOREGAON.jpg",
      title: "Daily App - Nature Theme",
    },
    {
      image: "/home_img.jpg",
      title: "Daily App - Notifications",
    },
  ]

  const [menuOpen,setMenuOpen] = useState(false);
  const [linksOpen,setLinkOpen] = useState({left:false,right:false});

  return (
    <div className="app">
      {/* Top blue header */}
      <header id='home' className="top-header">
        <div className="logo-box">
          <img src="/logo_left.jpg" alt="" />
        </div>
        <div className="title-box">
          <div className="subtitle">"बहुजन हिताय, बहुजन सुखाय"</div>
          <h1>BUDDHISHT NETWORK</h1>
          <h2>SAMAJIK AANI SHAIKSHANIK SANSTHA</h2>
        </div>
        <div className="right-symbol">
          <img src="/right-logo.png" alt="" />
        </div>
      </header>

      {/* Yellow quote bar */}
      <div className="quote-bar">
        <div className="marquee">
        <div className="marquee__track">
          <div className="marquee__item">* “बुद्धं शरणं गच्छामि  ।। धम्मं शरणं गच्छामि  ।। संघं शरणं गच्छामि” *</div>
          <div className="marquee__item">* “प्रज्ञा, शील, करुणा” *</div>
          <div className="marquee__item">* “अत्त दीप भव” *</div>
          <div className="marquee__item">“भवतु सब्ब मंगलम”</div>
          
          <div className="marquee__track_duplicate"> {/* create duplicate of the above element to shadow it behind for scrolling effect  */}
            <div className="marquee__item">* “बुद्धं शरणं गच्छामि  ।। धम्मं शरणं गच्छामि  ।। संघं शरणं गच्छामि” *</div>
            <div className="marquee__item">* “प्रज्ञा, शील, करुणा” *</div>
            <div className="marquee__item">* “अत्त दीप भव” *</div>
            <div className="marquee__item">“भवतु सब्ब मंगलम”</div>
          </div>
        </div>
      </div>
      </div>

      {/* Navigation menu */}
      <div className="navigation">
        <nav className={`nav-bar ${view} ${menuOpen?'open':'closed'}`}>
            <a href='#home'>Home</a>
            <a href='#about'>About Us</a>
            <a href='#people'>People</a>
            <a href='#events'>Events</a>
            <a href='#gallery'>Gallery</a>
            <a href='#contact'>Contact Us</a>
        </nav>
        {view=="mobile"?<button className={`hamburger-menu ${menuOpen?'open':'closed'}`} onClick={()=>setMenuOpen(!menuOpen)}>
          <span></span><span></span><span></span>
        </button>:null}
      </div>

      {/* Main content area */}
      <main className="main-layout">
        {/* Left links */}
          <div>
            <div className="side-header" onClick={()=>setLinkOpen({left:!linksOpen.left,right:linksOpen.right})}>Link</div>
            <aside className={`side-box ${linksOpen.left || view=="web"?'open':'closed'}`}>
                <ul>
                  <li><a href="https://www.deekshabhoomi.org/" target='_blank'>DeekshaBhoomi, Nagpur</a></li>
                  <li><a href="https://bodhgayatemple.com/" target='_blank'>Bodh Gaya, Bihar</a></li>                
                </ul>
            </aside>
          </div>

          {/* Right links */}
        {view=="mobile"?<div>
          <div className="side-header" onClick={()=>setLinkOpen({left:linksOpen.left,right:!linksOpen.right})}>Link</div>
          <aside className={`side-box ${linksOpen.right || view=="web"?'open':'closed'}`}>
            <ul>
              <li><a href="https://asi.nic.in/pages/WorldHeritageBuddhistMonumentsatSanchi" target='_blank'>Sachi Stupa, MP</a></li>
              <li><a href="https://www.globalpagoda.org/" target='_blank'>Pagoda Temple, Mumbai </a></li>
              {/* <li><a href="https://kushinagar.nic.in/tourist-place/mahanirvana-stupa/" target='_blank'>Kushinagar </a></li> */}
            </ul>
          </aside>
        </div>:null}

        {/* Center photo box */}
        <section className="photo-box">
          <Carousel3Items items={carouselItems} autoSlide={true} slideInterval={4000} />
        </section>

        {/* Right links */}
        <div style={{display:view=="web"?"block":"none"}}>
          <div className="side-header" onClick={()=>setLinkOpen({left:linksOpen.left,right:!linksOpen.right})}>Link</div>
          <aside className={`side-box ${linksOpen.right || view=="web"?'open':'closed'}`}>
            <ul>
              <li><a href="https://asi.nic.in/pages/WorldHeritageBuddhistMonumentsatSanchi" target='_blank'>Sachi Stupa, MP</a></li>
              <li><a href="https://www.globalpagoda.org/" target='_blank'>Pagoda Temple, Mumbai </a></li>
              {/* <li><a href="https://kushinagar.nic.in/tourist-place/mahanirvana-stupa/" target='_blank'>Kushinagar </a></li> */}
            </ul>
          </aside>
        </div>
      </main>

      {/* About */}
      <About/>

      {/* People */}
      <People/>

      {/* Events */}
      {/* <Events/> */}

      {/* Gallery */}
      <Gallery/>

      {/* footer */}
      <ContactFooter/>
    </div>
  );
}

export default App;
