const BookList = () => import('./components/Book/List.vue') 
const BookView = () => import('./components/book/View.vue')

export const routes = [
    {
        name: 'bookList',
        path: '/',
        component: BookList
    },
    {
        name: 'BookView',
        path: '/:id/view',
        component: BookView
    }
]