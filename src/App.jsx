import './App.css'
import Carousel3Items from './components/carousel'
import ContactFooter from './components/contact-footer'
import { About } from './components/About'
import { People } from './components/People'
import { Gallery } from './components/Gallery'
import { Events } from './components/Events'

function App() {
  const carouselItems = [
    {
      image: "https://picsum.photos/500/600",
      title: "Daily App - Task Management",
      description: "Increasing your productivity with smart task scheduling",
    },
    {
      image: "https://picsum.photos/500/600",
      title: "Daily App - User Interface",
      description: "Increasing your productivity with intuitive design",
    },
    {
      image: "https://picsum.photos/500/600",
      title: "Daily App - Orange Theme",
      description: "Increasing your productivity with vibrant colors",
    },
    {
      image: "https://picsum.photos/500/600",
      title: "Daily App - Dark Mode",
      description: "Increasing your productivity with eye-friendly interface",
    },
    {
      image: "https://picsum.photos/500/600",
      title: "Daily App - Nature Theme",
      description: "Increasing your productivity with organic design",
    },
    {
      image: "https://picsum.photos/500/600",
      title: "Daily App - Notifications",
      description: "Increasing your productivity with smart notifications",
    },
  ]

  return (
    <div className="app">
      {/* Top blue header */}
      <header className="top-header">
        <div className="logo-box">
          <img src="/logo.jpg" alt="" />
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
          <div className="marquee__item">“भवतु सब्ब”</div>
          
          <div className="marquee__track_duplicate">
            <div className="marquee__item">* “बुद्धं शरणं गच्छामि  ।। धम्मं शरणं गच्छामि  ।। संघं शरणं गच्छामि” *</div>
            <div className="marquee__item">* “प्रज्ञा, शील, करुणा” *</div>
            <div className="marquee__item">* “अत्त दीप भव” *</div>
            <div className="marquee__item">“भवतु सब्ब”</div>
          </div>
        </div>
      </div>
      </div>

      {/* Navigation menu */}
      <nav className="nav-bar">
        <button>Home</button>
        <button>About Us</button>
        <button>People</button>
        <button>Event</button>
        <button>Gallery</button>
        <button>Contact Us</button>
      </nav>

      {/* Main content area */}
      <main className="main-layout">
        {/* Left links */}
          <div>
            <div className="side-header">Link</div>
            <aside className="side-box">
                <ul>
                  <li><a href="https://www.deekshabhoomi.org/" target='_blank'>Deeksha Bhumi Nagpur</a></li>
                  <li><a href="?">Chaitybhumi Mumbai</a></li>
                  <li><a href="?">Bihar</a></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                </ul>
            </aside>
          </div>

        {/* Center photo box */}
        <section className="photo-box">
          <Carousel3Items items={carouselItems} autoSlide={true} slideInterval={4000} />
        </section>

        {/* Right links */}
        <div>
            <div className="side-header">Link</div>
          <aside className="side-box">
            <ul>
              <li><a href="?">Dragan Palace Kampati</a></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
            </ul>
          </aside>
        </div>
      </main>

      {/* About */}
      <About/>

      {/* People */}
      <People/>

      {/* Events */}
      <Events/>

      {/* Gallery */}
      <Gallery/>

      {/* footer */}
      <ContactFooter/>
    </div>
  );
}

export default App;
