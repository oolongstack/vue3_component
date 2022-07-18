module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:vue/vue3-recommended",
    "plugin:@typescript-eslint/recommended",
    "@vue/typescript/recommended", // 校验.vue文件内的ts语法
  ],
  parserOptions: {
    ecmaVersion: "latest",
    parser: "@typescript-eslint/parser",
    sourceType: "module",
  },
  //   plugins: ["vue", "@typescript-eslint"],
  rules: {
    "vue/html-self-closing": "off",
    "vue/max-attributes-per-line": "off",
    "vue/singleline-html-element-content-newline": "off",
    "vue/multi-word-component-names": "off",
  },
  globals: {
    defineProps: "readonly",
    defineOptions: "readonly",
  },
};
