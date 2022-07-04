const AuthMixin = {
    mounted () {
        this.checkAuth()
    },
    computed: {
        authUser () {
            return JSON.parse(localStorage?.authUser)
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
                if (e?.id) {
                    this.checkAuth()
                }
            }
        }
    },
    methods: {
        checkAuth () {
            if (this.authUser?.id && !this.authUserInState?.id) {
                this.setAuthUser()
            }

            if (!this.authUser?.id && this.routePath !== '/signup') {
                this.$router.push('/login')
            }
        },
        setAuthUser () {
            return this.$store.dispatch('auth/setAuthUserInStorage', this.authUser)
        }
    }
}
export default AuthMixin
