<template>
  <div>
    <input type="text" :value="modelValue" @input="(event) => $emit('update:modelValue', event.target.value)" />
  </div>
</template>
<script setup>
defineProps({
  modelValue: {
    type: String,
    required: true,
  },
})
defineEmits(['update:modelValue'])
</script>
