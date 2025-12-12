import Navbar from "@/components/Navbar/Navbar"
import ScrollAnimations from "@/components/ScrollAnimations"
import Footer from "@/components/Footer/Footer"
import ProductSection from "@/components/ProductSection"
import styles from "./products.module.css"
import productsData from "@/data/products.json"
import "../globals.css"

 // main products page that imports product data and renders both sections with proper alternating layout

interface Product {
  name: string
  description: string
  mediaType: "image" | "video"
  image?: string
  youtubeId?: string
  learnMoreUrl?: string
  ctaText: string
  section: "decision_advantage" | "data_architecture"
}

const products = productsData as Product[]

export const metadata = {
  title: "Exia Labs - Products",
  description: "",
}

export default function Products() {
  const decisionAdvantageProducts = products.filter((p) => p.section === "decision_advantage")
  const dataArchitectureProducts = products.filter((p) => p.section === "data_architecture")

  return (
    <>
      <Navbar currentPage="products" />
      <ScrollAnimations />

      <div className={styles.mainContent}>
        <section className={styles.productsSection}>
          <div className="container">
            <ProductSection
              title="Decision Advantage"
              products={decisionAdvantageProducts}
              startIndex={0}
              isFirstSection
            />
            <ProductSection
              title="Data Architecture"
              products={dataArchitectureProducts}
              startIndex={decisionAdvantageProducts.length}
            />
          </div>
        </section>
        <Footer />
      </div>
    </>
  )
}