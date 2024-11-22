<script setup lang="ts">
import { ref, watch } from 'vue';

const num1 = ref(0)
const num2 = ref(0)
const sum = ref(num1.value + num2.value)

function add() {
  sum.value = num1.value + num2.value
}

watch(num1, () => {
  add()
})

watch(num2, () => {
  add()
})
</script>

<template>
  <div>
    <input type="number" v-model="num1">+
    <input type="number" v-model="num2">
    <b>Sum: {{ sum }}</b>
  </div>
</template>

<style lang="css" scoped></style>
