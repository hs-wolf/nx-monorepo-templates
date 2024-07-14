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
    <div class="flex items-center gap-2">
      <p>i18n</p>
      <a
        href="#"
        v-for="locale in availableLocales"
        :key="locale.code"
        @click.prevent="setLocale(locale.code)"
      >
        {{ locale.name }}
      </a>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useAlertStore } from "~/stores";

const { t, locale, locales, setLocale } = useI18n();
const alertStore = useAlertStore();

useHead({ title: t("pages.home.title") });

onMounted(() => {
  alertStore.handleWarning({ message: "oof" });
});

const availableLocales = computed(() => {
  return locales.value.filter((i) => i.code !== locale.value);
});
</script>

<style scoped></style>
