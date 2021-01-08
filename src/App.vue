<template>
  <div class="">
    <Navigation class=""/>
    <router-view class=" pt-32 md:container md:mx-auto md:px-20 xl:px-40"/>
    
  </div>
</template>

<script>
import Navigation from "@/components/Navigation.vue"
export default {
  components: {
    Navigation
  },
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Xanh+Mono&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap');
</style>
