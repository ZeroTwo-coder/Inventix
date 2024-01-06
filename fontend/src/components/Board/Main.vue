<template>
    <main class="h-full w-full bg-main rounded-[34px] p-indent-all 2xl:p-indent-2xl">
        <Top/>
        <RouterView/>
    </main>
</template>


<script setup>
import Top from "@/components/Board/Main/Top.vue";
</script>
