import Vue from 'vue'
import Router from 'vue-router'

const lazyLoadingInicio   = () => import('./components/Inicio')
const lazyLoadingContacto = () => import('./components/Contacto')
const lazyLoadingSobreMi  = () => import('./components/SobreMi')
const lazyLoadingPost     = () => import('./components/Post')
// import Articulo from './components/Articulo'
import NotFound from './components/NotFound'
import Administrador from './components/Administrador'
import Simple from './components/Simple'
import Avanzado from './components/Avanzado'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        {
            path: "*",
            component: NotFound,
        },
        {
            path: '/',
            name: 'inicio',
            component: lazyLoadingInicio
        },
        {
            path: '/inicio',
            name: 'inicio2',
            redirect: '/'
        },
        {
            path: '/home',
            name: 'home',
            redirect: '/'
        },
        {
            path: '/portada',
            name: 'portada',
            redirect: '/'
        },
        {
            path: '/sobremi',
            name: 'sobremi',
            component: lazyLoadingSobreMi,
            alias: ['/acerca'],
        },
        {
            path: '/contacto',
            name: 'contacto',
            component: lazyLoadingContacto,
            alias: ['/contactarme'],
        },
        {
            path: '/post/:entrada',
            component: lazyLoadingPost,
            children: [
                {
                    path: '/',
                    name: 'articulo',
                    component: () => import('./components/Articulo')
                }
            ]
        },
        {
            path: '/administrador',
            name: 'administrador',
            component: Administrador,
            children: [
                {
                    path: 'simple',
                    component: Simple,
                },
                {
                    path: 'avanzado',
                    component: Avanzado,
                }
            ]
        },
    ]
})