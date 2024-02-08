import { defineStore } from 'pinia'

export const useCityStore = defineStore('cityStore', () => {
    const city = ref(null)

    function setUpCity(cityData) {
        city.value = cityData;
    }

    const isCity = computed(() => !!city.value)

    return { isCity, setUpCity, city }
})
