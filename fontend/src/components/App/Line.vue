<script setup>
defineEmits(['toggle'])
</script>

<template>
    <div class="tooglebr py-[20px] mt-[10px] 2xl:[20px] w-full">
        <div class="w-full h-[2px] m-auto cursor-pointer rounded-full bg-gray_1 opacity-50" @click="$emit('toggle')"></div>
    </div>
</template>

<style lang="scss" scoped>
.tooglebr {

    div {
        transition: height 0.3s;
    }

    &:hover {
        div {
            height: 10px;
        }
    }
}
</style>
