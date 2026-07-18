<script setup>
const year = new Date().getFullYear();
</script>

<template>
  <footer class="bg-bordeaux-deep border-t border-ivoire/10 py-8 px-6">
    <div class="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
      <p class="font-display italic text-ivoire/70 text-sm">L'Instant Doré</p>
      <p class="font-body text-[0.68rem] uppercase tracking-widest2 text-ivoire/40">
        © {{ year }} — Agence de wedding planning
      </p>
    </div>
  </footer>
</template>
