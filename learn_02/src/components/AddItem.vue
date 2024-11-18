<script setup lang="ts">
import { nextTick, ref, watchEffect } from 'vue';

const items = ref([
    '项目1',
    '项目2',
])

const input_item = ref('');

const activeItemId = ref(0);

const addItemObjectOfAttrs = ref({
    disabled: true,
    title: ''
})

function setActiveItem(id: number) {
    activeItemId.value = id;
}

function addItem() {
    items.value.push(input_item.value);
    input_item.value = '';
    nextTick(() => {
        const container = document.getElementById('scrollContainer');
        if (container?.scrollTo) {
            container.scrollTo(0, container.scrollHeight);
        }
    })
}

// 移除 items 中的最后一个元素
function popItem() {
    items.value.pop();
}

// 移除 items 中的第一个元素
function removeFirstItem()
{
    items.value.shift();
}

watchEffect(()=>{
    if(input_item.value.length==0) {
        addItemObjectOfAttrs.value.disabled = true;
        addItemObjectOfAttrs.value.title = "内容为空，不能执行添加操作";
    } else {
        addItemObjectOfAttrs.value.disabled = false;
        addItemObjectOfAttrs.value.title = '添加项目';
    }
})
</script>

<template>
    <article class="panel is-link mb-6">
        <p class="panel-heading">Link</p>
        <div class="panel-tabs buttons">
            <button class="button is-info is-light" @click="addItem" v-bind="addItemObjectOfAttrs">Add</button>
            <button class="button is-success is-light" @click="popItem">删除最后一个项目</button>
            <button class="button is-warning is-light" @click="removeFirstItem">删除第一个项目</button>
            <button class="button is-danger is-light">Danger</button>
        </div>
        <div class="panel-block">
            <p class="control has-icons-left">
                <input class="input is-link" type="text" placeholder="input" v-model="input_item" />
                <span class="icon is-left">
                    <i class="fas fa-plus" aria-hidden="true"></i>
                </span>
            </p>
        </div>
        <div class="item-container" ref="scrollContainer" id="scrollContainer">
            <a class="panel-block" v-for="(item, id) in items" :key="id" @click="setActiveItem(id)" :class="{'is-active': activeItemId === id}">
                <span class="panel-icon">
                    <i class="fas fa-book" aria-hidden="true"></i>
                </span>
                {{ id }} - {{ item }}
            </a>
        </div>
    </article>
</template>

<style lang="css" scoped>
.item-container {
    height: 420px;
    overflow-y: auto;
}
</style>