<template>
  <v-carousel
    :carousel_data="sliderItems"
    :interval=2500
  />
</template>

<script>
import vCarousel from './v-carousel'

export default {
  name: "carousel-page",
  data() {
    return {
      sliderItems: [
        {id: 1, name: 'img1', img: 'book_1.jpg'},
        {id: 2, name: 'img2', img: 'book_2.jpg'},
        {id: 3, name: 'img3', img: 'book_3.jpg'},
        {id: 4, name: 'img4', img: 'book_4.jpg'},
        {id: 5, name: 'img5', img: 'book_2.jpg'}
      ]
    }
  },
  components: {
    vCarousel
  }
}
</script>

<style scoped>

</style>