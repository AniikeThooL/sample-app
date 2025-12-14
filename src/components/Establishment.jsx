
import styles from "./mission-vision.module.css"


export const Establishment = ()=>{

    return(
        <section className={styles.section}>
            <div className={styles.president_grid}>
                <img className={styles.president_image} src="https://picsum.photos/500/600" alt="" />
                <div className={styles.president_bio}>
                    <h1>Society Establishment</h1>
                    <h2 className={styles.subtitle}>{new Date().toDateString()}</h2>
                    <p>Lorem ipsum text for details. Very large description here</p>
                </div>
            </div>
        </section>
    );
}