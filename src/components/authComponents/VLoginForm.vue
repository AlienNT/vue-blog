<template>
    <div class="v-login-form">
        <VForm>
            <template v-slot:inputs>
                <div class="auth-form-inputs">
                    <div class="auth-form__input">
                        <AuthInput
                            label="Email"
                            placeholder="Enter your email"
                            type="email"
                            :value="authFields.email"
                            @input="e => authFields.email = e"
                        />
                    </div>
                    <div class="auth-form__input">
                        <AuthInput
                            label="Password"
                            placeholder="Enter your password"
                            type="password"
                            :value="authFields.password"
                            @input="e => authFields.password = e"
                        />
                    </div>
                </div>
            </template>
            <template v-slot:buttons>
                <div class="auth-form__button">
                    <AuthButton
                        label="Login"
                        @click="login"
                    />
                </div>
            </template>
        </VForm>
    </div>
</template>

<script>
import VForm from '@/components/formComponents/VForm'
import AuthInput from '@/components/authComponents/AuthInput'
import AuthButton from '@/components/authComponents/AuthButton'

export default {
    name: 'VLoginForm',
    components: {
        VForm,
        AuthInput,
        AuthButton
    },
    data () {
        return {
            authFields: {
                email: '',
                password: ''
            }
        }
    },
    computed: {
        authUser () {
            return this.$store.getters['auth/GET_AUTH_USER']
        }
    },
    methods: {
        login () {
            this.$store.dispatch('auth/login', this.authFields)
        }
    },
    watch: {
        authUser: {
            handler (e) {
                if (e) {
                    this.$router.push('/')
                }
            }
        }
    }
}
</script>

<style scoped lang="scss">
@import "src/assets/css/auth-fields";
</style>
