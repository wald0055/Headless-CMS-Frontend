<script setup>
defineProps(['review'])
</script>

<template>
  <div class="card">
    <router-link :to="`/review/${review.id}`">
      <h2>{{ review.Title }}</h2>
    </router-link>

    <p>{{ review.Rating }}/5</p>
  </div>
</template>

<style>
.card {
  border: 1px solid #ddd;
  padding: 1rem;
  margin-bottom: 1rem;
  border-radius: 8px;
}
</style>