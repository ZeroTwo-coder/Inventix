<script setup>
import Title from "@/components/App/Block/_Title.vue";
import Top from "@/components/App/Block/_RatingAndDate.vue";
import Range from "@/components/App/Block/_Range.vue";
import CountReview from "@/components/App/Block/_CountReview.vue";
</script>

<template>
    <div
        class="block w-full min-w-[250px] rounded-[20px] bg-gradient-to-br from-grey_border to-transparent p-[1.5px]">
        <div class="w-full px-[25px] py-[15px] h-full rounded-[19px] bg-gray_2">
            <Title/>
            <div class="w-full rounded-full mt-[15px] h-[2px] bg-gray_1 opacity-50"></div>
            <Top/>
            <Range/>
            <CountReview/>
        </div>
    </div>
</template>

<style lang="scss" scoped>

</style>
