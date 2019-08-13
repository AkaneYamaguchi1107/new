import Vue from 'vue'

Vue.directive('scroll-trigger', {
  inserted: function(el, binding) {
    let buff = 100
    let className = 'active'
    const opts = binding.value

    if (opts) {
      buff = opts.buff || buff
      className = opts.className || className
    }

    const f = () => {
      const top =
        el.getBoundingClientRect().top +
        window.pageYOffset -
        window.innerHeight +
        buff

      if (window.scrollY > top) {
        el.classList.add(className)
        window.removeEventListener('scroll', f)
      }
    }

    window.addEventListener('scroll', f)
  }
})
