<template>
  <h1>Home page</h1>
</template>

<script setup lang="ts">
import variables from '@/styles/variables.module.scss';
console.log('🚀 ~ variables:', variables.bgColor);
</script>

<style scoped lang="scss">
h1 {
  background-color: $bg-color;
}
</style>
