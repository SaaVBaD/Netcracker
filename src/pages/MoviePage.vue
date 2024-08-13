<template>
  <div class="page">
    <div class="container">
      <div class="wrapper">
        <router-link :to="{ name: 'home' }" class="back">
          <img src="../assets/icons/arrow.svg" alt="arrow">
          <p class="back-text">Назад к списку</p>
        </router-link>
        <div class="block" v-if="movie && !isLoading">
          <movie-card :movie="movie" />
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
import {useRoute} from "vue-router";
import {computed, onMounted, ref} from "vue";
import Loader from "@/components/ui/Loader.vue";
import {useStore} from "vuex";

const route = useRoute()

const store = useStore();

const movieId = computed(() => {
  return route.params.movieId
})
const movie = ref(null)
const isLoading = ref(true)

const fetchMovie = async () => {
  isLoading.value = true

  let res;
  if (String(store.state.selectedMovie.id) === movieId.value) {
    res = store.state.selectedMovie;
    movie.value = res
  } else {
    res = await Movies.getMovieById(movieId.value);
    movie.value = res.data
  }

  isLoading.value = false
}

onMounted( async () => {
  await fetchMovie()
})
</script>

<style scoped>
.wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.back {
  margin-top: 42px;
  width: 100%;
  display: flex;
  align-items: center;
  gap: 10px;
  padding-bottom: 21px;
  border-bottom: 1px solid var(--light-grey);
}

.back-text {
  text-decoration: underline;
  font-size: 20px;
  font-weight: 400;
  color: var(--checkbox-bg);
}

.block {
  width: 100%;
  margin-top: 75px;
}

.noMovies {
  margin-top: 40px;
  align-self: flex-start;
  color: var(--white);
  font-size: 32px;
  font-weight: 500;
}
</style>