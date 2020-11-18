<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <h1>{{$t('title')}}</h1>
    <combobox-language></combobox-language>
  </div>
</template>

<script>


import ComboboxLanguage from "@/components/ComboboxLanguage";

export default {
  name: 'App',
  components: {
    ComboboxLanguage
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
