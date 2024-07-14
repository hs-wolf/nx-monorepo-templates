<template>
  <div>
    <h2>Available Modules</h2>
    <div>
      <h3>Pinia Stores {{ key }}</h3>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useAlertStore } from "~/stores";

const alertStore = useAlertStore();
const { key } = storeToRefs(alertStore);

onMounted(() => {
  alertStore.handleWarning({ message: "oof" });
});
</script>

<style scoped></style>
