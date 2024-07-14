import withNuxt from "./.nuxt/eslint.config.mjs";

export default withNuxt({
  files: ["**/*.js", "**/*.jsx", "**/*.ts", "**/*.tsx", "**/*.vue"],
  rules: {
    "vue/multi-word-component-names": "off",
    "vue/require-default-prop": "off",
  },
});
