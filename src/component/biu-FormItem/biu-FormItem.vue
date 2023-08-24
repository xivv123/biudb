<template>
    <div class="biu-form-item">
      <label class="biu-form-item__label">{{ label }}</label>
      <div class="biu-form-item__content">
        <slot></slot>
        <div class="biu-form-item__error" v-if="error">{{ error }}</div>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref, toRefs } from 'vue';
  
  const props = withDefaults(defineProps<{
    label?: string;
    error?: string;
  }>(), {
    label: '',
    error: ''
  });
  
  const { label, error } = toRefs(props);
  </script>