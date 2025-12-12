import styles from "@/app/products/products.module.css"

interface ProductMediaProps {
  mediaType: "image" | "video"
  image?: string
  youtubeId?: string
  name: string
}

// renders either a video or image for a product based on the media type

export default function ProductMedia({ mediaType, image, youtubeId, name }: ProductMediaProps) {
  return (
    <div className={styles.productImagesSingle}>
      {mediaType === "video" && youtubeId ? (
        <div className={styles.videoContainer}>
          <iframe
            src={`https://www.youtube.com/embed/${youtubeId}`}
            title={name}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className={styles.youtubeEmbed}
          />
        </div>
      ) : (
        <img src={image || "/placeholder.svg"} alt="" className={styles.productSingleImage} />
      )}
    </div>
  )
}