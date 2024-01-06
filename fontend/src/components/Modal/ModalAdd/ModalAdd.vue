<script setup>
import {useModalAdd} from "@/stores/useModalAdd.js";
import {toRefs} from "vue";
import Top from "@/components/Modal/ModalAdd/_Top.vue";

const {toggleModal} = toRefs(useModalAdd())
</script>

<template>
    <div class="absolute w-screen h-screen backdrop-blur-2xl flex justify-center items-center"
         @click.self="toggleModal">
        <div class="rounded-[35px] bg-gradient-to-br from-grey_border to-transparent p-[2px]">
            <div class="w-full h-full bg-gray_2 rounded-[34px] p-indent-all 2xl:p-indent-2xl">
                <Top/>
                <div class="blocks mt-indent-all 2xl:mt-indent-2xl w-full overflow-y-scroll rounded-[15px]">
                    <div class="h-[400px] w-[400px]">
                        <div class="w-full border-grey_border border-[1px] py-[10px] px-[25px] bg-grey_3 rounded-[16px] flex justify-between">
                            <div class="flex items-center">
                                <img alt="" src="@/assets/Icon/check.svg">
                                <h1 class="ml-[10px]">NahJob</h1>
                            </div>
                            <div class="flex items-center">
                                <h1>4.5</h1>
                                <img class="ml-[10px]" alt="" src="@/assets/Icon/trending-down.svg">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.blocks {
    overflow: scroll;
    -ms-overflow-style: none;
    scrollbar-width: none;

    &::-webkit-scrollbar {
        width: 0;
    }

    &::-webkit-scrollbar {
        width: 0;
        height: 0;
    }
}
</style>
