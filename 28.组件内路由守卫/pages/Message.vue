<template>
    <div>
        <ul>
            <li v-for="(m,id) in messageList" :key="id">
                <!-- <a href="/message1">{{m.title}}</a> -->
                <!-- <router-link :to="`/Home/Message/Details/${m.id}/${m.title}`">{{m.title}}</router-link>
                &nbsp;&nbsp; -->
                <!-- path:'/Home/Message/Details', -->
                <router-link :to="{
                    name:'xiangqing',
                    query:{
                        id:m.id,
						title:m.title
                        }
                }">{{m.title}}</router-link>
                <button @click="push(m)">push查看</button>
                <button @click="replace(m)">replace查看</button>
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
    methods: {
        push(m) {
            this.$router.push({
                name: "xiangqing",
                query: {
                    id: m.id,
                    title: m.title,
                },
            });
        },
        replace(m) {
            this.$router.replace({
                name: "xiangqing",
                query: {
                    id: m.id,
                    title: m.title,
                },
            });
        },
    },
};
</script>

<style>
</style>