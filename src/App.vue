<template>
  <div class="">
    <Navigation class="fixed"/>
    <router-view class=" pt-32 md:container md:mx-auto md:px-4"/>
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
