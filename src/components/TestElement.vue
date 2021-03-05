<template>
    <div>
        <span class="text">
            {{text}}
        </span>
        <span class="remove" @click="$emit('removeItem', text)">x</span>
    </div>
</template>
<style>
.remove {
    position: absolute;
    right: 2px;
    top: 0;
    cursor: pointer;
}
</style>
<script>
    export default {
        name: "TestElement",
        props: {
            text : {
                type: String,
                default: "x",
            }
        }
    }
</script>
