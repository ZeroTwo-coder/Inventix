import {defineStore} from 'pinia';
import {computed, ref} from 'vue';

export const useModalAdd = defineStore('useModalAdd', () => {
    const open = ref(false);

    const getModalOpen = computed(() => {
        return open.value
    });

    const toggleModal = () => {
        open.value = !open.value
    }
    return {getModalOpen, toggleModal}
})
