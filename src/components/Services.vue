<script setup>
import Flourish from './Flourish.vue';

const services = [
  {
    n: 'Lieu & décor',
    text: "Sélection du lieu, scénographie florale et éclairage pensés pour raconter votre histoire, du vin d'honneur au dernier slow."
  },
  {
    n: 'Traiteur & art de la table',
    text: "Dégustation, menu sur-mesure, vaisselle et service : votre réception a le goût et l'allure d'un grand jour, pas d'un budget serré."
  },
  {
    n: 'Photo & vidéo',
    text: "Un binôme photo/vidéo qui connaît notre déroulé par cœur, pour capter les gestes vrais sans jamais s'imposer."
  },
  {
    n: 'Coordination jour J',
    text: "Une cheffe d'orchestre sur place de l'aube à la dernière danse : vous ne gérez rien, vous vivez tout."
  },
  {
    n: 'Papeterie & tenues',
    text: "Faire-part, cachets de cire, tenues et accessoires assortis à votre palette, pensés comme un seul objet cohérent."
  },
  {
    n: 'Budget & planning',
    text: "Un calendrier clair et un budget tenu, partagés avec vous à chaque étape — aucune mauvaise surprise à trois semaines du jour J."
  }
];
</script>

<template>
  <section id="services" class="relative bg-ivoire py-28 px-6">
    <div class="max-w-6xl mx-auto">
      <div class="text-center max-w-2xl mx-auto">
        <p class="font-body text-[0.72rem] uppercase tracking-widest2 text-bordeaux mb-4">Nos services</p>
        <h2 class="font-display text-4xl md:text-5xl text-encre">
          Tout ce qu'un mariage exige,<br class="hidden md:block" /> réuni sous un seul toit.
        </h2>
        <Flourish class="mt-8" />
      </div>

      <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
        <div
          v-for="(s, i) in services"
          :key="s.n"
          class="paper-card p-8 reveal"
          v-reveal="{ delay: (i % 3) * 100 }"
        >
          <h3 class="font-display italic text-2xl text-bordeaux mb-3">{{ s.n }}</h3>
          <p class="font-body text-sm leading-relaxed text-encre/75">{{ s.text }}</p>
        </div>
      </div>
    </div>
  </section>
</template>
