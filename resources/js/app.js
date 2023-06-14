import './bootstrap';

import {createApp} from 'vue'
import { createRouter,createWebHistory} from 'vue-router'
import {routes} from './routes';
import VueAxios from 'vue-axios';
import axios from 'axios';
import { createStore } from 'vuex';
import App from './App.vue';


const store = createStore({
    state() {
        return {
            books: [],
            pagination: {}
        }
    },
    getters: {
        books: state => {
            return state.books;
        },
        pagination: state => {
            return state.pagination;
        }
        
    },
    actions: {
        async getBooks({ commit,state}, page = 1) {
            if(page==state.pagination.current_page)return;
            await axios.get("/api/book?page=" + page)
                .then(response => {
                    commit('SET_BOOKS', response.data.data);
                    commit('SET_PAGINATION', {
                        current_page: response.data.current_page,
                        per_page: response.data.per_page,
                        total: response.data.total,
                    });
                })
                .catch((e) => {
                    console.log(e);
                });
        }
    },
    mutations: {
        SET_BOOKS(state, books) {
            state.books = books;
        },
        SET_PAGINATION(state, pagination) {
            state.pagination = pagination;
        }
    },
});

    
    
    
const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes: routes
});

const app = createApp(App);
app.use(router);
app.use(VueAxios, axios);
app.use(store);
app.mount('#app');