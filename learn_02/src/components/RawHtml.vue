<script setup lang="ts">
import { ref } from 'vue';


const rawhtml = ref("<b>hello,world</b>");
const texthtml = ref("<h1>hello,world</h1>");
</script>

<template>
<p>渲染原始 <em>HTML</em> {{ texthtml }} <span v-html="rawhtml"></span></p>
</template>