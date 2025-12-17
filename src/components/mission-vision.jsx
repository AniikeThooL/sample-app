import styles from "./mission-vision.module.css"

export function MissionVision() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>

        <div className={styles.grid}>
          <div className={styles.card}>
            {/* <div className={styles.iconWrapper}>
              bullseye
            </div> */}
            <h3 className={styles.cardTitle}>Our Mission</h3>
            <p className={styles.cardText}>
              1. To organize various activities and initiatives based on the principles of Buddhist wisdom 
              and the commemorate the birth anniversaries and death anniversaries of great personalities 
              and celebrate national festival. <br />
              2. To esteemed individuals contributing significantly toward the advancement for society in 
              social, educational, cultural and sports initiatives will be acknowledged and felicitated. <br />
              3. To organize various quiz as well as organize conference, seminars workshops to encourage 
              the exchange of ideas and perspectives. 
              4. To provide assistance to the underprivileged people in the society based on available 
              resources. <br />
              5. To implement various schemes and projects for women’s empowerment and to organize 
              training camps for the welfare and betterment of society.   </p>
          </div>

          <div className={styles.card}>
            {/* <div className={styles.iconWrapper}>
              eye
            </div> */}
            <h3 className={styles.cardTitle}>Our Vision</h3>
            <p className={styles.cardText}>
                1.To carry the light of Buddhist wisdom across the world by inspiring people with the 
                profound value of Buddhist Philosophy. <br />
                2. To spread, nurture and strengthen the ethical principles of justice, freedom, equality, 
                fraternity and friendship as the foundation of a peaceful society. <br />
                3. To assist and contribute towards the dissemination of education among all sections of the 
                society. <br />
                4. To unite all citizens of the Buddhist community across social, economics, cultural, and 
                spheres and establish a collective network. <br />
                5.To organize various programmes and initiatives will implemented across social, 
                educational, culture, sports, and other domains with the mission to inspire growth unity and 
                holistic development in a society.   </p>
          </div>
        </div>
      </div>
    </section>
  )
}
