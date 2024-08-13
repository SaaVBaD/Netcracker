<template>
  <div class="card">
    <div class="image-wrapper">
      <img v-if="movie.frames" class="image" :src="movie.frames[0]" :alt="movie.title">
      <p v-else class="logo">#MOVIENOW</p>
    </div>
    <div class="block">
      <div class="top">
        <p class="name" @click="selectMovie(movie)">{{ movie.title }}</p>
        <div class="duration" v-if="movie.collapse.duration">
          <p class="time">{{ movie.collapse.duration[0] }}</p>
          <img src="../../assets/icons/duration.svg" alt="duration">
        </div>
      </div>
      <p class="params">{{ movie.year }}<span v-for="genre in movie.genres">, {{ genre }}</span></p>
      <div class="info" v-if="movie.directors">
        <p>РЕЖИССЁР:</p>
        <p>{{ movie.directors.join(', ') }}</p>
      </div>
      <div class="info" v-if="movie.actors">
        <p>АКТЁРЫ:</p>
        <p class="actors">{{ movie.actors.join(', ') }}</p>
      </div>
      <p class="description" v-if="movie.description">{{ movie.description }}</p>
    </div>
  </div>
</template>

<script setup>
import { useStore } from "vuex";
import {useRouter} from "vue-router";

const props = defineProps({
    movie: {
        type: Object
    }
})

const store = useStore();
const router = useRouter();

const selectMovie = (movie) => {
  store.commit('setSelectedMovie', movie);
  router.push({ name: 'movie', params: { movieId: movie.id } });
}
</script>

<style scoped>
.card {
  position: relative;
  display: flex;
  align-items: stretch;
  background-color: var(--card-bg);
  transition: 0.2s;

  color: var(--card-text);
  font-size: 12px;
  font-weight: 700;
}

.image-wrapper {
  display: grid;
  place-items: center;
  width: 200px;
  background-color: var(--light-grey);
}

.image {
  width: 120px;
}

.logo {
  font-size: 22px;
}

.block {
  display: flex;
  flex-direction: column;
  gap: 9px;
  width: 100%;
  padding-left: 24px;
  padding-block: 32px;
}

.info {
  display: flex;
  align-items: flex-start;
  gap: 5px;
}

.top {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.name {
  cursor: pointer;
  transition: 0.2s;
  width: fit-content;
  font-size: 36px;
  font-weight: 700;
  color: var(--white);
}

.duration {
  display: flex;
  align-items: center;
  gap: 12px;
  background-color: var(--light-grey);
  padding: 9px 28px 9px 18px;
  clip-path: polygon(5% 0, 100% 0, 100% 100%, 0 100%);
}

.time {
  font-size: 12px;
  font-weight: 700;
  color: var(--black);
}

.actors {
  color: #E5E5E5;
}

.description {
  margin-top: 5px;
  color: var(--white);
  font-size: 16px;
  font-weight: 400;
}

@media (hover: hover) {
  .card:hover {
    transform: translateY(-8px);
    box-shadow: 0 8px 20px 0 rgba(0, 0, 0, 0.35);
  }

  .name:hover {
    color: var(--checkbox-bg);
  }
}

@media (hover: none) {
  .card:active {
    transform: translateY(-8px);
    box-shadow: 0 8px 20px 0 rgba(0, 0, 0, 0.35);
  }

  .name:hover {
    color: var(--checkbox-bg);
  }
}

@media (max-width: 700px) {
  .card {
    flex-direction: column;
  }

  .image-wrapper {
    width: 100%;
  }

  .image {
    width: 75%;
  }

  .info, .description {
    padding-right: 24px;
  }
}

@media (max-width: 450px) {
  .card {
    font-size: 10px;
  }

  .block {
    padding-left: 10px;
    padding-block: 15px;
  }

  .name {
    font-size: 28px;
  }

  .description {
    padding-right: 10px;
    font-size: 14px;
  }
}
</style>