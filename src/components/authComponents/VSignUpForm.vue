<template>
    <div class="v-sign-up-form">
        <VForm>
            <template v-slot:inputs>
                <div class="auth-form-inputs">
                    <div class="auth-form__input">
                        <AuthInput
                            label="Name"
                            placeholder="Enter your name"
                            :value="authFields.name"
                            @input="e => authFields.name = e"
                        />
                    </div>
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
                        label="Sign up"
                        @click="signUp"
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
    name: 'VSignUpForm',
    components: {
        VForm,
        AuthInput,
        AuthButton
    },
    data () {
        return {
            authFields: {
                name: '',
                email: '',
                password: ''
            }
        }
    },
    methods: {
        onInput (e) {
            console.log('onInput', e)
        },
        signUp () {
            this.$store.dispatch('auth/signUp', this.authFields)
        }
    }
}
</script>

<style scoped lang="scss">
@import "src/assets/css/auth-fields";

</style>
