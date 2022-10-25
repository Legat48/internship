export default function () {
  // плавный скролл
  document.querySelectorAll('.js-scroll-link').forEach((link) => {
    link.addEventListener('click', function (e) {
      const href = this.getAttribute('href').substring(1)
      const scrollTarget = document.getElementById(href)
      const elementPosition = scrollTarget.getBoundingClientRect().top
      e.preventDefault()
      window.scrollBy({
        top: elementPosition,
        behavior: 'smooth'
      })
    })
  })
}
