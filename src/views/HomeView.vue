<script setup lang="ts">
import { ref } from "vue";

const msg = ref("Hello Vite + Vue 3 Template");
const count = ref(0);
</script>

<template>
  <section
    class="flex flex-col items-center justify-center gap-5 px-2 text-center"
  >
    <h1>{{ msg }}</h1>

    <img alt="Vue logo" src="/vite.svg" class="h-32 w-32" />

    <button
      class="rounded-md border border-black p-2"
      type="button"
      @click="count++"
    >
      count is {{ count }}
    </button>

    <span>
      <p>
        Edit
        <code class="rounded-md bg-[#ebebeb] p-1 font-barlow"
          >views/HomeView.vue</code
        >
        to test HMR
      </p>

      <p>
        This template is also available in
        <a
          class="text-blue-500 hover:underline"
          href="https://github.com/wesleyara/vue-template"
          target="_blank"
        >
          GitHub
        </a>
      </p>

      <p>
        Have configured Eslint, Prettier, Pinia, TailwindCSS, VueIcons, VueUse,
        Vue Devtools and Vue Router.
      </p>
    </span>
  </section>
</template>
