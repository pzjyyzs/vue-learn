<template>
    <div>
        <div class="pagination">
            <button>
                &lt;
            </button>
            <button :class="{ currentIndex: currentIndex == 1 }" @click="$emit('pageChange', 1)">1</button>
            <button :class="{ currentIndex: currentIndex == 2 }" @click="$emit('pageChange', 2)">2</button>
            <button :class="{ currentIndex: currentIndex == 3 }" @click="$emit('pageChange', 3)">3</button>
            <button :class="{ currentIndex: currentIndex == 4 }" @click="$emit('pageChange', 4)">4</button>
            <button> > </button>
        </div>
    </div>
</template>
<script>
export default {
    name: 'Pageing',
    props: {
        currentIndex: Number
    },
    setup(props) {
    }
}
</script>
<style lang="scss" scope>
.pagination {
    display: inline-block;
    margin-bottom: 0;
    margin-left: 0;
    border-radius: 4px;

    button {
        padding: 4px 12px;
        line-height: 20px;
        background-color: #fff;
        border: 1px solid #ddd;
        text-decoration: none;
        cursor: pointer;

        &.currentIndex {
            color: #80bd01;
        }
    }
}
</style>