<template>
  <div class="v-main-wrapper">
    <v-header />
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
 import vHeader from '../components/layout/v-header'

export default {
  name: 'v-main-wrapper',
  components: {
    vHeader
  },
  data() {
    return {
      title: 'Main wrapper'
    }
  },
  computed: {},
  methods: {},
  watch: {},
  mounted() {
  }
}
</script>

<style scoped>
.v-main-wrapper {
  margin: 0 auto;
}
</style>