import Navbar from '@/components/Navbar'
import ScrollAnimations from '@/components/ScrollAnimations'
import Footer from '@/components/Footer'
import styles from './products.module.css'
import productsData from '@/data/products.json'

interface Product {
  id: string
  name: string
  description: string
  image?: string
  learnMoreUrl?: string
  ctaText: string
  imagePosition?: 'left' | 'right'
}

const products = productsData as Product[]

export const metadata = {
  title: 'Exia Labs - Products',
  description: 'Our cutting-edge AI-powered defense technology products',
}

export default function Products() {
  return (
    <>
      <Navbar currentPage="products" />
      <ScrollAnimations />
      
      <div className={styles.mainContent}>
        <section className={styles.pageHeader}>
          <div className="container"></div>
        </section>

        <section className={styles.productsSection}>
          <div className="container">
            <div className={styles.productsTitleWrapper}>
              <h1 className={styles.productsPageTitle}>Solutions</h1>
            </div>

            <hr className="section-divider" />

            {products.map((product, index) => (
              <div key={product.id}>
                <div id={product.id} className={`${styles.productSection} slide-up`}>
                  <div className={styles.productContentAlt}>
                    {product.imagePosition === 'left' && (
                      <div className={styles.productImagesSingle}>
                        <img src={product.image || "/placeholder.svg"} alt="" className={styles.productSingleImage} />
                      </div>
                    )}
                    <div className={styles.productTextContent}>
                      <h2>{product.name}</h2>
                      <p className={styles.productDescription}>
                        {product.description}
                      </p>
                      {product.learnMoreUrl && (
                        <a 
                          href={product.learnMoreUrl} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="cta-button"
                        >
                          {product.ctaText}
                        </a>
                      )}
                    </div>
                    {product.imagePosition === 'right' && (
                      <div className={styles.productImagesSingle}>
                        <img src={product.image || "/placeholder.svg"} alt="" className={styles.productSingleImage} />
                      </div>
                    )}
                  </div>
                </div>
                {index < products.length - 1 && <hr className="section-divider" />}
              </div>
            ))}
          <hr className="section-divider" />
          </div>
        </section>
        <Footer />
      </div>
    </>
  )
}
