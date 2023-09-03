import { defineStore } from 'pinia';

const useTab = defineStore("tab", {
    state: () => ({
        tab: '',
        currentIndex: 1
    })
})

export default useTab;