<!-- views/directuiveBind.vue -->
<script setup>
//Directive(디렉티브) : HTML Tag를 제어하는 명령어,데이터 바인딩
//v-bind : HTML Tag의 속성에 데이터를 바인드하는 디렉티브
//         단방향 바인딩만 가능(변수 => HTML)

import { ref, reactive, computed } from "vue";
const info = ref("<strong> https://vuejs.org</strong>");
const url = ref("https://vuejs.org");
const isDisabled = ref(true);
const imgAttributes = reactive({
  src: "./src/assets/logo.svg",
  alt: "vue 기본 로고",
  width: "150px",
});
</script>
<template>
  <h2>특정 속성의 경우</h2>
  <p v-html="info"></p>
  <p v-text="info"></p>
  <p>vuejs 공식 사이트 : {{ info }}</p>
  <hr />
  <h2>일반 속성</h2>
  <p><a href="https://vuejs.org">Vue.js 사이트</a></p>
  <p><a v-bind:href="url">Vue.js 사이트</a></p>
  <p>
    <a v-bind:href="url + '/guide/introdution.html'">Vue.js 가이드 페이지</a>
  </p>
  <p><button v-bind:disabled="isDisabled">동의합니다</button></p>
  <p><img alt="vue 로고" v-bind="imgAttributes" /></p>
</template>
