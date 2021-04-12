<template>
  <v-btn
      @click="clickBtn"
      :click="clickBtn"
      :disabled="false"
      :success="true"
      prependIcon="cancel"
      appendIcon="edit"
  />
</template>

<script>
import vBtn from './v-btn'

export default {
  name: "v-btn-page",
  data() {
    return {
      counter: 0
    }
  },
  components: {
    vBtn
  },
  methods: {
    clickBtn() {
      this.counter++;
      console.log('methods: button clicked')
    }
  },
  watch: {
    counterView() {
      console.log(this.counter);
    }
  }
}
</script>

<style scoped>

</style>