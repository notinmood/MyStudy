<template>
    <div>
        {{ count }}
    </div>
</template>

<script>
import { reactive, toRefs } from "vue";

export default {
    setup() {
        const state = reactive({
            count: 0,
        });

        return {
            ...toRefs(state),
        };
    },
};
</script>
<script setup></script>

<style lang="scss" scoped></style>
