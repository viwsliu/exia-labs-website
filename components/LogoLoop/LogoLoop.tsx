"use client"

import { useState } from "react"
import Image from "next/image"
import styles from "./LogoLoop.module.css"
import buildingWithData from "@/data/building_with.json"

interface company_info {
  name: string
  image?: string
}

export default function LogoLoop() {
  const [failedImages, setFailedImages] = useState<Set<number>>(new Set())

  const handleImageError = (index: number) => {
    setFailedImages((prev) => new Set(prev).add(index))
  }

  const renderLogo = (company: company_info, index: number) => {
    if (!company.image || failedImages.has(index)) {
      return <span className={styles.logoText}>{company.name}</span>
    }

    return (
      <Image
        src={company.image || "/placeholder.svg"}
        alt={`${company.name} logo`}
        width={200}
        height={80}
        className={styles.logoImage}
        onError={() => handleImageError(index)}
      />
    )
  }

  return (
    <section className={styles.logoSection}>
      <h2 className={styles.sectionTitle}>Building With:</h2>
      <div className={styles.logoContainer}>
        <div className={styles.logoWrapper}>
          <div className={styles.logoTrack}>
            {(buildingWithData as company_info[]).map((company, index) => (
              <div key={`logo-1-${index}`} className={styles.logoItem}>
                {renderLogo(company, index)}
              </div>
            ))}
          </div>
          <div className={styles.logoTrack}>
            {(buildingWithData as company_info[]).map((company, index) => (
              <div key={`logo-2-${index}`} className={styles.logoItem}>
                {renderLogo(company, index)}
              </div>
            ))}
          </div>
        </div>
      </div>
      <p className={styles.disclaimer}>
        Disclaimer: The appearance of Department of War visual information and/or military units does not imply or
        constitute endorsement by the Department of War or any of its components
      </p>
    </section>
  )
}