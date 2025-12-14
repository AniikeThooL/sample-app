import styles from "./contact-footer.module.css"

export default function ContactFooter() {
  const quickLinks1 = [
    { label: "Academics", href: "#" },
    { label: "Academics", href: "#" },
    { label: "Career/Counseling Cell", href: "#" },
    { label: "Teacher Aid Fund", href: "#" },
    { label: "Right To Information", href: "#" },
    { label: "Disclaimer", href: "#" },
    { label: "Privacy Policy", href: "#" },
  ]

  const quickLinks2 = [
    { label: "Academics", href: "#" },
    { label: "Academics", href: "#" },
    { label: "Career/Counseling Cell", href: "#" },
    { label: "Teacher Aid Fund", href: "#" },
    { label: "Right To Information", href: "#" },
    { label: "Disclaimer", href: "#" },
    { label: "Privacy Policy", href: "#" },
  ]

  return (
  <div id="contact" style={{marginTop:"40px"}}>
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.grid}>
          {/* Company address map */}
          <div className={styles.column}>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3721.610583308907!2d79.06448607520038!3d21.128085984359736!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd4c0871b799d59%3A0x3ad938c2021aa66c!2sDeekshabhoomi%2C%20Nagpur%2C%20Maharashtra%20440010!5e0!3m2!1sen!2sin!4v1765705211007!5m2!1sen!2sin" style={{border:'0',height:'300px'}} allowFullScreen referrerPolicy="no-referrer-when-downgrade"></iframe>
          </div>

          <div className={styles.contact_and_links}>
            {/* Quick Links */}
            <div className={styles.column}>
              <h4 className={styles.columnTitle}>Quick Links</h4>
              <ul className={styles.links}>
                <li>
                  <a href="#">Home</a>
                </li>
                <li>
                  <a href="#about">About Us</a>
                </li>
                <li>
                  <a href="#people">People</a>
                </li>
                <li>
                  <a href="#events">Events</a>
                </li>
                <li>
                  <a href="#gallery">Gallery</a>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div className={styles.column}>
              <h4 className={styles.columnTitle}>Contact</h4>
              <div className={styles.contactItem}>
                pin
                <span>123 Design Street, Creative City, CC 12345</span>
              </div>
              <div className={styles.contactItem}>
                ph
                <a href="tel:+1234567890">+1 (234) 567-890</a>
              </div>
              <div className={styles.contactItem}>
                mail
                <a href="mailto:hello@creativo.com">hello@creativo.com</a>
              </div>
              <div className={styles.socials}>
                <a href="#" className={styles.socialIcon} aria-label="Facebook">fb</a>
                <a href="#" className={styles.socialIcon} aria-label="Twitter">tw</a>
                <a href="#" className={styles.socialIcon} aria-label="LinkedIn">li</a>
              </div>
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
