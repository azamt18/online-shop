<template>
  <div class="carousel-wrapper">
    <div
        class="v-carousel"
        :style=" { 'margin-left': '-' + (100 * currentSlideIndex) + '%' } "
    >
      <v-carousel-item
        v-for="item in carousel_data"
        :key="item.id"
        :item_data="item"
      />
    </div>
    <div class="v-carousel__btn">
      <v-btn
          @click="prevSlide"
          :disabled="false"
          :success="true"
          appendIcon="navigate_before"
          title="Previous"
      />
      <v-btn
          @click="nextSlide"
          :disabled="false"
          :success="true"
          prependIcon="navigate_next"
          title="Next"
      />
    </div>
  </div>
</template>

<script>
import vCarouselItem from './v-carousel-item'
import vBtn from '../button/v-btn'

export default {
  name: "v-carousel",
  props: {
    carousel_data: {
      type: Array,
      default: () => []
    },
    interval: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      currentSlideIndex: 0
    }
  },
  components: {
    vCarouselItem,
    vBtn
  },
  methods: {
    prevSlide() {
      if (this.currentSlideIndex > 0)
        this.currentSlideIndex--;
      console.log(this.currentSlideIndex)
    },
    nextSlide() {
      if (this.currentSlideIndex >= this.carousel_data.length -  1) {
        this.currentSlideIndex = 0;
      } else {
        this.currentSlideIndex++;
      }
      console.log(this.currentSlideIndex)
    }
  },
  mounted() {
    let vm = this;
    setInterval(function () {
      vm.nextSlide()
    }, vm.interval);
  }
}
</script>

<style lang="scss">
  .carousel-wrapper {
    max-width: 500px;
    overflow: hidden;
    margin: 0 auto;
  }
  .v-carousel {
    display: flex;
    transition: all ease .5s;

    &__btn {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
  }
</style>