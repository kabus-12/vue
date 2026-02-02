<!-- views/RefVSreactive.vue -->
<script setup>
import { reactive } from "vue";
//Reactive : CRUD가 가능한 반응형 객체를 만드는 함수 중 하나
//         => Ref와 차이점 1) 객체, 배열만 가능 2) 재할당 불가
const today = new Date();
let timeStr = today.toLocaleTimeString();
const timeStrReactive = reactive({ time: timeStr });

function changeTime() {
  const newDate = new Date();
  const newTimeStr = newDate.toLocaleTimeString();
  timeStrReactive.time = newTimeStr;
}
setInterval(changeTime, 1000);
</script>
<template>
  <h2>시간</h2>
  <p>처음시간 : {{ timeStr }}</p>
  <p>현재시간 : {{ timeStrReactive.time }}</p>
</template>
