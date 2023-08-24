<template>
  <button :class="['button', type]" @click="handleClick">
    <slot></slot>
  </button>
</template>

<script setup lang="ts">
import { ref, toRefs } from 'vue';

const props = withDefaults(defineProps<{
  type?: string;
}>(), {
  type: 'default'
});

const { type } = toRefs(props);

const emit = defineEmits(['click']);

const handleClick = (event: Event) => {
  emit('click', event);
};
</script>

<style scoped>
.button {
  padding: 10px 20px;
  font-size: 16px;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s;
}
.button.default {
  background-color: #3498db;
  color: white;
}
.button.primary {
  background-color: #2ecc71;
  color: white;
}
.button.danger {
  background-color: #e74c3c;
  color: white;
}
</style>