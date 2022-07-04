import { createStore } from 'vuex'
import auth from '@/store/auth'
import navigation from '@/store/navigation'
import posts from '@/store/posts'
import users from '@/store/users'

export default createStore({
    modules: {
        auth,
        navigation,
        posts,
        users
    }
})
