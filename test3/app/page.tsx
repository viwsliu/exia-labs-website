import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import styles from "./home.module.css"
import './globals.css'

export default function Home() {
  return (
    <>
      <Navbar currentPage="home" />
      <div className={styles.mainContent}>
        <section className={styles.heroSection}>
          <div className={styles.container}>
            <div className={styles.centeredText}>
              <p className={styles.header_date}> <em>5 December, 2025</em> </p>
              <h1 className={styles.mainHeading}>Achieving Decision Advantage through Spatial AI</h1>
              <hr className="section-divider" />
              <p>In 2006, I was a young infantry platoon leader planning missions with maps, acetate, and markers. Nearly twenty years later, despite billions in defense spending, the commanders I meet today are still relying on those same analog tools.</p>
              <br />
              <p>Since the launch of ChatGPT in 2022, the Department of War has rushed to adopt AI. But they are focused on text—chatbots and LLMs. The military runs on text—from written orders to real-time chat. But text alone cannot model the physics of the battlefield.</p>
              <br />
              <p>At Exia Labs, we are shifting the paradigm for both the military and the industry away from chatbots and toward spatial AI.</p>
              <br />
              <p>We build AI-enabled command and control products that master the raw data of the physical world. By creating machine-readable worlds, we enable AI agents to understand movement, constraints, and environmental effects.</p>
              <br />
              <p>When warfighters understand <em>where</em> things are, <em>how</em> they’re moving, and <em>what</em> will happen next—that’s when true decision advantage emerges. We are building the architecture to make that possible.</p>
              <br />
              <p><em> If our mission speaks to you, please reach out.</em> </p>
              <br />
              <strong><em>– Jon Pan, co-founder and CEO of Exia Labs</em></strong>
            </div>
          </div>
        </section>
        <Footer />
      </div>
    </>
  )
}