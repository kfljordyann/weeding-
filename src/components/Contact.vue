<script setup>
import { ref } from 'vue';
import Flourish from './Flourish.vue';

const sent = ref(false);

const handleSubmit = () => {
  // Branchez ici votre endpoint (API REST, service d'e-mail type Resend/Formspree, CRM, etc.)
  sent.value = true;
};
</script>

<template>
  <section id="contact" class="relative bg-bordeaux-deep py-28 px-6">
    <div class="max-w-5xl mx-auto">
      <div class="text-center max-w-2xl mx-auto">
        <p class="font-body text-[0.72rem] uppercase tracking-widest2 text-or-clair mb-4">Contact</p>
        <h2 class="font-display text-4xl md:text-5xl text-ivoire">
          Racontez-nous votre mariage.<br class="hidden md:block" /> On vous répond sous 48h.
        </h2>
        <Flourish class="mt-8" />
      </div>

      <div class="grid md:grid-cols-[1fr_1.2fr] gap-14 mt-16 items-start">
        <!-- Cachets de cire -->
        <div class="flex flex-wrap md:flex-col gap-8 justify-center md:justify-start items-center md:items-start">
          <a href="tel:+22900000000" class="flex flex-col items-center gap-3 group">
            <span class="cachet"><span class="cachet-label">Appeler</span></span>
            <span class="font-body text-xs text-ivoire/60 group-hover:text-or-clair transition-colors">
              +229 00 00 00 00
            </span>
          </a>
          <a href="mailto:bonjour@linstantdore.com" class="flex flex-col items-center gap-3 group">
            <span class="cachet"><span class="cachet-label">Écrire</span></span>
            <span class="font-body text-xs text-ivoire/60 group-hover:text-or-clair transition-colors">
              bonjour@linstantdore.com
            </span>
          </a>
          <a
            href="https://wa.me/22900000000"
            target="_blank"
            rel="noopener noreferrer"
            class="flex flex-col items-center gap-3 group"
          >
            <span class="cachet"><span class="cachet-label">WhatsApp</span></span>
            <span class="font-body text-xs text-ivoire/60 group-hover:text-or-clair transition-colors">
              Réponse rapide
            </span>
          </a>
        </div>

        <!-- Formulaire -->
        <form @submit.prevent="handleSubmit" class="paper-card p-8 md:p-10 reveal" v-reveal>
          <div v-if="sent" class="text-center py-10">
            <p class="font-display italic text-2xl text-bordeaux">Message envoyé.</p>
            <p class="font-body text-sm text-encre/60 mt-3">
              Merci — nous revenons vers vous sous 48h pour parler de votre jour J.
            </p>
          </div>
          <div v-else class="grid sm:grid-cols-2 gap-5">
            <label class="flex flex-col gap-1.5 text-sm">
              <span class="font-body text-[0.68rem] uppercase tracking-widest2 text-encre/60">Vos prénoms</span>
              <input
                required
                type="text"
                placeholder="Aïcha & Malik"
                class="bg-transparent border-b border-encre/20 focus:border-bordeaux outline-none py-2 font-body placeholder:text-encre/30"
              />
            </label>
            <label class="flex flex-col gap-1.5 text-sm">
              <span class="font-body text-[0.68rem] uppercase tracking-widest2 text-encre/60">Date envisagée</span>
              <input type="date" class="bg-transparent border-b border-encre/20 focus:border-bordeaux outline-none py-2 font-body" />
            </label>
            <label class="flex flex-col gap-1.5 text-sm sm:col-span-2">
              <span class="font-body text-[0.68rem] uppercase tracking-widest2 text-encre/60">E-mail</span>
              <input
                required
                type="email"
                placeholder="vous@exemple.com"
                class="bg-transparent border-b border-encre/20 focus:border-bordeaux outline-none py-2 font-body placeholder:text-encre/30"
              />
            </label>
            <label class="flex flex-col gap-1.5 text-sm sm:col-span-2">
              <span class="font-body text-[0.68rem] uppercase tracking-widest2 text-encre/60">
                Parlez-nous de votre mariage
              </span>
              <textarea
                rows="4"
                placeholder="Style, lieu envisagé, nombre d'invités, budget approximatif..."
                class="bg-transparent border-b border-encre/20 focus:border-bordeaux outline-none py-2 font-body placeholder:text-encre/30 resize-none"
              ></textarea>
            </label>
            <button
              type="submit"
              class="sm:col-span-2 mt-2 bg-bordeaux text-ivoire text-[0.72rem] uppercase tracking-widest2 px-7 py-3.5 hover:bg-bordeaux-deep transition-colors"
            >
              Envoyer ma demande
            </button>
          </div>
        </form>
      </div>
    </div>
  </section>
</template>
