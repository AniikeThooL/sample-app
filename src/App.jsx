import './App.css'
import Carousel3Items from './components/carousel'
import ContactFooter from './components/contact-footer'
import { About } from './components/About'
import { People } from './components/People'
import { Gallery } from './components/Gallery'
import { Header, LeftLinks, RightLinks } from './components/Header'

const view = window.innerHeight<window.innerWidth?"web":"mobile";

function App() {
  const carouselItems = [
    {
      image: "/DeekshaBhoomi.jpg",
      title: "Deekshabhoomi",
    },
    {
      image: "/ChaityaBhoomi.jpg",
      title: "ChaityaBhoomi",
    },
    {
      image: "/chaityabhomigate.webp",
      title: "chaityabhomigate",
    },
    {
      image: "/Pagoda_temple.jpg",
      title: "Pagoda_temple",
    },
    {
      image: "/25BMBHIMAKOREGAON.jpg",
      title: "25BMBHIMAKOREGAON",
    },
    {
      image: "/home_img.jpg",
      title: "home_img",
    },
  ]

  
  return (
    <div className="app">
      <Header/>

      
      {/* Main content area */}
      <main className="main-layout">
        {/* Left links */}
        <LeftLinks/>

        {/* Right links */}
        {view=="mobile"?<div><RightLinks/></div>:null}

        {/* Center photo box */}
        <section className="photo-box">
          <Carousel3Items items={carouselItems} autoSlide={true} slideInterval={4000} />
        </section>

        {/* Right links */}
        <div style={{display:view=="web"?"block":"none"}}>
          <RightLinks/>
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
