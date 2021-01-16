import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);

import vCatalog from '../components/catalog/v-catalog'
import vCart from '../components/cart/v-cart'

let router = new Router({
    routes: [
        {
            path: '/',
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