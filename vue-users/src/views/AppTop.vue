<!-- views/AppTop.vue -->
<script setup>
import { RouterLink } from "vue-router";
import { useCounterStore } from "../stores/counter";
import { storeToRefs } from "pinia";

const store = useCounterStore();
const { count, doubleCount } = storeToRefs(store);
const { increment } = store;
</script>
<template>
  <h1>Top</h1>
  <p>Top</p>
  <h3>총 회원수 : {{ count }}명</h3>
  <p><RouterLink to="./member/list">회원 관리는 여기서</RouterLink></p>
</template>
