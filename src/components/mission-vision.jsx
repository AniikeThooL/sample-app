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
              To empower businesses and individuals by providing cutting-edge solutions that drive growth, foster
              innovation, and create lasting positive impact in the communities we serve.
            </p>
          </div>

          <div className={styles.card}>
            {/* <div className={styles.iconWrapper}>
              eye
            </div> */}
            <h3 className={styles.cardTitle}>Our Vision</h3>
            <p className={styles.cardText}>
              To be the leading organization recognized for excellence, integrity, and our commitment to creating
              transformative solutions that shape the future and inspire positive change globally.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
