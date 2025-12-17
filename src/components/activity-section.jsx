import styles from "./activity-section.module.css"
import Carousel3Items from "./carousel"

export function ActivitySection() {
  const team = [
    {
      id: 1,
      name: "Sarah Anderson",
      role: "Chief Executive Officer",
      bio: "Visionary leader with 20+ years in strategy and innovation",
      image: "/gallery_1.jpg",
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Chief Technology Officer",
      bio: "Tech innovator passionate about transforming businesses through technology",
      image: "/gallery_2.jpg",
    },
    {
      id: 3,
      name: "Emma Rodriguez",
      role: "Head of Operations",
      bio: "Operations expert committed to operational excellence and growth",
      image: "/gallery_3.jpg",
    },
    {
      id: 5,
      name: "David Kumar",
      role: "Head of Marketing",
      bio: "Marketing strategist focused on building meaningful brand connections",
      image: "/gallery_5.jpg",
    },
  ]

  return (
    <section id="activity" className={styles.section}>
      <div className={styles.container}>

        <div className={styles.containerHead}>
          <select name="year_filter" id="">
            <option value="" disabled selected>Year</option>
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
