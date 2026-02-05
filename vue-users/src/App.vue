<script setup>
import { RouterView } from "vue-router";
</script>

<template>
  <h1>Vue Router 샘플</h1>
  <br />
  <main>
    <!-- Vue 라우터를 통해 컴포넌트를 출력 -->
    <RouterView />
  </main>
</template>

<style scoped>
main {
  border: 2px solid black;
}
</style>
