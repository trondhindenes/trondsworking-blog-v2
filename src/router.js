import Vue from "vue";
import Router from "vue-router";


//Load so that webpack chunks da stuff
const Index = () => import('./components/Index')
const Post = () => import('./components/Post')

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: "/",
            name: 'index',
            component: Index,
            props: route => ({ cameFrom: route.params.cameFrom })
        },
        {
            path: '/post/:id',
            name: 'post',
            component: Post,
            props: route => ({ id: route.params.id })
        }
    ]
});