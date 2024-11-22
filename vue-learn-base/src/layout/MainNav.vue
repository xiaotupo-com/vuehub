<!-- 两栏布局的左侧主导航 -->
<script setup lang="ts">
import Logo from '../components/Logo.vue';
</script>

<template>
  <header class="header">
    <Logo />
    <nav class="nav">
      <ul class="list">
        <li class="list-item">
          <RouterLink to="/">
            <span class="xtp-icon iconfont icon-Home"></span>
            Home
          </RouterLink>
        </li>
        <li class="list-item">
          <RouterLink to="/about">
            <span class="xtp-icon iconfont icon-l-about"></span>
            About
          </RouterLink>
        </li>
      </ul>
    </nav>
    <nav class="nav-icon">
      <ul class="list">
        <li class="list-item">
          <RouterLink to="/">
            <span class="xtp-icon iconfont icon-Home"></span>
          </RouterLink>
        </li>
        <li class="list-item">
          <RouterLink to="/about">
            <span class="xtp-icon iconfont icon-l-about"></span>
          </RouterLink>
        </li>
      </ul>
    </nav>
  </header>
</template>

<style lang="scss" scoped>
$nav-font-size: 1.25rem;
$nav-icon-font-size: 1.5rem;

.header {
  background-color: #e3f5f5;
}

.nav {

  font-size: $nav-font-size;
}

.list {
  display: flex;
  flex-direction: column;
}

.list .list-item {
  padding: 0.25rem 0;
  padding-left: 25px;
}

.xtp-icon {
  margin-right: 12px;
  font-size: $nav-font-size;
}

@media (max-width: 600px) {

  .list .list-item {
    padding: 0.25rem 0;
    text-align: center;
  }

  .xtp-icon {
    margin-right: 0;
    font-size: $nav-icon-font-size;
  }
}

@media (min-width: 600px) {
  .nav-icon {
    display: none;
  }
}
</style>
