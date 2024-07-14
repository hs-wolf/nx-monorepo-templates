<template>
  <div class="flex flex-col items-center">
    <h1 class="font-bold">Available Modules</h1>
    <div>
      <p>Pinia</p>
    </div>
    <div>
      <p>Tailwind</p>
    </div>
    <div>
      <p>Vueuse</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useAlertStore } from "~/stores";

const alertStore = useAlertStore();

useHead({ title: "Home" });

onMounted(() => {
  alertStore.handleWarning({ message: "oof" });
});
</script>

<style scoped></style>
