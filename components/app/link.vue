<template>
    <nuxt-link :to="'/' + cityCode + partnersName + props.to">
        <slot></slot>
    </nuxt-link>
</template>
<script setup>
const props = defineProps({
    to: {
        type: String,
        default: '/'
    }
})
const appConfig = useAppConfig();
const router = useRoute();
const cityCode = router.params.city ? '/' + router.params.city : '/' + appConfig.url.baseCity
const partnersName = router.params.partner ? '/' + router.params.partner : ''
</script>
