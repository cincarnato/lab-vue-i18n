<template>
<select v-model="language">
  <option value="es">Español</option>
  <option value="en">English</option>
</select>
</template>

<script>
export default {
  name: "ComboboxLanguage",
  computed:{
    language:{
      get(){
        return this.$store.state.language
      },
      set(val){
        this.$store.commit('setLanguage',val)
      }
    }
  }
}
</script>

<style scoped>

</style>
