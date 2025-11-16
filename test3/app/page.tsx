import Navbar from '@/components/Navbar'
import ScrollAnimations from '@/components/ScrollAnimations'
import Footer from '@/components/Footer'
import styles from './home.module.css'

export default function Home() {
  return (
    <>
      <Navbar currentPage="home" />
      <ScrollAnimations />
      <div className={styles.mainContent}>
        {/* hero Section */}
        <section className={`${styles.hero} ${styles.heroFadeIn}`}>
          <div className={styles.heroContent}>
            <div className={styles.heroLogo}>
              <div className={styles.productLogo}>
                <img src="/images/exialabs_logo.jpg" alt="Exia Labs Logo" />
              </div>
            </div>
            <div className={styles.heroText}>
              <h1>Exia Labs</h1>
              <p className={styles.missionStatement}>
                Generating Warfighting Strategies Beyond Human Limits
              </p>
            </div>
          </div>
          <a href="#vision" className={styles.scrollArrow}>
            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="6 9 12 15 18 9"></polyline>
            </svg>
          </a>
        </section>

        {/* vision Section */}
        <section id="vision" className={styles.visionSection}>
          <div className={styles.visionOverlay}>
            <div className={styles.visionContent}>
              <h2 className={styles.visionHeading}>ADVANCING DEFENSE<br />TECHNOLOGY</h2>
              <p className={styles.visionText}>Exia Labs is pioneering AI-powered solutions that enhance strategic decision-making and operational effectiveness for warfighters. </p>
              <a href="/products" className={styles.visionButton}>EXPLORE <span>→</span></a>
            </div>
          </div>
          <a href="#vision2" className={styles.scrollArrow}>
            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="6 9 12 15 18 9"></polyline>
            </svg>
          </a>
        </section>

        <section id="vision2" className={styles.visionSectionAlt}>
          <div className={styles.visionOverlayAlt}>
            <div className={styles.visionContentAlt}>
              <h2 className={styles.visionHeading}>SUPPORTING WARFIGHTERS<br />ON THE GROUND</h2>
              <p className={styles.visionText}>Discover how Exia Labs empowers warfighters with AI tools that elevate situational awareness and decision-making.</p>
              <a href="/about#mission" className={styles.visionButton}>LEARN MORE <span>→</span></a>
            </div>
          </div>
          <a href="#vision3" className={styles.scrollArrow}>
            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="6 9 12 15 18 9"></polyline>
            </svg>
          </a>
        </section>

        <section id="vision3" className={styles.visionSection3}>
          <div className={styles.visionOverlay}>
            <div className={styles.visionContent}>
              <h2 className={styles.visionHeading}>OPERATIONAL<br /> UPDATES</h2>
              <p className={styles.visionText}> Catch up on the latest press releases, media coverage, and industry commentary on Exia Labs.</p>
              <a href="https://blog.exialabs.com/" className={styles.visionButton}>READ <span>→</span></a>
            </div>
          </div>
          <a href="#vision4" className={styles.scrollArrow}>
            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="6 9 12 15 18 9"></polyline>
            </svg>
          </a>
        </section>

        <section id="vision4" className={styles.visionSection4}>
          <div className={styles.visionOverlayAlt}>
            <div className={styles.visionContent}>
              <h2 className={styles.visionHeading}>MEET THE MINDS<br/>BEHIND THE MISSION</h2>
              <p className={styles.visionText}>Discover the team driving breakthrough AI technologies that strengthen decision-making, accelerate innovation, and reshape the future of defense.</p>
              <a href="/about#team" className={styles.visionButton}>MEET THE TEAM <span>→</span></a>
            </div>
          </div>
          {/* <a href="#footer" className={styles.scrollArrow}>
            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="6 9 12 15 18 9"></polyline>
            </svg>
          </a> */}
        </section>
        <Footer />
      </div>
    </>
  )
}
