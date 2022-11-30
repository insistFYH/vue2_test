<template>
    <div>
        <el-date-picker v-model="value1" type="date" placeholder="选择日期">
        </el-date-picker>
        <el-carousel class="out" indicator-position="outside">
            <el-carousel-item v-for="item in 4" :key="item">
                <h3>{{ item }}</h3>
            </el-carousel-item>
        </el-carousel>
    </div>
</template>

<script>
export default {
    name: "Element",
};
</script>

<style>
.out {
    width: 500px;
    margin: 20px auto;
    background-color: #ddd;
}
</style>