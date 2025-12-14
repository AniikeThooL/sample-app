
import styles from "./mission-vision.module.css"


export const President = ()=>{

    return(
        <section className={styles.section}>
            <h2 className={styles.title}>About Us</h2>
            <div className={styles.president_grid}>
                <img className={styles.president_image} src="https://picsum.photos/500/600" alt="" />
                <div className={styles.president_bio}>
                    <h1>President </h1>
                    <h2 className={styles.subtitle}>Matheww Murdock</h2>
                    <p>Lorem ipsum text for details. Very large description here</p>
                </div>
            </div>
        </section>
    );
}