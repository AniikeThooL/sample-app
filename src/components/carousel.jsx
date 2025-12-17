import { useState, useEffect } from "react"
import styles from "./carousel-3-items.module.css"

export default function Carousel3Items({ items = [], autoSlide = true, slideInterval = 4000 }) {
  const [current, setCurrent] = useState(0)

  // Duplicate items to create infinite loop effect
  const loopItems = items.length > 0 ? [...items, ...items, ...items] : []

  // Auto-slide functionality
  useEffect(() => {
    if (!autoSlide || items.length === 0) return

    const timer = setInterval(() => {
      setCurrent((prev) => prev + 1)
    }, slideInterval)

    return () => clearInterval(timer)
  }, [autoSlide, slideInterval, items.length])

  // Handle infinite loop transition
  useEffect(() => {
    if (current >= items.length * 2) {
      const timer = setTimeout(() => {
        setCurrent(items.length)
      }, 500)
      return () => clearTimeout(timer)
    }
  }, [current, items.length])

  const previous = () => {
    setCurrent((prev) => (prev - 1 < 0 ? items.length * 2 - 1 : prev - 1))
  }

  const next = () => {
    setCurrent((prev) => prev + 1)
  }

  const goToSlide = (index) => {
    setCurrent(items.length + index)
  }

  if (items.length === 0) {
    return <div className={styles.emptyCarousel}>No items to display</div>
  }

  // Get visible items (3 at a time)
  const visibleStartIndex = current
  const visibleItems = loopItems.slice(visibleStartIndex, visibleStartIndex + 3)

  return (
    <div className={styles.carouselContainer}>
      {/* Carousel wrapper */}
      <div className={styles.carouselWrapper}>
        {/* Slides track */}
        <div
          className={styles.slidesTrack}
          style={{
            transform: `translateX(calc(-${current * 100}% ))`,
            transition: current % items.length === 0 && current !== 0 ? "none" : "transform 0.6s ease-in-out",
          }}
        >
          {loopItems.map((item, index) => (
            <div key={index} className={styles.slide}>
              <img
                src={item.image || "/placeholder.svg?height=400&width=300&query=portfolio"}
                alt={item.title}
                className={styles.slideImage}
              />
            </div>
          ))}
        </div>

        {/* Previous button */}
        <button className={`${styles.navButton} ${styles.prev}`} onClick={previous}>
          &#10094;
        </button>

        {/* Next button */}
        <button className={`${styles.navButton} ${styles.next}`} onClick={next}>
          &#10095;
        </button>
      </div>

     
    </div>
  )
}
