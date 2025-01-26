export { default as BookCarousel } from '../..\\components\\BookCarousel.vue'
export { default as BookDetails } from '../..\\components\\BookDetails.vue'
export { default as Card } from '../..\\components\\Card.vue'
export { default as Carousel } from '../..\\components\\Carousel.vue'
export { default as Categories } from '../..\\components\\Categories.vue'
export { default as Comment } from '../..\\components\\Comment.vue'
export { default as Footer } from '../..\\components\\Footer.vue'
export { default as Navbar } from '../..\\components\\Navbar.vue'

// nuxt/nuxt.js#8607
function wrapFunctional(options) {
  if (!options || !options.functional) {
    return options
  }

  const propKeys = Array.isArray(options.props) ? options.props : Object.keys(options.props || {})

  return {
    render(h) {
      const attrs = {}
      const props = {}

      for (const key in this.$attrs) {
        if (propKeys.includes(key)) {
          props[key] = this.$attrs[key]
        } else {
          attrs[key] = this.$attrs[key]
        }
      }

      return h(options, {
        on: this.$listeners,
        attrs,
        props,
        scopedSlots: this.$scopedSlots,
      }, this.$slots.default)
    }
  }
}
