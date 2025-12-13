import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
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
        <span>* “बुद्धं शरणं गच्छामि  ।। धम्मं शरणं गच्छामि  ।। संघं शरणं गच्छामि” *</span>
        <span>* “प्रज्ञा, शील, करुणा” *</span>
        <span>* “अत्त दीप भव” *</span>
        <span>“भवतु सब्ब”</span>
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
          <div className="photo-label">PHOTO</div>
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
    </div>
  );
}

export default App;
