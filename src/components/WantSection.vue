<script setup>
import { ref, computed } from 'vue';
import Flourish from './Flourish.vue';

const wants = [
  { id: 'zen', label: 'Ne rien gérer moi-même', answer: 'coordination complète, du premier appel au dernier prestataire payé.' },
  { id: 'beau', label: "Un décor qui sort de l'ordinaire", answer: 'une scénographie sur-mesure, pensée pour votre lieu et votre palette.' },
  { id: 'budget', label: 'Garder mon budget sous contrôle', answer: 'un budget négocié, suivi et partagé avec vous à chaque étape.' },
  { id: 'temps', label: 'Gagner du temps', answer: 'un seul point de contact au lieu de vingt prestataires à relancer.' },
  { id: 'famille', label: 'Profiter, en famille, le jour J', answer: 'une équipe sur place qui absorbe les imprévus à votre place.' },
  { id: 'souvenirs', label: 'Des souvenirs à la hauteur du jour', answer: "photo, vidéo et détails pensés pour qu'il ne manque aucun instant." }
];

const selected = ref([]);

const toggle = (id) => {
  selected.value = selected.value.includes(id)
    ? selected.value.filter((x) => x !== id)
    : [...selected.value, id];
};

const summary = computed(() => {
  if (selected.value.length === 0) {
    return 'Chaque envie que vous cochez ci-dessus est déjà incluse dans une seule formule.';
  }
  const n = selected.value.length;
  return `${n} envie${n > 1 ? 's' : ''} sur ${wants.length} — et une seule formule pour toutes les combler.`;
});
</script>

<template>
  <section id="envies" class="relative bg-ivoire py-28 px-6">
    <div class="max-w-4xl mx-auto text-center">
      <p class="font-body text-[0.72rem] uppercase tracking-widest2 text-bordeaux mb-4">
        Et vous, que voulez-vous ?
      </p>
      <h2 class="font-display text-4xl md:text-5xl text-encre">
        Dites-nous ce qui compte.<br class="hidden md:block" /> On s'occupe du reste.
      </h2>
      <Flourish class="mt-8 mb-4" />
      <p class="font-body text-sm text-encre/60 max-w-md mx-auto">
        Touchez ce qui vous parle — vous verrez que tout mène à la même réponse.
      </p>
    </div>

    <div class="max-w-3xl mx-auto mt-14 grid sm:grid-cols-2 gap-4">
      <button
        v-for="w in wants"
        :key="w.id"
        type="button"
        @click="toggle(w.id)"
        :aria-pressed="selected.includes(w.id)"
        class="text-left px-6 py-5 border transition-colors duration-300"
        :class="
          selected.includes(w.id)
            ? 'bg-bordeaux border-bordeaux text-ivoire'
            : 'bg-transparent border-encre/15 text-encre hover:border-bordeaux/50'
        "
      >
        <span class="font-display italic text-lg block">{{ w.label }}</span>
        <Transition name="grow">
          <span
            v-if="selected.includes(w.id)"
            class="block font-body text-sm text-or-clair mt-2 overflow-hidden"
          >
            → {{ w.answer }}
          </span>
        </Transition>
      </button>
    </div>

    <div class="max-w-2xl mx-auto text-center mt-16 paper-card px-8 py-10 reveal" v-reveal>
      <p class="font-display text-2xl md:text-3xl italic text-bordeaux leading-snug">
        {{ summary }}
      </p>
      <p class="font-body text-sm text-encre/60 mt-4">
        La formule Gestion Totale : un interlocuteur, un budget, un calendrier — pour l'intégralité de votre mariage.
      </p>
      <a
        href="#contact"
        class="inline-block mt-7 border border-bordeaux text-bordeaux text-[0.72rem] uppercase tracking-widest2 px-7 py-3.5 hover:bg-bordeaux hover:text-ivoire transition-colors"
      >
        Demander la formule Gestion Totale
      </a>
    </div>
  </section>
</template>

<style scoped>
.grow-enter-active,
.grow-leave-active {
  transition: all 0.3s ease;
}
.grow-enter-from,
.grow-leave-to {
  opacity: 0;
  max-height: 0;
}
.grow-enter-to,
.grow-leave-from {
  opacity: 1;
  max-height: 60px;
}
</style>
