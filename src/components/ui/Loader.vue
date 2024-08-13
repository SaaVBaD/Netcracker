<template>
  <div>
    <img class="loader" src="../../assets/icons/loader.svg" alt="loader">
  </div>
</template>

<script setup>

</script>

<style scoped>
@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  50% {
    transform: rotate(180deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

.loader {
  margin-top: 100px;
  animation: spin 1s infinite linear;
}
</style>