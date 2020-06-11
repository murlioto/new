<template>
    <div class="container-modal">
        <Center>
            <slot></slot>
        </Center>
    </div>
</template>

<script>
    import Center from "./Center";
    export default {
        name: "Modal",
        components: {
            Center
        }
    }
</script>

<style scoped>
    .container-modal {
        width: 100%;
        height: 100%;
        position: fixed;
        top: 0;
        left: 0;
        background-color: rgba(0,0,0,.5);
        z-index: 999;
    }
</style>
