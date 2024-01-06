<template>
    <div
        :class="{ 'h-0 overflow-hidden': !open, 'mt-indent-all': open, '2xl:mt-indent-2xl': open}"
        class="px-indent-all flex flex-col items-center w-full">
        <RouterLink
            class="item w-full hover:scale-[1.03] transition-transform duration-300 bg-bg rounded-[16px] hover:bg-gradient-to-br hover:from-grey_border hover:to-transparent p-[2px]"
            :to="{ name: 'home' }" :class="{ '!bg-gradient-to-br !from-blue_border !to-transparent scale-[1.03]': $route.name === 'home'}">
            <div
                class="flex items-center pl-indent-all 2xl:px-indent-2xl w-full h-full rounded-[15px] py-[12px]" :class="{ '!bg-blue_1': $route.name === 'home'}">
                <img alt="home" src="@/assets/Icon/home.svg">
                <span class="ml-5 text-[20px]">Главная</span>
            </div>
        </RouterLink>
        <RouterLink
            class="item w-full hover:scale-[1.03] transition-transform duration-300 bg-bg rounded-[16px] hover:bg-gradient-to-br hover:from-grey_border hover:to-transparent p-[2px] mt-2"
            :to="{ name: 'statistic' }" :class="{ '!bg-gradient-to-br !from-blue_border !to-transparent scale-[1.03]': $route.name === 'statistic'}">
            <div
                class="flex items-center pl-indent-all 2xl:px-indent-2xl hover:bg-blue_1 w-full h-full rounded-[15px] py-[12px]" :class="{ '!bg-blue_1': $route.name === 'statistic'}">
                <img alt="home" src="@/assets/Icon/activity.svg">
                <span class="ml-5 text-[20px]">Статистика</span>
            </div>
        </RouterLink>
        <RouterLink
            class="item w-full hover:scale-[1.03] transition-transform duration-300 bg-bg rounded-[16px] hover:bg-gradient-to-br hover:from-grey_border hover:to-transparent p-[2px] mt-2"
            :to="{ name: 'bookmark' }" :class="{ '!bg-gradient-to-br !from-blue_border !to-transparent scale-[1.03]': $route.name === 'bookmark'}">
            <div
                class="flex items-center pl-indent-all 2xl:px-indent-2xl hover:bg-blue_1 w-full h-full rounded-[15px] py-[12px]" :class="{ '!bg-blue_1': $route.name === 'bookmark'}">
                <img alt="home" src="@/assets/Icon/bookmark.svg">
                <span class="ml-5 text-[20px]">Избранное</span>
            </div>
        </RouterLink>
        <RouterLink
            class="item w-full hover:scale-[1.03] transition-transform duration-300 bg-bg rounded-[16px] hover:bg-gradient-to-br hover:from-grey_border hover:to-transparent p-[2px] mt-2"
            :to="{ name: 'reviews' }" :class="{ '!bg-gradient-to-br !from-blue_border !to-transparent scale-[1.03]': $route.name === 'reviews'}">
            <div
                class="flex items-center pl-indent-all 2xl:px-indent-2xl hover:bg-blue_1 w-full h-full rounded-[15px] py-[12px]" :class="{ '!bg-blue_1': $route.name === 'reviews'}">
                <img alt="home" src="@/assets/Icon/message-square.svg">
                <span class="ml-5 text-[20px]">Отзывы</span>
            </div>
        </RouterLink>
        <RouterLink
            class="item w-full hover:scale-[1.03] transition-transform duration-300 bg-bg rounded-[16px] hover:bg-gradient-to-br hover:from-grey_border hover:to-transparent p-[2px] mt-2"
            :to="{ name: 'news' }" :class="{ '!bg-gradient-to-br !from-blue_border !to-transparent scale-[1.03]': $route.name === 'news'}">
            <div
                class="flex items-center pl-indent-all 2xl:px-indent-2xl hover:bg-blue_1 w-full h-full rounded-[15px] py-[12px]" :class="{ '!bg-blue_1': $route.name === 'news'}">
                <img alt="home" src="@/assets/Icon/news.svg">
                <span class="ml-5 text-[20px]">Новости</span>
            </div>
        </RouterLink>
    </div>
</template>

<script setup>
defineProps(['open'])
</script>

<style lang="scss">
.item {
    &:hover {
        div {
            background: $bg;
        }
    }
}
</style>
