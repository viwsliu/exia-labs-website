import styles from "@/app/products/products.module.css"
import ProductMedia from "./ProductMedia"

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

interface ProductCardProps {
  product: Product
  imagePosition: "left" | "right"
}

// displays a single product with its image/video, title, and description in a left or right layout

export default function ProductCard({ product, imagePosition }: ProductCardProps) {
  return (
    <div className={`${styles.productSection} slide-up`}>
      <div className={styles.productContentAlt}>
        {imagePosition === "left" && (
          <ProductMedia
            mediaType={product.mediaType}
            image={product.image}
            youtubeId={product.youtubeId}
            name={product.name}
          />
        )}
        <div className={styles.productTextContent}>
          <h2>{product.name}</h2>
          <p className={styles.productDescription}>{product.description}</p>
          {product.learnMoreUrl && (
            <a href={product.learnMoreUrl} target="_blank" rel="noopener noreferrer" className="cta-button">
              {product.ctaText}
            </a>
          )}
        </div>
        {imagePosition === "right" && (
          <ProductMedia
            mediaType={product.mediaType}
            image={product.image}
            youtubeId={product.youtubeId}
            name={product.name}
          />
        )}
      </div>
    </div>
  )
}