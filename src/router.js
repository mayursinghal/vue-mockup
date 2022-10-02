import { createRouter,createWebHistory } from "vue-router";
import tablePage from './components/TablePage.vue'
import CardPage from './components/CardPage.vue'

const router = createRouter({
    history: createWebHistory(),
    routes : [
        {path :'/',redirect:"/table"},
        {path:'/table',component:tablePage},
        {path:'/card',component:CardPage}
    ]
})

export default router