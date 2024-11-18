<!-- 条件渲染例子 -->
<script setup lang="ts">
import { computed, ref } from 'vue';

const awesome = ref(false)
const isPrimary = ref(true);
const isWarning = ref(false);
const ok = ref(false);

const classObjects = computed(()=>({
    'button': true,
    'is-primary': isPrimary.value,
    'is-warning': isWarning.value
}))


function toggle(){
    awesome.value = !awesome.value;
    isPrimary.value = !isPrimary.value;
    isWarning.value = !isWarning.value;
    ok.value = !ok.value;
}
</script>

<template>
    <div>
        <h1 v-show="ok">IfElseDemo</h1>
        <button @click="toggle()" :class="classObjects">Toggle</button>
        <h1 v-if="awesome">Vue is awesome</h1>
        <h1 v-else>Oh no</h1>
    </div>
</template>

<style lang="css" scoped>

</style>