<!-- 计算属性例子 -->
<script setup lang="ts">

import {reactive, computed} from 'vue';

const author = reactive({
    name: 'John Doe',
    books: [
        'Vue 2 - Advanced Guide',
        'Vue 3 - Basic Guide',
        'Vue4 - The Mystery'
    ]
})

const publishedBooksMessage = computed(()=>{
    return author.books.length > 0 ? 'Yes' : 'No';
})

</script>
<template>
    <p>Has published books:</p>
    <span>{{ publishedBooksMessage }}</span>
</template>