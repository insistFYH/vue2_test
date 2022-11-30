<template>
    <ul>
        <li :style="{opacity}">run for futrue</li>
        <li>news001<input type="text" value=""></li>
        <li>news002<input type="text" value=""></li>
        <li>news003<input type="text" value=""></li>
    </ul>
</template>

<script>
export default {
    name: "News",
    data() {
        return {
            opacity: 1,
        };
    },
    activated() {
        this.timer = setInterval(() => {
            this.opacity -= 0.1;
            if (this.opacity <= 0) this.opacity = 1;
        }, 100);
    },
    deactivated() {
        console.log("news组件失活了");
        clearInterval(this.timer);
    },
};
</script>

<style>
</style>