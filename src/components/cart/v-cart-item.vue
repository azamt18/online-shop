<template>
  <div class="v-cart-item">
    <img class="v-cart-item__image" :src="require('../../assets/images/' + cart_item_data.image)" alt="">
    <div class="cart-item__info">
      <p>{{ cart_item_data.name }}</p>
      <p>{{ cart_item_data.price | toFix | toFormattedPrice }}</p>
      <p>{{ cart_item_data.article }}</p>
    </div>
    <div class="cart-item__quantity">
      <p>Qty:</p>
      <span class="quantity_btn" @click="decrementCartItem">-</span>
      {{ cart_item_data.quantity }}
      <span class="quantity_btn" @click="incrementCartItem">+</span>
    </div>
    <button @click="deleteFromCartButton">Delete</button>
  </div>
</template>

<script>
import toFix from '../../filters/toFix'
import toFormattedPrice from "@/filters/priceFormat";
export default {
  name: "v-cart-item",
  props: {
    cart_item_data: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  data() {
    return {}
  },
  filters: {
    toFix,
    toFormattedPrice
  },
  computed: {},
  methods: {
    incrementCartItem() {
      this.$emit('incrementCartItem');
    },
    decrementCartItem() {
      this.$emit('decrementCartItem');
    },
    deleteFromCartButton() {
      this.$emit('deleteFromCart')
    }
  }
}
</script>

<style lang="scss">
.v-cart-item {
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 0 8px 0 #e0e0e0;
  padding: $padding*2;
  margin-bottom: $margin*2;

  &__image {
    max-width: 50px;
  }

  .quantity_btn {
    cursor: pointer;
  }
}
</style>