document.addEventListener("DOMContentLoaded", () => {
  const galleries = document.querySelectorAll(".product-gallery")

  galleries.forEach((gallery, galleryIndex) => {
    const items = gallery.querySelectorAll(".gallery-item")
    const thumbnails = gallery.querySelectorAll(".thumbnail")

    thumbnails.forEach((thumbnail, index) => {
      thumbnail.addEventListener("click", () => {
        items.forEach((item) => item.classList.remove("active"))
        thumbnails.forEach((thumb) => thumb.classList.remove("active"))
        thumbnail.classList.add("active")
        items[index].classList.add("active")
      })
    })
  })
})
