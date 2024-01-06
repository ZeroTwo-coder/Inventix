<template>
    <div class="range mt-[15px]">
        <input
            :max="10"
            :value="3"
            disabled
            min="0"
            step="1"
            type="range"
        />
    </div>
</template>

<style lang="scss" scoped>
.range {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    border: 1px solid rgba(230, 240, 250, 0.1);
    border-radius: 16px;
}

input[type="range"] {
    /* removing default appearance */
    -webkit-appearance: none;
    appearance: none;
    /* creating a custom design */
    width: 100%;
    outline: none;
    /*  slider progress trick  */
    overflow: hidden;
    border-radius: 16px;
    background: $gray_2;
}

/* Track: webkit browsers */
input[type="range"]::-webkit-slider-runnable-track {
    height: 15px;
    background: $black_1;
    border-radius: 16px;
}

/* Thumb: webkit */
input[type="range"]::-webkit-slider-thumb {
    /* removing default appearance */
    -webkit-appearance: none;
    appearance: none;
    /* creating a custom design */
    height: 15px;
    width: 15px;
    background-color: $blue_1;
    border-radius: 50%;
    border: 1px solid $blue_1;
    /*  slider progress trick  */
    box-shadow: -407px 0 0 400px $blue_1;
}

/* Track: Mozilla Firefox */
input[type="range"]::-moz-range-track {
    height: 15px;
    background: $black_1;
    border-radius: 16px;
}

/* Thumb: Firefox */
input[type="range"]::-moz-range-thumb {
    height: 15px;
    width: 15px;
    background-color: $blue_1;
    border-radius: 50%;
    border: 1px solid $blue_1;
    /*  slider progress trick  */
    box-shadow: -407px 0 0 400px $blue_1;
}
</style>
