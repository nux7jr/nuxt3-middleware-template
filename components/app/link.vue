<template>
    <nuxt-link :to="'/' + cityCode + partnersIndex + props.to">
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
const router = useRoute();
const cityCode = router.params.city ? router.params.city : 'krasnoyarks'
const partnersIndex = router.params.partner ? '/' + router.params.partner : ''
</script>
