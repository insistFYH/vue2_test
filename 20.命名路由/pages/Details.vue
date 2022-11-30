<template>
    <div>
        <ul>
            <li>消息详情id：{{$route.query.id}}</li>
            <li>消息详情名称：{{$route.query.title}}</li>
        </ul>
    </div>
</template>

<script>
export default {
    name: "Details",
};
</script>

<style>
</style>