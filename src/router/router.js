import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);

import vMainPage from '../components/main-page/v-main-page'
import vCatalog from '../components/catalog/v-catalog'
import vCart from '../components/cart/v-cart'

let router = new Router({
    routes: [
        {
            path: '/',
            name: 'main',
            component: vMainPage
        },
        {
            path: '/catalog',
            name: 'catalog',
            component: vCatalog
        },
        {
            path: '/cart',
            name: 'cart',
            component: vCart,
            props: true
        }
    ]
});

export default router;