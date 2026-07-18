<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const links = [
  { href: '#services', label: 'Services' },
  { href: '#galerie', label: 'Galerie' },
  { href: '#envies', label: 'Que voulez-vous ?' },
  { href: '#contact', label: 'Contact' }
];

const scrolled = ref(false);

const onScroll = () => {
  scrolled.value = window.scrollY > 40;
};

onMounted(() => window.addEventListener('scroll', onScroll));
onUnmounted(() => window.removeEventListener('scroll', onScroll));
</script>

<template>
  <header
    class="fixed top-0 left-0 right-0 z-50 transition-colors duration-500"
    :class="scrolled ? 'bg-ivoire/90 backdrop-blur-md shadow-[0_1px_0_rgba(92,26,52,0.15)]' : 'bg-transparent'"
  >
    <nav class="max-w-6xl mx-auto flex items-center justify-between px-6 md:px-10 py-4">
      <a href="#top" class="font-display italic text-2xl tracking-wide text-bordeaux">
        L'Instant Doré
      </a>
      <ul class="hidden md:flex items-center gap-8 font-body text-[0.72rem] uppercase tracking-widest2 text-encre/80">
        <li v-for="l in links" :key="l.href">
          <a :href="l.href" class="hover:text-bordeaux transition-colors">{{ l.label }}</a>
        </li>
      </ul>
      <a
        href="#contact"
        class="hidden md:inline-block border border-bordeaux text-bordeaux text-[0.7rem] uppercase tracking-widest2 px-5 py-2.5 hover:bg-bordeaux hover:text-ivoire transition-colors"
      >
        Prendre RDV
      </a>
    </nav>
  </header>
</template>
