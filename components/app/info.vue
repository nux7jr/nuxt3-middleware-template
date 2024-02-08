<script setup>
const router = useRouter();
// const appConfig = useAppConfig()
// const { data } = await useFetch(appConfig.url.baseApiUri + '/' + router.currentRoute.value.params.city);
const cityStore = useCityStore();

</script>
<template>
    <div>
        <div>
            <!-- <h2>ROUTER LOCAL:</h2> -->
            <hr>
            <!-- <pre>{{ router }}</pre> -->
        </div>
        <div>
            <h2>API LOCAL:</h2>
            <hr>
            {{ router.currentRoute.value.params.city }}
            {{ router.currentRoute.value.params.partner }}
        </div>
        <!-- <pre>city: {{ data }}</pre> -->
        <pre>
            {{ cityStore.city.show }}
        </pre>
        <hr>
        <pre>
            {{ cityStore.city.hide }}
        </pre>
    </div>
</template>
