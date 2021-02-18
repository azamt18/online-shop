<template>
  <div class="v-main-page">
    <h1>Online shop</h1>
    <p>
      <router-link :to="{name: 'catalog'}">Catalog</router-link>
    </p>
  </div>
</template>

<script>
export default {
  name: "main-page"
}
</script>

<style scoped>

</style>