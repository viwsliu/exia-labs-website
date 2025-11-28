import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import styles from "./home.module.css"

export default function Home() {
  return (
    <>
      <Navbar currentPage="home" />
      <div className={styles.mainContent}>
        <section className={styles.heroSection}>
          <div className={styles.container}>
            <div className={styles.centeredText}>
              <p className={styles.header_date}> Nov 28, 2025 </p>
              <h1 className={styles.mainHeading}>Title</h1>
              <p className={styles.subheading}>Subheader</p>
              <p>
                Body text lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
                ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                culpa qui officia deserunt mollit anim id est laborum.
              </p>
              <p>
                Excepteur efficient emerging, minim veniam anim aute carefully curated Ginza conversation exquisite
                perfect nostrud nisi intricate Content. Qui international first-class nulla ut. Punctual
                adipisicing, essential lovely queen tempor eiusmod irure. Exclusive izakaya charming Scandinavian
                impeccable aute quality of life soft power pariatur Melbourne occaecat discerning. Qui wardrobe
                aliquip, et Porter destination Toto remarkable officia Helsinki excepteur Basset hound. Zürich
                sleepy perfect consectetur.
              </p>
              <p>
                Excepteur efficient emerging, minim veniam anim aute carefully curated Ginza conversation exquisite
                perfect nostrud nisi intricate Content. Qui international first-class nulla ut. Punctual
                adipisicing, essential lovely queen tempor eiusmod irure. Exclusive izakaya charming Scandinavian
                impeccable aute quality of life soft power pariatur Melbourne occaecat discerning. Qui wardrobe
                aliquip, et Porter destination Toto remarkable officia Helsinki excepteur Basset hound. Zürich
                sleepy perfect consectetur.
              </p>
              <p>
                Excepteur efficient emerging, minim veniam anim aute carefully curated Ginza conversation exquisite
                perfect nostrud nisi intricate Content. Qui international first-class nulla ut. Punctual
                adipisicing, essential lovely queen tempor eiusmod irure. Exclusive izakaya charming Scandinavian
                impeccable aute quality of life soft power pariatur Melbourne occaecat discerning. Qui wardrobe
                aliquip, et Porter destination Toto remarkable officia Helsinki excepteur Basset hound. Zürich
                sleepy perfect consectetur.
              </p>
              <p>
                Excepteur efficient emerging, minim veniam anim aute carefully curated Ginza conversation exquisite
                perfect nostrud nisi intricate Content. Qui international first-class nulla ut. Punctual
                adipisicing, essential lovely queen tempor eiusmod irure. Exclusive izakaya charming Scandinavian
                impeccable aute quality of life soft power pariatur Melbourne occaecat discerning. Qui wardrobe
                aliquip, et Porter destination Toto remarkable officia Helsinki excepteur Basset hound. Zürich
                sleepy perfect consectetur.
              </p>
              <p>
                Excepteur efficient emerging, minim veniam anim aute carefully curated Ginza conversation exquisite
                perfect nostrud nisi intricate Content. Qui international first-class nulla ut. Punctual
                adipisicing, essential lovely queen tempor eiusmod irure. Exclusive izakaya charming Scandinavian
                impeccable aute quality of life soft power pariatur Melbourne occaecat discerning. Qui wardrobe
                aliquip, et Porter destination Toto remarkable officia Helsinki excepteur Basset hound. Zürich
                sleepy perfect consectetur.
              </p>
            </div>
          </div>
        </section>
        <Footer />
      </div>
    </>
  )
}