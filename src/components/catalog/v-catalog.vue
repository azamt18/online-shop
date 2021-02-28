<template>
    <div class="v-catalog">
        <router-link :to="{name: 'cart', params: {cart_data: CART}}">
            <div class="v-catalog__link_to_cart">Cart: {{CART.length}}</div>
        </router-link>
        <h1>Catalog</h1>
        <div class="filters">
            <v-select
                    :selected="selected"
                    :categories="categories"
                    @selectOption="sortByCategories"
            />
            <div class="range-slider">
                <label>
                    <input
                            max="10000"
                            min="0"
                            step="1000"
                            type="range"
                            v-model.number="minPrice"
                            @change="setRangeSlider"
                    >
                </label>
                <label>
                    <input
                            max="10000"
                            min="0"
                            step="1000"
                            type="range"
                            v-model.number="maxPrice"
                            @change="setRangeSlider"
                    >
                </label>
            </div>
            <div class="range-values">
                <p>Min: {{minPrice}}</p>
                <p>Max: {{maxPrice}}</p>
            </div>
        </div>
        <p>Selected: {{selected}}</p>
        <div class="v-catalog__list">
            <v-catalog-item
                    v-for="product in filteredProducts"
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
                categories: [
                    {name: 'All', value: 'all'},
                    {name: 'Computer & Technology', value: 'ct'},
                    {name: 'Business', value: 'b'}
                ],
                selected: 'All',
                sortedProducts: [],
                minPrice: 0,
                maxPrice: 10000
            }
        },
        computed: {
            ...mapGetters([
                'PRODUCTS',
                'CART',
                'SEARCH_VALUE'
            ]),
            filteredProducts() {
                if (this.sortedProducts.length) {
                    return this.sortedProducts;
                } else {
                    return this.PRODUCTS;
                }
            }
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
            },
            sortByCategories(category) {
                let vm = this;
                this.sortedProducts = [...this.PRODUCTS];
                this.sortedProducts = this.sortedProducts.filter(function (item) {
                    return item.price >= vm.minPrice && item.price <= vm.maxPrice;
                });
                if (category) {
                    this.sortedProducts = this.sortedProducts.filter(function (e) {
                        vm.selected = category.name;
                        return e.category === category.name;
                    })
                }
            },
            setRangeSlider() {
                if (this.minPrice > this.maxPrice) {
                    let temp = this.maxPrice;
                    this.maxPrice = this.minPrice;
                    this.minPrice = temp;
                }
                this.sortByCategories();
            },
            sortProductsBySearchValue(value) {
                this.sortedProducts = [...this.PRODUCTS];
                if (value) {
                    this.sortedProducts = this.sortedProducts.filter(function (item) {
                        return item.name.toLowerCase().includes(value.toLowerCase());
                    })
                } else {
                    this.sortedProducts = this.PRODUCTS;
                }
            }
        },
        watch: {
            SEARCH_VALUE() {
                this.sortProductsBySearchValue(this.SEARCH_VALUE);
            }
        },
        mounted() {
            this.GET_PRODUCTS_FROM_API()
                .then((response) => {
                    if (response.data) {
                        console.log('Data arrived');
                        this.sortByCategories();
                        this.sortProductsBySearchValue(this.SEARCH_VALUE)
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
            top: 120px;
            right: 10px;
            padding: $padding*2;
            border: solid 1px black;
        }
    }

    .filters {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .range-slider {
        width: 200px;
        margin: auto 16px;
        text-align: center;
        position: relative;
    }

    .range-slider svg, .range-slider input[type=range] {
        position: absolute;
        left: 0;
        bottom: 0;
    }

    input[type=range]::-webkit-slider-thumb {
        z-index: 2;
        position: relative;
        top: 2px;
        margin-top: -7px;
    }
</style>