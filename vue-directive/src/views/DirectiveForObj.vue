<!-- views/DirectiveForObj.vue -->
<script setup>
import { ref } from "vue";

//Data
const friends = ref([
  { id: "01", name: "홍길동", age: 22 },
  { id: "02", name: "김민식", age: 25 },
]);
</script>
<template>
  <h2>친구 목록</h2>
  <table border="2">
    <thead>
      <tr>
        <th>Id</th>
        <th>이름</th>
        <th>나이</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="info in friends" v-bind:key="info.id">
        <td>{{ info.id }}</td>
        <td>{{ info.name }}</td>
        <td>{{ info.age }}</td>
      </tr>
    </tbody>
  </table>
</template>
<style>
td {
  text-align: center;
}
</style>
