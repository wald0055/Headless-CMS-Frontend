<script setup>
import { ref, onMounted, computed } from 'vue'
import ReviewCard from '../components/ReviewCard.vue'
import SearchBar from '../components/SearchBar.vue'
import { reviews as localReviews } from '../data/reviews'

const reviews = ref([])
const search = ref('')

onMounted(() => {
  reviews.value = localReviews
})

const filteredReviews = computed(() => {
  return reviews.value.filter(r =>
    r.Title?.toLowerCase().includes(search.value.toLowerCase())
  )
})
</script>

<template>
  <div class="container">
    <h1>Welcome to the Algonquin Game Review Hub</h1>

    <h3>Check out some of our reviews on your favourite games below!</h3>

    <SearchBar v-model="search" />

    <ReviewCard
      v-for="review in filteredReviews"
      :key="review.id"
      :review="review"
    />
  </div>
</template>

<style>
.container {
  max-width: 800px;
  margin: auto;
}
h1 {
  color:#3b82f6;
  text-align: center;
  font-size: 4rem;
}
h3 {
  text-align: center;
}
</style>