<script setup>
import {useModalAdd} from "@/stores/useModalAdd.js";
import {toRefs} from "vue";

const {toggleModal} = toRefs(useModalAdd())
</script>

<template>
    <div class="w-full flex justify-between">
        <div class="w-full flex">
            <div class=" w-full bg-gradient-to-br rounded-[15px] from-grey_border to-transparent p-[1.5px]">
                <input class="w-full rounded-[14px] bg-gray_2 py-[12px] px-[25px] pr-[45px] outline-none"
                       placeholder="Поиск"
                       type="text">
            </div>
            <img alt="" class="cursor-pointer ml-[-12%] 2xl:ml-[-10%]" src="../../../assets/Icon/sliders.svg">
        </div>
        <img alt="" class="ml-[30px] cursor-pointer" src="../../../assets/Icon/x.svg" @click="toggleModal">
    </div>
</template>
