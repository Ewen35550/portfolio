<template>
  <div
    class="w-full px-20 py-5 fixed top-0 left-0 flex justify-between items-center"
    :class="[
      view.topOfPage
        ? ''
        : 'bg-custom-black-secondary shadow-md shadow-[#343439]',
    ]"
  >
    <h1 class="text-white text-3xl font-bold font-['Hurricane']">Ewen</h1>

    <ul class="flex gap-10 items-center text-md text-neutral-300 uppercase">
      <template v-for="item in menuItems" :key="item">
        <li
          class="py-1 border-b-2 hover:border-custom-blue cursor-pointer"
          :class="[item.selected ? 'border-custom-blue' : 'border-transparent']"
        >
          {{ item.name }}
        </li>
      </template>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "HeaderDesktop",
  data() {
    return {
      menuItems: [
        {
          name: "Accueil",
          selected: true,
        },
        {
          name: "À propos",
          selected: false,
        },
        {
          name: "Parcours",
          selected: false,
        },
        {
          name: "Projets",
          selected: false,
        },
        {
          name: "Contact",
          selected: false,
        },
      ],
      view: {
        topOfPage: true,
      },
    };
  },
  beforeMount() {
    window.addEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll() {
      if (window.pageYOffset > 0) {
        if (this.view.topOfPage) this.view.topOfPage = false;
      } else {
        if (!this.view.topOfPage) this.view.topOfPage = true;
      }
    },
  },
});
</script>

<style scoped></style>
