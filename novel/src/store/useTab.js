import { defineStore } from 'pinia';

const useTab = defineStore("tab", {
    state: () => ({
        tab: '',
        currentIndex: 1
    }),
    actions: {
        changeTab(tab) {
            this.tab = tab;
        },
        changeIndex(index) {
            this.currentIndex = index;
        }
    }
})

export default useTab;