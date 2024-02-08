export default defineNuxtRouteMiddleware(async (to, from) => {
    const appConfig = useAppConfig();
    const cityStore = useCityStore();
    if (!to.params.city) {
        return navigateTo('/' + appConfig.url.baseCity, { redirectCode: 301 }) // mb 200 OK
    }
    else {
        let apiUrl = appConfig.url.baseApiUri + '/' + to.params.city
        if (to.params.partner) {
            apiUrl += '/' + to.params.partner
        }
        const cities = await $fetch(apiUrl);

        console.log(cities)
        cityStore.setUpCity(cities);
    }
})
