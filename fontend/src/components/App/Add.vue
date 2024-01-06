<template>
    <div class="w-full flex flex-col items-center">
        <div class="flex justify-between items-center w-full">
            <p class="opacity-50">Web-сайты</p>
            <div class="bg-gradient-to-br from-blue_border to-transparent rounded-full p-[1px]" @click="toggleModal">
                <span
                    class="w-[16px] h-[16px] p-3 cursor-pointer flex justify-center items-center text-[18px] font-bold bg-blue_1 rounded-full">+</span>
            </div>
        </div>
    </div>
</template>

<script setup>
import { useModalAdd } from "@/stores/useModalAdd";

const { toggleModal } = useModalAdd()
</script>
