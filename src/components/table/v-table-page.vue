<template>
  <div class="v-table-page">
    <v-table
        :users_data="USERS"
    />
  </div>
</template>

<script>
import vTable from './v-table'
import {mapActions, mapGetters} from "vuex";
export default {
  name: "table-page",
  components: {
    vTable
  },
  computed: { // used for getters
    ...mapGetters([
      'USERS'
    ])
  },
  methods: { // used for actions
    ...mapActions([
      'GET_USERS_FROM_API'
    ])
  },
  mounted() {
    this.GET_USERS_FROM_API()
  }
}
</script>

<style scoped>
  .v-table-page {
    /*max-width: 1500px;*/
  }
</style>