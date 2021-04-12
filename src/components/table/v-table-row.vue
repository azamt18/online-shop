<template>
  <div class="v-table-row">
    <div class="row row__name">{{  row_data.name }}</div>
    <div class="row row__price">{{  row_data.email }}</div>
    <div class="row row__category">{{  row_data.phone }}</div>
    <div class="row row__available">{{  row_data.website }}</div>
  </div>
</template>

<script>
export default {
  name: "v-table-row",
  props: {
    row_data: {
      type: Object,
      default: () => {
        return {}
      }
    }
  }
}
</script>

<style>
  .v-table-row {
    display: flex;
    justify-content: space-around;
  }
  .row {
    text-align: left;
    padding: 8px 16px;
    flex-basis: 25%;
  }
</style>