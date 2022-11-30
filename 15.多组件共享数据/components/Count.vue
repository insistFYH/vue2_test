<template>
    <div>
        <h1>当前求和为：{{sum}}</h1>
        <h3>求和增大十倍后值为：{{bigSum}}</h3>
        <h3>下一个组件的人员人数：{{personList.length}}</h3>
        <select v-model.number="n">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
        </select>
        <button @click="increment(n)">+</button>
        <button @click="decrement(n)">-</button>
        <button @click="incrementOdd(n)">当前求和为奇数再加</button>
        <button @click="incrementWait(n)">等一等再加</button>
    </div>
</template>

<script>
import { mapState, mapGetters, mapMutations, mapActions } from "vuex";
export default {
    name: "Count",
    data() {
        return {
            n: 1, //用户选择的数字
        };
    },
    methods: {
        // increment() {
        //     this.$store.commit("Incre", this.n);
        // },
        // decrement() {
        //     this.$store.commit("Decre", this.n);
        // },
        ...mapMutations({ increment: "Incre", decrement: "Decre" }),
        //     incrementOdd() {
        //         this.$store.dispatch("increOdd", this.n);
        //     },
        //     incrementWait() {
        //         this.$store.dispatch("increWait", this.n);
        //     },
        // },
        ...mapActions({ incrementOdd: "increOdd", incrementWait: "increWait" }),
    },
    computed: {
        // ...mapState({ sum: "sum" }),
        ...mapState(["sum", "personList"]),
        ...mapGetters({ bigSum: "bigSum" }),
    },
};
</script>

<style lang="css">
button {
    margin-left: 5px;
}
</style>
