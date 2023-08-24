<template>
    <form class="biu-form" @submit.prevent="handleSubmit">
      <slot></slot>
    </form>
  </template>
  
  <script setup lang="ts">
  
  const emit = defineEmits(['submit']);
  
  const handleSubmit = (event: Event) => {
    emit('submit', event);
  };
  </script>