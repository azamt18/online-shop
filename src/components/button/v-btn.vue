<template>
  <div
      class="v-btn"
      @click="clickMethodInBtn"
      :class="className"
  >
    <i class="material-icons" v-if="appendIcon">{{ appendIcon }}</i>
    <span>{{ title }}</span>
    <i class="material-icons" v-if="prependIcon">{{ prependIcon }}</i>
  </div>
</template>

<script>
export default {
  name: "v-btn",
  props: {
    title: {
      type: String,
      default: "Press"
    },
    disabled: {
      type: Boolean,
      default: false
    },
    error: {
      type: Boolean,
      default: false
    },
    success: {
      type: Boolean,
      default: true
    },
    appendIcon: {
      type: String,
      default: ''
    },
    prependIcon: {
      type: String,
      default: ''
    }
  },
  data() {
    return {}
  },
  methods: {
    clickMethodInBtn() {
      this.$emit('click')
    }
  },
  computed: {
    className() {
      return {
        'v-btn__disabled': this.disabled,
        'v-btn_error': this.error,
        'v-btn_success': this.success,
      }
    }
  }
}
</script>

<style lang="scss">
.v-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  padding: 8px 16px;
  color: #ffffff;
  background: forestgreen;
  cursor: pointer;

  &:hover {
    background: #aeaeae;
  }

  .material-icons {
    margin-right: 8px;
    font-size: 16px;

    &:last-of-type {
      margin-left: 8px;
    }

  }

  &__disabled {
    background: #aeaeae;
    pointer-events: none;
  }

  &__error {
    background: red;
  }

  &__success {
    background: dodgerblue;
  }
}
</style>