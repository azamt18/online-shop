<template>
  <div class="v-carousel-item">
    <img :src="require('../../assets/images/' + item_data.img)" alt="" v-if="imageSlide">
    <div class="item__content" v-else>
      <p>{{ item_data.name }}</p>
      <p>{{ item_data.id }}</p>
    </div>
  </div>
</template>

<script>

export default {
  name: "v-carousel-item",
  props: {
    item_data: {
      type: Object,
      default: () => {}
    },
    imageSlide: { // to show only image
      type: Boolean,
      default: true
    }
  }
}
</script>

<style lang="scss">
  .v-carousel-item {
    margin: 10px auto;
  }
</style>