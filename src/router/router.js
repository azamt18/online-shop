import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);

import vMainPage from '../components/pages/v-main-page'
import vCatalog from '../components/catalog/v-catalog'
import vCart from '../components/cart/v-cart'

import vBtnPage from '../components/button/v-btn-page'
import vTextFieldPage from '../components/textfield/v-textfield-page'
import vCarouselPage from '../components/carousel/carousel-page'
import vTablePage from '../components/table/v-table-page'

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
        },
        {
            path: '/button',
            name: 'button',
            component: vBtnPage,
            props: true
        },
        {
            path: '/textfield',
            name: 'textfield',
            component: vTextFieldPage,
            props: true
        },
        {
            path: '/carousel',
            name: 'carousel',
            component: vCarouselPage,
            props: true
        },
        {
            path: '/table',
            name: 'table',
            component: vTablePage,
            props: true
        }

    ]
});

export default router;