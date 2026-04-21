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
</style>