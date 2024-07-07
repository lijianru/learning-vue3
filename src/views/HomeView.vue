<template>
  <h1>Home page</h1>
</template>

<script setup lang="ts">
import { getUserList } from '@/client/user/apis';
import variables from '@/styles/variables.module.scss';
console.log('🚀 ~ variables:', variables.bgColor);

onMounted(async () => {
  const data = await getUserList(1);
  console.log('🚀 ~ onMounted ~ data:', data);
});
</script>

<style scoped lang="scss">
h1 {
  background-color: $bg-color;
}
</style>
