import Vue from "vue";
import Router from "vue-router";
import Index from './components/Index'
import Post from './components/Post'

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: "/",
            name: 'index',
            component: Index
        },
        {
            path: '/post/:id',
            name: 'post',
            component: Post,
            props: route => ({ id: route.params.id })
        }
    ]
});