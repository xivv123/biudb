<template>
    <input
      :value="modelValue"
      @input="updateValue"
      :placeholder="placeholder"
    />
  </template>
  
  <script>
  import { ref, watchEffect } from 'vue';
  
  export default {
    name: 'MyInput',
    props: {
      modelValue: String,
      placeholder: String,
    },
    setup(props, { emit }) {
      const inputValue = ref(props.modelValue);
  
      watchEffect(() => {
        inputValue.value = props.modelValue;
      });
  
      const updateValue = (event) => {
        emit('update:modelValue', event.target.value);
      };
  
      return {
        inputValue,
        updateValue,
      };
    },
  };
  </script>
  
  <style scoped>
  </style>