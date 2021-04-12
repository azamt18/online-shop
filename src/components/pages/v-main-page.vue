<template>
  <div class="v-main-page">
    <h1>Online shop</h1>
    <p>
      <router-link :to="{name: 'catalog'}">Catalog</router-link>
    </p>
    <p>
      <router-link :to="{name: 'button'}">Button Page</router-link>
    </p>
    <p>
      <router-link :to="{name: 'textfield'}">Text field Page</router-link>
    </p>
    <p>
      <router-link :to="{name: 'carousel'}">Carousel Page</router-link>
    </p>
    <p>
      <router-link :to="{name: 'table'}">Table Page</router-link>
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