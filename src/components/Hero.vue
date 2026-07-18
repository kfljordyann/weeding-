<script setup>
import { vReveal } from '../composables/vReveal';
</script>

<template>
  <section id="top" class="relative min-h-screen flex items-center overflow-hidden bg-encre">
    <img
      src="https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1800&q=80"
      alt="Couple de mariés au coucher du soleil"
      class="absolute inset-0 w-full h-full object-cover opacity-45"
    />
    <div class="absolute inset-0 bg-gradient-to-t from-encre via-encre/70 to-encre/30" />
    <div
      class="absolute -top-40 left-1/2 -translate-x-1/2 w-[560px] h-[560px] rounded-full bg-or/20 blur-3xl animate-flicker"
      aria-hidden="true"
    />

    <div class="relative z-10 max-w-4xl mx-auto px-6 text-center pt-24">
      <p class="font-body text-[0.72rem] uppercase tracking-widest2 text-or-clair mb-6 hero-in" style="animation-delay: 0.05s">
        Wedding planning · Cotonou &amp; au-delà
      </p>
      <h1 class="font-display text-5xl md:text-7xl leading-[1.05] text-ivoire hero-in" style="animation-delay: 0.2s">
        Un seul <em class="italic text-or-clair">oui</em>,<br />
        un mariage entièrement orchestré.
      </h1>
      <p class="font-body text-ivoire/75 text-base md:text-lg mt-7 max-w-xl mx-auto hero-in" style="animation-delay: 0.35s">
        Lieu, traiteur, décoration, photographie, coordination du jour J : nous prenons en charge
        chaque détail pour que vous ne viviez que l'essentiel — votre histoire.
      </p>
      <div class="mt-10 flex flex-col sm:flex-row items-center justify-center gap-5 hero-in" style="animation-delay: 0.5s">
        <a
          href="#envies"
          class="border border-or-clair text-or-clair text-[0.72rem] uppercase tracking-widest2 px-7 py-3.5 hover:bg-or-clair hover:text-encre transition-colors"
        >
          Composer mon mariage
        </a>
        <a href="#galerie" class="font-display italic text-ivoire/80 text-lg hover:text-or-clair transition-colors">
          Voir les mariages réalisés →
        </a>
      </div>
    </div>
  </section>
</template>
