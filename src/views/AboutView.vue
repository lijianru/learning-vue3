<template>
  <el-button type="success"><i-ep-SuccessFilled />Success</el-button>
  <el-button type="success" @click="counterStore.increment"
    ><svg-icon icon-class="logo" />{{ counterStore.count }}</el-button
  >
</template>

<script setup lang="ts">
import { useCounterStore } from '@/stores/counter';

const counterStore = useCounterStore();
</script>
