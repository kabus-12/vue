<script setup>
import { ref, reactive, computed } from "vue";
</script>

<template>
  <nav>
    <RouterLink to="/home">Home</RouterLink>
    <br />
    <RouterLink to="/memo">Memo</RouterLink>
  </nav>
  <RouterView />
</template>
