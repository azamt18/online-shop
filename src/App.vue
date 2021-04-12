<template>
  <div id="app">
    <div class="main-wrapper">
      <v-main-wrapper/>
    </div>
  </div>
</template>

<script>
import vMainWrapper from './components/v-main-wrapper'

export default {
  name: 'App',
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
  props: { },
  components: {
    vMainWrapper
  },
  methods: { }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 160px;
}

.main-wrapper {
  /*max-width: 500px;*/
  margin: 0 auto;
}
</style>
