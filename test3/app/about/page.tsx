import Navbar from '@/components/Navbar'
import ScrollAnimations from '@/components/ScrollAnimations'
import styles from './about.module.css'
import Footer from '@/components/Footer'
import teamData from '@/data/team.json'
import backersData from '@/data/backers.json'

interface TeamMember {
  image_source: string
  name: string
  role: string
  linkedin?: string
  twitter?: string
}

interface Backer {
  image_source?: string
  name?: string
}

export const metadata = {
  title: 'Exia Labs - About',
  description: 'Learn about our mission, impact, team, and backers',
}

export default function About() {
  return (
    <>
      <Navbar currentPage="about" />
      <ScrollAnimations />

      <div className={styles.mainContent}>
        <section className={styles.pageHeader}>
          <div className="container"></div>
        </section>

        {/* What we do */}
        <section id="mission" className={styles.missionSection}>
          <div className="container">
            <div className={styles.productsTitleWrapper}>
              <h1 className={styles.productsPageTitle}>About Us</h1>
            </div>
            <hr className="section-divider" />
            <h2 className="section-title slide-up">Our Work</h2>
            <div className={styles.missionContent}>
              <div className={`${styles.missionTextContainer} slide-up`}>
                <p className={styles.missionText}>
                  At Exia Labs, our team is dedicated to advancing the next generation of defense technology — purpose-built to support warfighters on the ground.
                  We bring together engineers and experts who understand the realities of modern conflict and the urgent need for rapid, reliable, decision support.
                  Our work centers on building software that analyzes complex environments, computes situational understanding, and delivers meaningful operational advantages in high-stakes environments.
                </p>
              </div>
              <div className={`${styles.missionImage} slide-up`}></div>
            </div>
          </div>
        </section>

        {/* our Mission */}
        <section id="impact" className={styles.impactSection}>
          <div className="container">
            <hr className="section-divider" />
            <h2 className="section-title slide-up">Our Mission</h2>
            <div className={`${styles.missionContent} ${styles.missionContentReverse}`}>
              <div className={`${styles.missionTextContainer} slide-up`}>
                <p className={styles.missionText}>
                  Our mission is to develop AI-driven solutions that empower warfighters to make faster, smarter decisions in the field. 
                  By harnessing cutting-edge technology and a deep understanding of modern operational environments, we aim to enhance situational awareness, streamline operations, and ultimately save lives.
                  We are committed to pushing the boundaries of innovation while upholding the highest standards of reliability.
                </p>
              </div>
              <div className={`${styles.impactImage} slide-up`}></div>
            </div>
          </div>
        </section>

        {/* team */}
        <section id="team" className={styles.teamSection}>
          <div className="container">
            <hr className="section-divider" />
            <h2 className="section-title-alt slide-up">Our Team</h2>
            <div className={styles.teamGrid}>
              {(teamData as TeamMember[]).map((member, index) => (
                <div key={index} className={`${styles.teamMember} slide-up`}>
                  <div className={styles.memberImage}>
                    <img src={member.image_source || "/placeholder.svg"} alt={member.name} />
                  </div>
                  <h3>{member.name}</h3>
                  <p className={styles.memberRole}>{member.role}</p>
                  <div className={styles.memberLinks}>
                    <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
                      <svg viewBox="0 0 24 24" fill="currentColor">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                      </svg>
                    </a>
                    {member.twitter && (
                      <a href={member.twitter} target="_blank" rel="noopener noreferrer">
                        <svg viewBox="0 0 24 24" fill="currentColor">
                          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                        </svg>
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* investors */}
        <section id="investors" className={styles.teamSection}>
          <div className="container">
            <hr className="section-divider" />
            <h2 className="section-title-alt slide-up">Our Backers</h2>
            <div className={styles.investorsGrid}>
              {(backersData as Backer[]).map((backer, index) => (
                <div key={index} className={`${styles.investorCard} slide-up`}>
                  <img src={backer.image_source || "/placeholder.svg"} alt={backer.name} />
                </div>
              ))}
            </div>
          </div>
        </section>
        <Footer />
      </div>
    </>
  )
}