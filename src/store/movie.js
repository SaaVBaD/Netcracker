import { createStore } from 'vuex';

export default createStore({
  state: {
    selectedMovie: {},
  },
  mutations: {
    setSelectedMovie: (state, movie) => {
      state.selectedMovie = movie;
    },
  },
});