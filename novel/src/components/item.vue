<template>
    <div class="cell">
        <a class="user_avatar pull-left" href="">
            <img src="https://avatars.githubusercontent.com/u/19722693?v=4&s=120" alt="">
        </a>
        <span class="reply_count pull-left">
            <span class="count_of_replies"> 0 </span>
            <span class="count_seperator">/</span>
            <span class="count_of_visits"> 0 </span>
        </span>
        <div class="top_title_wrapper">
            <span class="topiclist-tab">分享</span>
            <a class="topic_title">文丑-ChatGPT客户端 支持消息打字机式回复啦，响应时间毫秒级</a>
        </div>
        <span class="last_time pull-right">
            <span class="last_active_time">3个月前</span>
        </span>
    </div>
    <div class="cell">
        <a class="user_avatar pull-left" href="">
            <img src="https://avatars.githubusercontent.com/u/19722693?v=4&s=120" alt="">
        </a>
        <span class="reply_count pull-left">
            <span class="count_of_replies"> 0 </span>
            <span class="count_seperator">/</span>
            <span class="count_of_visits"> 0 </span>
        </span>
        <div class="top_title_wrapper">
            <span class="topiclist-tab">分享</span>
            <a class="topic_title">文丑-ChatGPT客户端 支持消息打字机式回复啦，响应时间毫秒级</a>
        </div>
        <span class="last_time pull-right">
            <span class="last_active_time">3个月前</span>
        </span>
    </div>
</template>
<script>
export default {
    name: 'Item',
}
</script>
<style lang="scss" scoped>
.cell {
    display: flex;
    align-items: center;
    position: relative;
    padding-top: 10px;
    padding-right: 10px;
    padding-bottom: 10px;
    padding-left: 10px;
    background: #fff;
    font-size: 14px;
    border-top: 1px solid #f0f0f0;

    &:first-child {
        border-top: none;
    }

    .reply_count {
        width: 70px;
        display: inline-block;
        text-align: center;
    }

    .top_title_wrapper {
        flex: 1;

        .topiclist-tab {
            background-color: #e5e5e5;
            color: #999;
            padding: 2px 4px;
            border-radius: 3px;
            font-size: 12px;
        }

        .topic_title {
            display: inline-block;
            padding-left: 4px;
            color: #333;
            white-space: nowrap;
            vertical-align: middle;
            font-size: 16px;
            line-height: 30px;
        }
    }
}

.user_avatar {
    img {
        width: 30px;
        height: 30px;
        border-radius: 3px;
    }
}
</style>