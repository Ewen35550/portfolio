<template>
  <div class="bg-custom-black-secondary w-full h-screen px-20 py-6">
    <HeaderDesktop />
  </div>
  <div class="bg-custom-black-primary w-full h-screen px-20 py-6"></div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import HeaderDesktop from "@/components/HeaderDesktop.vue";

export default defineComponent({
  name: "HomeView",
  components: { HeaderDesktop },
});
</script>
