import styles from "./activity-section.module.css"
import Carousel3Items from "./carousel"

export function ActivitySection() {
  const team = [
    {
      id: 1,
      image: "/gallery_1.jpg",
    },
    {
      id: 2,
      image: "/gallery_2.jpg",
    },
    {
      id: 3,
      image: "/gallery_3.jpg",
    },
    {
      id: 4,
      image: "/gallery_4.jpg",
    },{
      id: 5,
      image: "/gallery_5.jpg",
    },{
      id: 6,
      image: "/gallery_6.jpeg",
    },{
      id: 7,
      image: "/gallery_7.jpeg",
    },{
      id: 8,
      image: "/gallery_8.jpeg",
    },{
      id: 9,
      image: "/gallery_9.jpeg",
    },{
      id: 10,
      image: "/gallery_10.jpeg",
    },{
      id: 11,
      image: "/gallery_11.jpeg",
    },
  ]

  return (
    <section id="activity" className={styles.section}>
      <div className={styles.container}>

        <div className={styles.containerHead}>
          <select name="year_filter" id="" value={"2025-26"} onChange={()=>{}}>
            <option value="">Year</option>
            <option value="2025-26">2025-26</option>
          </select>
        </div>

        <div className={styles.teamGrid}>
          <Carousel3Items items={team} autoSlide={false} slideInterval={1000}/>
          
        </div>
      </div>
    </section>
  )
}
