<template>
  <div>{{ testVar }}</div>
</template>
<script setup>
const testVar = ref('old value')
onMounted(() => {
  testVar.value = 'new value'
  console.log('onMounted')
})
</script>
