<template>
  <div class="v-textfield">
    <label>
      {{ label }}
      <input
          type="text"
          :value="value"
          @input="input"
      >
    </label>
    <i
        class="material-icons"
        @click="clearValue"
    >
      cached
    </i>
  </div>
</template>

<script>
export default {
  name: "v-textfield",
  data() {
    return {
    }
  },
  props: {
    value: {
      type: [String, Number],
      default: ''
    },
    label: {
      type: String,
      default: 'Name'
    },
  },
  methods: {
    input(e) {
      let value = e.target.value;
      this.$emit('input', value)
    },
    clearValue() {
      this.value = ''
    }
  },
  computed: { }
}
</script>

<style lang="scss">
  .v-textfield {
    margin: 10px auto;
    display: flex;
    align-items: center;
    justify-content: center;
  }
</style>