<script setup>
import { RouterView } from 'vue-router'
import HeaderComponent from "@/components/base/HeaderComponent.vue";
</script>

<template>
  <HeaderComponent />
  <RouterView />
</template>

<style>
@import "assets/font.css";

* {
    margin: 0;
    padding: 0;
    border: none;
    box-sizing: border-box;
    font-family: Roboto, sans-serif;
}

:root {
    --white: #ffffff;
    --black: #000000;
    --main-bg: #363232;
    --header-bg: #FA2828;
    --checkbox-bg: #FF5252;
    --light-grey: #C4C4C4;
    --card-bg: #4D4747;
    --card-text: #988F8F;
}

#app {
  background-color: var(--main-bg);
  min-height: 100vh;
}

a {
    text-decoration: none;
    color: inherit;
}

input, textarea {
    outline: none;
}

.container {
    max-width: 1400px;
    margin-inline: auto;
}
.checkbox {
    display: none;
    opacity: 0;
}

.checkbox-label {
  color: var(--light-grey);
  font-size: 16px;
  font-weight: 400;
}

.checkbox + .checkbox-label::before {
    content: '';
    display: inline-block;
    width: 15px;
    height: 15px;
    flex-shrink: 0;
    flex-grow: 0;
    border: 1px solid var(--light-grey);
    margin-right: 10px;
    background-repeat: no-repeat;
    background-position: center center;
}

.checkbox:checked + .checkbox-label::before {
    border-color: var(--checkbox-bg);
    background-color: var(--checkbox-bg);
    background-image: url(./assets/icons/checkmark.svg);
}

.checkbox + .checkbox-label {
    cursor: pointer;
    display: inline-flex;
    align-items: center;
    user-select: none;
}

@media (max-width: 1400px) {
  .container {
    max-width: 90%;
  }
}
</style>
