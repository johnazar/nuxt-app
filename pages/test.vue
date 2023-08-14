<template>
  <div>
    <TextInput v-model="myvar" />
    <br />
    {{ myvar }}
  </div>
</template>
<script setup>
const myvar = ref('start value')
</script>
