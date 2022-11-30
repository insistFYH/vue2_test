<template>
    <div>
        <ul>
            <li>消息详情id：{{$route.params.id}}</li>
            <li>消息详情名称：{{$route.params.title}}</li>
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