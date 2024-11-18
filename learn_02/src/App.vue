<script setup lang="ts">
import Title from '@/components/Title.vue'
import RawHtml from '@/components/RawHtml.vue'
import AttributeBind from '@/components/AttributeBind.vue';
import ComputedDemo from '@/components/ComputedDemo.vue';
import IfElseDemo from '@/components/IfElseDemo.vue';
import ListDemo from './components/ListDemo.vue';
import ListDemo2 from './components/ListDemo2.vue';
import AddItem from './components/AddItem.vue';
import { onMounted } from 'vue';

import { Person } from './scripts/types'

const items: Person[] = [
  { name: "张三", age: 17 },
  { name: "王菲", age: 37 },
  { name: "王力宏", age: 31 },
  { name: "王杰", age: 41 },
  { name: "刘亦菲", age: 25 },
  { name: "吴京", age: 18 },
  { name: "李连杰", age: 34 },
]

onMounted(() => {
  console.log("onMounted: ...");
});
</script>

<template>
  <div class="container">
    <Title title="TS Learn!" cl="has-text-primary is-size-1" />
    <Title title="TS Learn!" cl="has-text-danger is-size-1" />
    <RawHtml />
    <AttributeBind />
    <ComputedDemo />
    <IfElseDemo />
    <ListDemo :messages="items" />
    <ul>
      <ListDemo2 v-for="({ name, age }, id) in items" :name="name" :age="age" :key="id" />
    </ul>
    <AddItem />
  </div>


</template>

<style scoped></style>
