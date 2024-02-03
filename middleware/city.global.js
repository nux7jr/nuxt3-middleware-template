export default defineNuxtRouteMiddleware(async (to, from) => {
    if (!to.params.city) {
        return navigateTo('/krasnoyarks', { redirectCode: 301 }) // mb 200 OK
    }
    else {
        const data = await $fetch('http://localhost:3000/api/city.json', {
            method: 'GET',
        })
        if (!data.subfoulders.includes(to.params.city)) {
            throw createError({ statusCode: 404, statusMessage: 'Page Not Found' })
        }
    }
    if (to.params.partner) {
        // дописать логику
    }

})
