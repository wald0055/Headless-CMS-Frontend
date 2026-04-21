<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { reviews } from '../data/reviews'

const route = useRoute()
const review = ref(null)

onMounted(() => {
  review.value = reviews.find(
    r => r.documentId === route.params.id
  )
})
</script>

<template>
  <div v-if="review" class="container">
    <h1>{{ review.Title }}</h1>

    <p>{{ review.Content }}</p>

    <p><strong>Rating:</strong> {{ review.Rating }}/5</p>
  </div>

  <div v-else>
    <p>Loading review...</p>
  </div>
</template>

<style>
.container {
  max-width: 800px;
  margin: auto;
  padding: 20px;
}
</style>