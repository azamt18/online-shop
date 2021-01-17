<template>
    <div class="v-catalog">
        <router-link :to="{name: 'cart', params: {cart_data: CART}}">
            <div class="v-catalog__link_to_cart">Cart: {{CART.length}}</div>
        </router-link>
        <v-select
                :options="options"
                @selectOption="selectOption"
                :selected="selected"
        />
        <p>Selected: {{selected}}</p>
        <h1>Catalog</h1>
        <div class="v-catalog__list">
            <v-catalog-item
                    v-for="product in PRODUCTS"
                    :key="product.article"
                    :product_data="product"
                    @addToCart="addToCart"
            />
        </div>
    </div>
</template>

<script>
    import vCatalogItem from './v-catalog-item';
    import vSelect from '../v-select'
    import {mapActions, mapGetters} from 'vuex'

    export default {
        name: "v-catalog",
        components: {
            vCatalogItem,
            vSelect
        },
        props: {},
        data() {
            return {
                options: [
                    {name: 'Option 1', value: 1},
                    {name: 'Option 2', value: 2},
                    {name: 'Option 3', value: 3}
                ],
                selected: 'Select'
            }
        },
        computed: {
            ...mapGetters([
                'PRODUCTS',
                'CART'
            ])
        },
        methods: {
            ...mapActions([
                'GET_PRODUCTS_FROM_API',
                'ADD_TO_CART'
            ]),
            addToCart(data) {
                this.ADD_TO_CART(data);
            },
            selectOption(option) {
                this.selected = option.name;
            }
        },
        mounted() {
            this.GET_PRODUCTS_FROM_API()
                .then((response) => {
                    if (response.data) {
                        console.log('Data arrived')
                    }
                })
        }
    }
</script>

<style lang="scss">
    .v-catalog {
        &__list {
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
            align-items: center;
        }

        &__image {
            width: 100px;
        }

        &__link_to_cart {
            position: absolute;
            top: 10px;
            right: 10px;
            padding: $padding*2;
            border: solid 1px black;
        }
    }
</style>