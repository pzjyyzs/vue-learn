import { defineStore } from 'pinia';

const useTab = defineStore("tab", {
    state: () => ({
        tab: '',
        currentIndex: 1
    }),
    actions: {
        changeTab(tab) {
            this.tab = tab;
        }
    }
})

export default useTab;