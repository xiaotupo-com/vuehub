<script setup lang="ts">
</script>

<template>
  <div class="logo">
    <h1 class="title">小土坡</h1>
  </div>
</template>

<style lang="css" scoped>
.logo {
  height: 90px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.logo .title {
  font-size: 1.5rem;
}

@media (max-width: 600px) {
  .logo {
    display: none;
  }
}
</style>
