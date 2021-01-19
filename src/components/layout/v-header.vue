<template>
  <div class="v-header">
    <img src="../../assets/logo.png" alt="">
    <input
        type="text"
        class="search-field"
    >
  </div>
</template>

<script>
export default {
  name: "v-header"
}
</script>

<style lang="scss">
.v-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: $green-bg;
  padding: 16px;
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  
  img {
    width: 50px;
  }

  .search-field {
    padding: 16px;
    color: #000000;
    background: #ffffff;
  }
}
</style>