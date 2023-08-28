<template>
    <div class="navbar">
        <div class="navbar-inner">
            <div class="container">
                <ul class="nav pull-right">
                    <li>
                        <a href="">首页</a>
                    </li>
                    <li><a>新手入门</a></li>
                    <li><a>API</a></li>
                    <li><a>关于</a></li>
                    <li><a>登录</a></li>
                </ul>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'Header',

}
</script>
<style lang='scss' scoped>
.navbar {
    margin-bottom: 0;
    z-index: 9;
    width: 100%;
    position: relative;
    background-color: #444;
    font-size: 13px;
    overflow: visible;

    .container {
        display: flex;
        justify-content: flex-end;
        width: 100%;
        min-width: 960px;
        margin: 0 auto;
        max-width: 1400px;
    }

    .nav {
        position: relative;
        left: 0;
        display: block;
        margin: 0 10px 0 0;

        &.pull-right {
            display: flex;

            &>li {
                padding: 10px 15px;
            }
        }
    }
}

.navbar-inner {
    background: 0 0;
    border-radius: 0;
    border: none;
    box-shadow: none;
    width: 90%;
    margin: auto;
    padding: 5px;
    min-height: 40px;
}
</style>