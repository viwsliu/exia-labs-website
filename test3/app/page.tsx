import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import styles from "./home.module.css"
import './globals.css'

// keep text as const? easier to edit?
const text = `
In 2006, when I was an infantry platoon leader, my planning tools were whiteboards, maps, acetate, and Sharpies. Nearly twenty years later, the platoon leaders, company commanders, and staff officers I’ve met at Fort Campbell and Fort Bragg are still using the same analog tools.

After hundreds of billions of dollars spent on “decision advantage” platforms, how is it that the tactical edge still runs on whiteboards?

Because the organizations with budgets have spent two decades chasing exquisite systems and offset-level technologies—rather than solving the mundane problems that actually drive battlefield decisions. Decision advantage doesn’t come from software no one uses. It comes from tools that companies, batteries, and troops will actually adopt.

At Exia Labs, we build for that reality.

And we build using first principles thinking: strip away assumptions and reason from the ground up. When you do that, it's clear that near-peer competitors now match the U.S. across most domains, capabilities, and technologies. So the real lever for advantage isn’t hidden data or exquisite sensors—it’s mastering the mundane data both sides share: terrain, weather, and time. Those are the areas where better modeling, better reasoning, and better decisions can create disproportionate impact.

Text—operations orders, reports, chat—is what powers military operations. But text alone can’t represent how the world actually works. To understand and reason about military operations, you need systems with spatial awareness and world models that can interpret movement, constraints, timing, and effects.

Unlocking spatial reasoning for military operations is our core focus at Exia Labs. Because when warfighters can understand where things are, how they’re moving, and what will happen next—that’s when true decision advantage emerges.

If our mission speaks to you, please reach out.

– Jon, Serj, and the rest of the Exia Labs team.
`;

export default function Home() {
  return (
    <>
      <Navbar currentPage="home" />
      <div className={styles.mainContent}>
        <section className={styles.heroSection}>
          <div className={styles.container}>
            <div className={styles.centeredText}>
{/* version 1 of text */}
              <p className={styles.header_date}> <em>11 November, 2025</em> </p>
              <h1 className={styles.mainHeading}>Decision Advantage Starts With the Mundane</h1>
              <hr className="section-divider" />
              <p>In 2006, when I was an infantry platoon leader, my planning tools were whiteboards, maps, acetate, and Sharpies. Nearly twenty years later, the platoon leaders, company commanders, and staff officers I’ve met at Fort Campbell and Fort Bragg are still using the same analog tools.</p>
              <br />
              <p> After hundreds of billions of dollars spent on “decision advantage” platforms, how is it that the tactical edge still runs on whiteboards?</p>
              <br />
              <p>Because the organizations with budgets have spent two decades chasing exquisite systems and offset-level technologies—rather than solving the mundane problems that actually drive battlefield decisions. Decision advantage doesn’t come from software no one uses. It comes from tools that companies, batteries, and troops will actually adopt.</p>
              <br />
              <strong> At Exia Labs, we build for that reality. </strong>
              <br />
              <br />
              <p>And we build using first principles thinking: strip away assumptions and reason from the ground up. When you do that, it's clear that near-peer competitors now match the U.S. across most domains, capabilities, and technologies. So the real lever for advantage isn’t hidden data or exquisite sensors—it’s mastering the mundane data both sides share: terrain, weather, and time. Those are the areas where better modeling, better reasoning, and better decisions can create disproportionate impact.</p>
              <br />
              <p>Text—operations orders, reports, chat—is what powers military operations. But text alone can’t represent how the world actually works. To understand and reason about military operations, you need systems with spatial awareness and world models that can interpret movement, constraints, timing, and effects.</p>
              <br />
              <p>Unlocking spatial reasoning for military operations is our core focus at Exia Labs. Because when warfighters can understand where things are, how they’re moving, and what will happen next—that’s when true decision advantage emerges.</p>
              <br />
              <p> If our mission speaks to you, please reach out. </p>
              <br />
              <strong><em> – Jon, Serj, and the rest of the Exia Labs team. </em></strong>

{/* version 2 */}
              
              {/* <p className={styles.header_date}> 11 November, 2025 </p>
              <h1 className={styles.mainHeading}>Decision Advantage Starts With the Mundane</h1>
              <pre style={{ whiteSpace: "pre-wrap", fontFamily: "inherit" }}>
                {text}
              </pre> */}
            </div>
          </div>
        </section>
        <Footer />
      </div>
    </>
  )
}