<template>
  <div class="page">
    <div class="container">
      <div class="wrapper">
        <div class="top">
          <h1 class="title">Фильмы</h1>
          <div class="inputs">
            <div class="input-block">
              <input
                  class="checkbox"
                  id="name"
                  type="checkbox"
                  v-model="sortByName"
              >
              <label class="checkbox-label" for="name">Отсортировать по названию</label>
            </div>
            <div class="input-block">
              <input
                  class="checkbox"
                  id="year"
                  type="checkbox"
                  v-model="sortByYear"
              >
              <label class="checkbox-label" for="year">Отсортировать по году</label>
            </div>
          </div>
        </div>
        <div class="list" v-if="movies.length > 0 && !isLoading">
          <movie-card v-for="movie in sortedMovies" :movie="movie" />
        </div>
        <Loader v-else-if="isLoading" />
        <p v-else class="noMovies">К сожалению, по вашему запросу ничего не найдено...</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import MovieCard from "@/components/movie/MovieCard.vue";
import {Movies} from "@/core/api/movies.js";
import {computed, onMounted, ref, watch} from "vue";
import Loader from "@/components/ui/Loader.vue";

const movies = ref([])
const isLoading = ref(true)
const sortByYear = ref(false)
const sortByName = ref(false)

const fetchMovies = async () => {
  isLoading.value = true

  const res = await Movies.getMovies();
  movies.value = res.data

  isLoading.value = false
}

onMounted( async () => {
  await fetchMovies();
})

watch(sortByYear, (newValue, oldValue) => {
  if(newValue === true) {
    sortByName.value = false
  }
})
watch(sortByName, (newValue, oldValue) => {
  if(newValue === true) {
    sortByYear.value = false
  }
})

const sortedMovies = computed(() => {
  if(sortByName.value) {
    return [...movies.value].sort((a, b) => a.title.localeCompare(b.title, 'en'))
  }
  if(sortByYear.value) {
    return [...movies.value].sort((a, b) => a.year - b.year)
  }
  return movies.value
})
</script>

<style scoped>
.wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 50px;
}

.top {
  width: 100%;
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  gap: 18px;
  padding-bottom: 18px;
  border-bottom: 1px solid var(--light-grey);
}

.title {
  color: var(--white);
  font-size: 32px;
  font-weight: 500;
}

.inputs {
  display: flex;
  align-items: center;
  gap: 32px;
}

.input-block {
  display: flex;
  gap: 10px;
}

.list {
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.noMovies {
  margin-top: 50px;
  align-self: flex-start;
  color: var(--white);
  font-size: 32px;
  font-weight: 500;
}

@media (max-width: 700px) {
  .inputs {
    flex-direction: column;
    align-items: flex-start;
    gap: 20px;
  }
}
</style>