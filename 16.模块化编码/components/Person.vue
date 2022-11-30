<template>
    <div class="person">
        <h1>人员列表</h1>
        <h4>上一组件的求和值为：{{sum}}</h4>
        <input type="text" placeholder="请输入人员姓名" v-model="name">
        <button @click="addPerson">添加</button>
        <button @click="getFirstName">获取第列表第一个人的姓名</button>
        <button @click="addPersonServer">从服务器取值添加一个人员</button>
        <ul>
            <li v-for="(p,index) in personList" :key="index">{{p.name}}</li>
        </ul>
    </div>
</template>

<script>
import { nanoid } from "nanoid";
export default {
    name: "Person",
    data() {
        return {
            name: "",
        };
    },
    computed: {
        personList() {
            return this.$store.state.personAbout.personList;
        },
        sum() {
            return this.$store.state.countAbout.sum;
        },
    },
    methods: {
        addPerson() {
            const person = { id: nanoid(), name: this.name };
            this.$store.commit("personAbout/AddPerson", person);
        },
        getFirstName() {
            console.log(this.$store.getters["personAbout/getFirstName"]);
        },
        addPersonServer() {
            this.$store.dispatch("personAbout/getServerName");
        },
    },
};
</script>

<style>
</style>