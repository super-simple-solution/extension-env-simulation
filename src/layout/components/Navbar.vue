<template>
  <div class="navbar flex items-center">
    <sidebar class="sidebar-horizontal-container" style="flex: 1" />
  </div>
</template>

<script lang="ts" setup>
import Sidebar from './Sidebar/index.vue'
</script>

<style lang="scss" scoped>
.navbar {
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  width: 100vw;
  height: 48px;
  padding: 0 24px;
  overflow: hidden;
  background-color: #000429;
  box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);
  color: #999;
  font-size: 14px;

  .nav-home {
    display: inline-block;
    cursor: pointer;
  }

  .right-menu {
    display: flex;
    height: 100%;
    line-height: 48px;

    &:focus {
      outline: none;
    }

    .user-name {
      margin-right: 5px;
      cursor: pointer;
    }
  }
}
</style>
