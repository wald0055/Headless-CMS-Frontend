<script setup>
defineProps(['modelValue'])
defineEmits(['update:modelValue'])
</script>

<template>
  <input
    :value="modelValue"
    @input="$emit('update:modelValue', $event.target.value)"
    placeholder="Search reviews..."
    class="search"
  />
</template>

<style>
.search {
  padding: 10px;
  width: 100%;
  margin-bottom: 1rem;
}
</style>