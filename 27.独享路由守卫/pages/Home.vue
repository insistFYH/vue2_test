<template>
    <div class="panel-body">
        <h2>Home组件内容</h2>
        <div>
            <ul class="nav nav-tabs">
                <li>
                    <!-- <a class="list-group-item active" href="./home-news.html">News</a> -->
                    <router-link class="list-group-item" active-class="active" to="/Home/News">News</router-link>
                </li>
                <li>
                    <router-link class="list-group-item" active-class="active" to="/Home/Message">Message</router-link>
                </li>
            </ul>
            <ul>
                <keep-alive clude="News">
                    <router-view></router-view>
                </keep-alive>

            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name: "Home",
};
</script>

<style>
</style>