<template>
    <div class="person">
        <h1>人员列表</h1>
        <h4>上一组件的求和值为：{{sum}}</h4>
        <input type="text" placeholder="请输入人员姓名" v-model="name">
        <button @click="addPerson">添加</button>
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
            return this.$store.state.personList;
        },
        sum() {
            return this.$store.state.sum;
        },
    },
    methods: {
        addPerson() {
            const person = { id: nanoid(), name: this.name };
            this.$store.commit("AddPerson", person);
        },
    },
};
</script>

<style>
</style>