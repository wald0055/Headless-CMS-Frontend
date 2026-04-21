<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const review = ref(null)

onMounted(async () => {
  const res = await fetch(
    `http://localhost:1337/api/reviews?filters[id][$eq]=${route.params.id}&populate=*`
  )

  const data = await res.json()

  review.value = data.data?.[0]
})
</script>

<template>
  <div v-if="review" class="container">
    <h1>{{ review.Title }}</h1>

    <img
      v-if="review.Image"
      :src="`http://localhost:1337${review.Image.url}`"
      width="100%"
    />

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