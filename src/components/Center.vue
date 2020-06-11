<template>
    <div class="container-center">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "Center"
    }
</script>

<style scoped>
    .container-center {
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
</style>
