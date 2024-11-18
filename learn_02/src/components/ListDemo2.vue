<script setup lang="ts">
import { Person } from '../scripts/types';

defineProps<Person>()
</script>

<template>
    <li>{{ name }} - {{ age }}</li>
</template>