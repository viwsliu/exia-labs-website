import styles from "@/app/products/products.module.css"
import ProductCard from "./ProductCard"

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

interface ProductSectionProps {
  title: string
  products: Product[]
  startIndex: number
  isFirstSection?: boolean
}
 // groups products by section (Decision Advantage or Data Architecture) with a section header

export default function ProductSection({ title, products, startIndex, isFirstSection }: ProductSectionProps) {
  const titleClass = isFirstSection ? styles.productsPageTitle : styles.productsPageTitleSecond
  const wrapperClass = isFirstSection ? styles.productsTitleWrapper : styles.productsTitleWrapperSecond

  return (
    <>
      <div className={wrapperClass}>
        <h1 className={titleClass}>{title}</h1>
      </div>
      <hr className="section-divider" />
      {products.map((product, index) => {
        const imagePosition = (startIndex + index) % 2 === 0 ? "left" : "right"
        return (
          <div key={product.name}>
            <ProductCard product={product} imagePosition={imagePosition} />
            {index < products.length - 1 && <hr className="section-divider" />}
          </div>
        )
      })}
      <hr className="section-divider" />
    </>
  )
}