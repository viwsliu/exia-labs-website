// Product Gallery Navigation
document.addEventListener("DOMContentLoaded", () => {
  const galleries = document.querySelectorAll(".product-gallery")

  galleries.forEach((gallery, galleryIndex) => {
    const items = gallery.querySelectorAll(".gallery-item")
    const thumbnails = gallery.querySelectorAll(".thumbnail")

    thumbnails.forEach((thumbnail, index) => {
      thumbnail.addEventListener("click", () => {
        // Remove active class from all items and thumbnails in this gallery
        items.forEach((item) => item.classList.remove("active"))
        thumbnails.forEach((thumb) => thumb.classList.remove("active"))

        // Add active class to clicked thumbnail and corresponding item
        thumbnail.classList.add("active")
        items[index].classList.add("active")
      })
    })
  })
})
