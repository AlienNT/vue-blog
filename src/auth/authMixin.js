const AuthMixin = {
    mounted () {
        this.checkAuth()
    },
    computed: {
        authUser () {
            return localStorage?.authUser ? JSON.parse(localStorage?.authUser) : null
        },
        authUserInState () {
            return this.$store.getters['auth/GET_AUTH_USER']
        },
        routePath () {
            return this.$route.fullPath
        }
    },
    watch: {
        routePath: {
            handler (e) {
                this.checkAuth()
            },
            immediate: true
        },
        authUserInState: {
            handler (e) {
                this.checkAuth()
            },
            immediate: true
        }
    },
    methods: {
        checkAuth () {
            if (this.authUserInLocal?.id && !this.authUserInState?.id) {
                this.setAuthUser()
                this.$router.push('/')
            }

            if (!this.authUserInState?.id && this.routePath !== '/signup') {
                this.$router.push('/login')
            }
        },
        setAuthUser () {
            return this.$store.dispatch('auth/setAuthUserInStorage', this.authUserInLocal)
        }
    }
}
export default AuthMixin
