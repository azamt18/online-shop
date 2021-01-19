<template>
  <div class="v-catalog-item">

    <v-popup
      v-if="isInfoPopupVisible"
      @closePopup="closePopup"
      @rightBtnAction="addToCart"
      :popupTitle="product_data.name"
      rightBtnTitle="Add to cart"
    >
      <img class="v-catalog-item__image" :src=" require('../../assets/images/' + product_data.image) " alt="img">
      <div>
        <p class="v-catalog-item__name">{{ product_data.name }}</p>
        <p class="v-catalog-item__price">Price: {{ product_data.price | toFix | toFormattedPrice }}</p>
        <p class="v-catalog-item__price">Price: {{ product_data.category }}</p>
      </div>
    </v-popup>

    <img class="v-catalog-item__image" :src=" require('../../assets/images/' + product_data.image) " alt="img">
    <p class="v-catalog-item__name">{{ product_data.name }}</p>
    <p class="v-catalog-item__price">Price: {{ product_data.price | toFix | toFormattedPrice }}</p>
    <button
      class="v-catalog-item__show_info"
      @click="showPopupInfo"
    >
      Show info
    </button>
    <button class="v-catalog-item__add_to_cart_btn btn" @click="addToCart">Add to cart</button>
  </div>
</template>

<script>
import vPopup from '../popup/v-popup'
import toFix from '../../filters/toFix.js'
import toFormattedPrice from "@/filters/priceFormat";

export default {
  name: "v-catalog-item",
  components: {
    vPopup
  },
  props: {
    product_data: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  data() {
    return {
      isInfoPopupVisible: false
    }
  },
  filters: {
    toFix,
    toFormattedPrice
  },
  computed: {},
  methods: {
    closePopup() {
      this.isInfoPopupVisible = false;
    },
    showPopupInfo() {
      this.isInfoPopupVisible = true;
    },
    sendDataToParent() {
      this.$emit('sendDataToParent', this.product_data.article);
    },
    addToCart() {
      this.$emit('addToCart', this.product_data);
    }
  },
  mounted() {
    this.$set(this.product_data, 'quantity', 1);
  }
}
</script>

<style lang="scss">
  .v-catalog-item {
    flex-basis: 25%;
    box-shadow: 0 0 8px 0 #e0e0e0;
    padding: $padding*2;
    margin-bottom: $margin*2;
    &__image {
      width: 100px;
    }
  }

</style>