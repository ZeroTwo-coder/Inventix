import {defineStore} from 'pinia';
import {computed, ref} from 'vue';

export const useMenu = defineStore('menu', () => {
    const open = ref(true);

    const getOpen = computed(() => {
        return open.value
    });

    const toggle = () => {
        open.value = !open.value
    }

    return {getOpen, toggle}

})
