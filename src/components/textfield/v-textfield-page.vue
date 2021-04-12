<template>
  <div class="v-textfield-page">
    <vTextField
        v-model="textFieldValue"
        label="Name"
    />
  </div>
</template>

<script>
import vTextField from './v-textfield'

export default {
  name: "v-textfield-page",
  data() {
    return {
      textFieldValue: 'Name'
    }
  },
  components: {
    vTextField
  },
  watch: {
    textFieldValue() {
      console.log("Name was changed to ", this.textFieldValue);
    },
  }
}
</script>

<style lang="scss">
  .v-textfield-page {
  }
</style>