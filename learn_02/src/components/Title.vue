<script setup lang="ts">
import { ref } from 'vue';
import { TitleProps, Person } from '../scripts/types';

const msg = ref("Hello,World!");

defineProps<TitleProps>();


function greet(person: Person) {
    return "Hello" + person.name;
}

const hello : Person = {name: "张三", age: 12};

greet(hello);

</script>

<template>
<h2 class="title" :style="{'color': color}" :class="cl">
    {{ title }} - {{ msg }}
</h2>
</template>

<style scoped lang="scss">

.title {
    font-size: 27px;
}
</style>112233
