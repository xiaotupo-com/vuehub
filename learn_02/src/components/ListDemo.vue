<!-- 列表渲染 -->
<script setup lang="ts">
import { ref } from 'vue';
import { Person } from '../scripts/types'


interface props {
    messages: Array<Person>
}

defineProps<props>()

const items = ref([
    { message: 'Foo' },
    { message: 'Bar' }
])

</script>

<template>
    <div class="content is-normal box">
        <ul>
            <li v-for="(item, index) of items" :key="item.message">{{ index }} - {{ item.message }}</li>
        </ul>
        <table class="table">
            <thead>
                <tr>
                    <th><abbr title="ID">id</abbr></th>
                    <th><abbr title="用户的名字">名字</abbr></th>
                    <th><abbr title="用户的年龄">年龄</abbr></th>
                </tr>

            </thead>
            <tbody>
                <tr v-for="({ name, age }, id) in messages" :key="id">
                    <td>{{ id }}</td>
                    <td>{{ name }}</td>
                    <td>{{ age }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>