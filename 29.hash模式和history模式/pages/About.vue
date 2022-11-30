<template>
    <div class="panel-body">
        <h2>我是About的内容</h2>
    </div>
</template>

<script>
export default {
    name: "About",
    beforeRouteEnter(to, from, next) {
        if (to.meta.isAuth) {
            if (localStorage.getItem("name") === "zhangping") {
                next();
            } else {
                alert("您暂无权限查看！");
            }
        } else {
            next();
        }
    },
    beforeRouteLeave(to, from, next) {
        console.log(to, from);
        next();
    },
};
</script>

<style>
</style>