<script setup>
const props = defineProps({
    error: Object,
})
const appConfig = useAppConfig();
const handleError = () => clearError({ redirect: '/' + appConfig.url.baseCity })
</script>
<template>
    <div>
        <h2>{{ error.statusCode }}</h2>
        <button @click="handleError">Clear errors!!!</button>
    </div>
</template>
