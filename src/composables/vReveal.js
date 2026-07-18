// Directive v-reveal : ajoute la classe "is-visible" quand l'élément entre dans le viewport.
// Usage : <div class="reveal" v-reveal> ... </div>
// Optionnel : v-reveal="{ delay: 150 }" pour décaler l'apparition (en ms).
export const vReveal = {
  mounted(el, binding) {
    const delay = binding.value?.delay ?? 0;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => el.classList.add('is-visible'), delay);
            observer.unobserve(el);
          }
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -60px 0px' }
    );
    observer.observe(el);
  }
};
