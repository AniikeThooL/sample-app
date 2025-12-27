import { Link } from "react-router"
import styles from "./contact-footer.module.css"

export default function ContactFooter() {
  
  return (
  <div id="contact" style={{marginTop:"40px"}}>
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.grid}>
          {/* Company address map */}
          <div className={styles.column}>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.712263636535!2d73.10058959999999!3d19.0323967!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7e9c342b1e4d9%3A0xa68932d5607995eb!2sNeel%20Sankul%20CHS!5e0!3m2!1sen!2sin!4v1765992092115!5m2!1sen!2sin" height="300" style={{border:'none'}} allowFullScreen referrerPolicy="no-referrer-when-downgrade"></iframe>
          </div>

          <div className={styles.contact_and_links}>
            {/* Quick Links */}
            <div className={styles.column}>
              <h4 className={styles.columnTitle}>Quick Links</h4>
              <ul className={styles.links}>
                <li>
                  <Link to="/home">Home</Link>
                </li>
                <li>
                  <Link to="/about">About Us</Link>
                </li>
                <li>
                  <Link to="/people">People</Link>
                </li>
                <li>
                  <Link to="/events">Events</Link>
                </li>
                <li>
                  <Link to="/gallery">Gallery</Link>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div className={styles.column}>
              <h4 className={styles.columnTitle}>Contact</h4>
              <div className={styles.contactItem}>
                <img src="location.png" alt="" />
                <div>
                  <span>Neel Sankul Society , Sector-11, plot. No. 20 C, Kalamboli- Navi Mumbai. Tal-Panvel,  District - Raigad 
                        Near HDFC Bank
                        410218 Maharashtra, India</span>
                </div>
              </div>
              <div className={styles.contactItem}>
                <img src="telephone.png" alt="" />
                <div>
                  <p className={styles.contactNumber}><a href="tel:+91 9022787088">+91 9022787088</a></p>
                  <p className={styles.contactNumber}><a href="tel:+91 9967761812">+91 9967761812</a></p>
                  <p className={styles.contactNumber}><a href="tel:+91 9702144662">+91 9702144662</a></p>
                </div>
              </div>
              <div className={styles.contactItem}>
                <img src="email.png" alt="" />
                <div>
                  <a href="mailto: buddhishtnetworksss2025@gmail.com"> buddhishtnetworksss2025@gmail.com</a>
                </div>
              </div>
              {/* <div className={styles.socials}>
                <a href="#" className={styles.socialIcon} aria-label="Facebook">fb</a>
                <a href="#" className={styles.socialIcon} aria-label="Twitter">tw</a>
                <a href="#" className={styles.socialIcon} aria-label="LinkedIn">li</a>
              </div> */}
            </div>
          </div>
        </div>

        <div className={styles.divider}></div>

        <div className={styles.bottom}>
          <p>&copy; 2025 Creativo. All rights reserved.</p>
          <div className={styles.links}>
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
    </div>
  )
}
