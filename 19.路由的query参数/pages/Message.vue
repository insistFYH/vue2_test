<template>
    <div>
        <ul>
            <li v-for="(m,id) in messageList" :key="id">
                <!-- <a href="/message1">{{m.title}}</a> -->
                <!-- <router-link :to="`/Home/Message/Details?id=${m.id}&title=${m.title}`">{{m.title}}</router-link>
                &nbsp;&nbsp; -->
                <router-link :to="{
                    path:'/Home/Message/Details',
                    query:{
                        id:m.id,
						title:m.title}
                }">{{m.title}}</router-link>
            </li>
        </ul>
        <hr>
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    name: "Message",
    data() {
        return {
            messageList: [
                { id: "001", title: "消息1" },
                { id: "002", title: "消息2" },
                { id: "003", title: "消息3" },
            ],
        };
    },
};
</script>

<style>
</style>