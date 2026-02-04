<script setup>
import { ref, reactive, computed } from "vue";

/*
  사용할 데이터 참고
  프로필 이미지 : https://picsum.photos/200
  공식사이트    : https://ko.vuejs.org/tutorial/#step-1
*/
const firstName = ref("길동");
const lastName = ref("홍");
const url = ref("https://ko.vuejs.org/tutorial/#step-1");
const msg = ref("반갑습니다! Vue.js 1일차 학습 중입니다.");
const fullName = computed(() => {
  return lastName.value + " " + firstName.value;
});

// const img = reactive({
//   src: "https://picsum.photos/200",
//   alt: "사진",
// });
const img = ref("https://picsum.photos/200");
</script>

<template>
  <div class="card">
    <!-- <img alt="프로필 사진" class="profile-img" v-bind="img" /> -->
    <img alt="프로필 사진" class="profile-img" v-bind:src="img" />
    <h1>{{ fullName }}</h1>
    <p>{{ msg }}</p>
    <a target="_blank" class="link-btn" v-bind:href="url">공식 문서 방문하기</a>
  </div>
</template>

<style scoped>
.card {
  width: 300px;
  margin: 50px auto;
  padding: 20px;
  border-radius: 15px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
  font-family: sans-serif;
  background-color: #f9f9f9;
}
.profile-img {
  width: 120px;
  height: 120px;
  border-radius: 50%;
  object-fit: cover;
  border: 3px solid #42b883;
}
.link-btn {
  display: inline-block;
  margin-top: 15px;
  padding: 10px 20px;
  background-color: #42b883;
  color: white;
  text-decoration: none;
  border-radius: 5px;
}
</style>
