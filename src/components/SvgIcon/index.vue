<template>
  <div>
    <svg :style="{ width, height }">
      <use :xlink:href="prefix + name" :fill="color"></use>
    </svg>
  </div>
</template>
<script setup lang="ts">
// 接受父组件传递的参数
defineProps({
  prefix: {
    type: String,
    default: '#icon-',
  },
  // 提供使用的图标名字
  name: {
    type: String,
  },
  color: {
    type: String,
    default: '',
  },
  width: {
    type: String,
    default: '16px',
  },
  height: {
    type: String,
    default: '16px',
  },
})
</script>
<style scoped lang="scss"></style>
