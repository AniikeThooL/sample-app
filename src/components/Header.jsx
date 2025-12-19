import { useState } from "react";

const view = window.innerHeight<window.innerWidth?"web":"mobile";

export const Header = ()=>{
  const [menuOpen,setMenuOpen] = useState(false);

    return(
        <>
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
                {view=="mobile"?
                    <button className={`hamburger-menu ${menuOpen?'open':'closed'}`} onClick={()=>setMenuOpen(!menuOpen)}>
                        <span></span><span></span><span></span>
                    </button>
                :null}
            </div>

        </>
    );
}


export const LeftLinks = ()=>{
    const [leftLinks,setLeftLinks] = useState(false);

    return(
        <div>
            <div className="side-header" onClick={()=>setLeftLinks(!leftLinks)}>Link</div>
            <aside className={`side-box ${leftLinks || view=="web"?'open':'closed'}`}>
                <ul>
                    <li><a href="https://www.deekshabhoomi.org/" target='_blank'>DeekshaBhoomi, Nagpur</a></li>
                    <li><a href="https://bodhgayatemple.com/" target='_blank'>Bodh Gaya, Bihar</a></li>                
                </ul>
            </aside>
        </div>
    )
}

export const RightLinks = ()=>{
    const [rightLinks,setRightLinks] = useState(false);

    return(
        <>
            <div className="side-header" onClick={()=>setRightLinks(!rightLinks)}>Link</div>
            <aside className={`side-box ${rightLinks || view=="web"?'open':'closed'}`}>
                <ul>
                    <li><a href="https://asi.nic.in/pages/WorldHeritageBuddhistMonumentsatSanchi" target='_blank'>Sachi Stupa, MP</a></li>
                    <li><a href="https://www.globalpagoda.org/" target='_blank'>Pagoda Temple, Mumbai </a></li>
                    {/* <li><a href="https://kushinagar.nic.in/tourist-place/mahanirvana-stupa/" target='_blank'>Kushinagar </a></li> */}
                </ul>
            </aside>
        </>
    )
}