<template>
    <div class="container:None h-screen w-screen 2xl:p-indent-2xl p-indent-all flex justify-center items-center">
        <nav class="h-full w-1/4 2xl:w-1/5 2xl:mr-[20px] xl:mr-[15px] flex flex-col items-center">
            <Logo/>
            <Menu :open="getOpen"/>
            <Br :open="getOpen" @toggle="toggle"/>
            <Add/>
            <div class="scroll w-full h-full overflow-y-scroll mt-[20px] rounded-[15px]">
                <div class="w-full blocks">
                    <Block/>
                    <Block/>
                    <Block/>
                </div>
            </div>
        </nav>
        <div
            class="h-full w-3/4 2xl:w-4/5 2xl:ml-[20px] xl:ml-[15px] rounded-[35px] bg-gradient-to-br from-grey_border to-transparent p-[1.5px]">
            <MainZone/>
        </div>

        <ModalAdd v-show="getModalOpen"/>
    </div>
</template>

<script setup>
import Add from "@/components/App/Add.vue";
import Block from "@/components/App/Block/Block.vue";
import Br from "@/components/App/Line.vue";
import Logo from "@/components/App/Logo.vue";
import Menu from "@/components/App/Menu.vue";
import ModalAdd from "@/components/Modal/ModalAdd/ModalAdd.vue";
import {useMenu} from "@/stores/useMenu";
import {useModalAdd} from "@/stores/useModalAdd";
import {toRefs} from "vue";
import MainZone from "@/components/Board/Main.vue";

const {getOpen, toggle} = toRefs(useMenu());
const {getModalOpen} = toRefs(useModalAdd());

</script>

<style lang="scss">
body {
    background: $bg;
    color: $white;
}

.scroll {
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

.blocks {
    div {
        &.block {
            margin-top: 10px;
        }

        //margin-top: 10px;
        &:first-child {
            margin-top: 0 !important;
        }
    }
}
</style>
