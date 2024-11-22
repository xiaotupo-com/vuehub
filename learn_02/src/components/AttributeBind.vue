<script setup lang="ts">
import { ref } from 'vue';

const title_id = "title-id";
const count = ref(0);
const isButtonDisabled = ref(false);

const objectOfAttrs = {
    class: "button",
    style: ""
}

function count_increment() {
    count.value++;
    if (count.value >= 10) {
        isButtonDisabled.value = true; // 当 count >= 10 时禁用按钮
        objectOfAttrs.style = "background: red;";
    }
}

</script>

<template>
    <h2 :id="title_id">hello,world!</h2>
    <div>
        <button @click="count_increment" v-bind="objectOfAttrs" :disabled="isButtonDisabled">Button</button>
        <div class="box">
            <span>{{ count }}</span>
        </div>
    </div>

</template>

<style lang="css" scoped>
#title-id {
    color: red;
}
</style>
