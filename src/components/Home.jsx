import Carousel3Items from "./carousel"
import { LeftLinks, RightLinks } from "./Header"


const view = window.innerHeight<window.innerWidth?"web":"mobile";

export const Home = ()=>{
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

    return(
        <main className="main-layout">
            {/* Main content area */}
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
    )
}