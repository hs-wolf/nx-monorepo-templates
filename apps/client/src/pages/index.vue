<template>
  <div class="flex flex-col items-center gap-2">
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
    <div class="flex flex-col items-center">
      <p>AutoAnimate</p>
      <ul v-auto-animate class="flex justify-center gap-2 w-64">
        <li v-for="item in items" :key="item">
          <button @click.prevent="removeItem(item)">
            {{ item }}
          </button>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useAlertStore } from "~/stores";

const { t, locale, locales, setLocale } = useI18n();
const alertStore = useAlertStore();

const items = ref(["😏", "😐", "😑", "😒", "😕"]);

useHead({ title: t("pages.home.title") });

onMounted(() => {
  alertStore.handleWarning({ message: "oof" });
});

const availableLocales = computed(() => {
  return locales.value.filter((i) => i.code !== locale.value);
});

function removeItem(toRemove: string) {
  items.value = items.value.filter((item) => item !== toRemove);
}
</script>

<style scoped></style>
