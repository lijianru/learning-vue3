<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router';
</script>

<template>
  <el-menu mode="horizontal">
    <el-menu-item>
      <RouterLink to="/">Home</RouterLink>
    </el-menu-item>
    <el-menu-item>
      <RouterLink to="/about">About</RouterLink>
    </el-menu-item>
  </el-menu>

  <RouterView />
</template>
