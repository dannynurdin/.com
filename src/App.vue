<template>
  <div class=" min-h-screen z-0">
    <Navigation class="z-20"/>
    <div class="md:grid md:grid-cols-12">
      <router-view class=" md:col-start-3 md:col-span-8 z-10 px-1.5 md:px-0"/>
    </div>
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
@import url('https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@300&display=swap');
.all {
  background-color: #ffffff;
  background-image: url("data:image/svg+xml,%3Csvg width='52' height='26' viewBox='0 0 52 26' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23bcbabf' fill-opacity='0.4'%3E%3Cpath d='M10 10c0-2.21-1.79-4-4-4-3.314 0-6-2.686-6-6h2c0 2.21 1.79 4 4 4 3.314 0 6 2.686 6 6 0 2.21 1.79 4 4 4 3.314 0 6 2.686 6 6 0 2.21 1.79 4 4 4v2c-3.314 0-6-2.686-6-6 0-2.21-1.79-4-4-4-3.314 0-6-2.686-6-6zm25.464-1.95l8.486 8.486-1.414 1.414-8.486-8.486 1.414-1.414z' /%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
}
</style>
