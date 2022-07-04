<template>
    <AuthPageComponent>
        <template v-slot:form>
            <VLoginForm/>
        </template>
    </AuthPageComponent>
</template>

<script>
import AuthPageComponent from '@/components/authComponents/AuthPageComponent'
import VLoginForm from '@/components/authComponents/VLoginForm'
export default {
    name: 'VLoginPage',
    components: {
        AuthPageComponent,
        VLoginForm
    }
}
</script>

<style scoped>

</style>
