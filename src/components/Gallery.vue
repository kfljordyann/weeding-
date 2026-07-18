<script setup>
import Flourish from './Flourish.vue';

const stories = [
  {
    names: 'Aïcha & Malik',
    date: 'Décembre 2025 · Cotonou',
    quote:
      "On est arrivées avec une liste de vingt prestataires à contacter. L'Instant Doré a tout repris, et le jour J on n'a eu qu'une chose à faire : profiter.",
    img: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=900&q=80'
  },
  {
    names: 'Fabrice & Léa',
    date: 'Février 2026 · Ouidah',
    quote:
      "La coordination du jour J a changé notre vie ce jour-là : aucun appel, aucun imprévu géré par nous. Juste nous deux, sur la piste.",
    img: 'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?auto=format&fit=crop&w=900&q=80'
  },
  {
    names: 'Odile & Steve',
    date: 'Avril 2026 · Porto-Novo',
    quote:
      "Le décor correspondait exactement à ce qu'on avait décrit en une phrase floue lors du premier rendez-vous. Ils avaient tout compris.",
    img: 'https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&w=900&q=80'
  }
];

const extraShots = [
  'https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&w=700&q=80',
  'https://images.unsplash.com/photo-1606216794074-735e91aa2c92?auto=format&fit=crop&w=700&q=80',
  'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=700&q=80',
  'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=700&q=80'
];
</script>

<template>
  <section id="galerie" class="relative bg-encre py-28 px-6">
    <div class="max-w-6xl mx-auto">
      <div class="text-center max-w-2xl mx-auto">
        <p class="font-body text-[0.72rem] uppercase tracking-widest2 text-or-clair mb-4">Galerie &amp; témoignages</p>
        <h2 class="font-display text-4xl md:text-5xl text-ivoire">
          Des mariages réels,<br class="hidden md:block" /> racontés par ceux qui les ont vécus.
        </h2>
        <Flourish class="mt-8" />
      </div>

      <!-- Témoignages appariés aux photos qui les prouvent -->
      <div class="mt-16 space-y-16">
        <div
          v-for="(s, i) in stories"
          :key="s.names"
          class="grid md:grid-cols-2 gap-8 md:gap-14 items-center reveal"
          :class="i % 2 === 1 ? 'md:[&>*:first-child]:order-2' : ''"
          v-reveal
        >
          <div class="relative aspect-[4/5] overflow-hidden">
            <img
              :src="s.img"
              :alt="`Mariage de ${s.names}, organisé par L'Instant Doré`"
              class="absolute inset-0 w-full h-full object-cover"
            />
            <div class="absolute inset-0 ring-1 ring-inset ring-or/30" />
          </div>
          <div>
            <p class="font-display italic text-2xl md:text-3xl text-ivoire leading-snug">
              « {{ s.quote }} »
            </p>
            <p class="font-body text-[0.72rem] uppercase tracking-widest2 text-or-clair mt-6">{{ s.names }}</p>
            <p class="font-body text-sm text-ivoire/50 mt-1">{{ s.date }}</p>
          </div>
        </div>
      </div>

      <!-- Bandeau photo complémentaire -->
      <div class="mt-24">
        <p class="font-body text-[0.7rem] uppercase tracking-widest2 text-ivoire/50 text-center mb-6">
          Quelques instants de plus, pris sur le vif
        </p>
        <div class="grid grid-cols-2 md:grid-cols-4 gap-3">
          <div
            v-for="(src, i) in extraShots"
            :key="src"
            class="relative aspect-square overflow-hidden reveal-scale group"
            v-reveal="{ delay: i * 80 }"
          >
            <img
              :src="src"
              alt="Instant capturé lors d'un mariage organisé par L'Instant Doré"
              class="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
