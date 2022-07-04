<template>
    <AuthPageComponent>
        <template v-slot:form>
            <VSignUpForm/>
        </template>
    </AuthPageComponent>
</template>

<script>
import VSignUpForm from '@/components/authComponents/VSignUpForm'
import AuthPageComponent from '@/components/authComponents/AuthPageComponent'

export default {
    name: 'VSignUpPage',
    components: {
        VSignUpForm,
        AuthPageComponent
    }
}
</script>

<style scoped>

</style>
