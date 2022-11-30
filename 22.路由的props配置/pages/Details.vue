<template>
    <div>
        <ul>
            <li>消息详情id：{{id}}</li>
            <li>消息详情名称：{{title}}</li>
        </ul>
    </div>
</template>

<script>
export default {
    name: "Details",
    props: ["id", "title"],
};
</script>

<style>
</style>