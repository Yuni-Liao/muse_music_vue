
export default {
    data() {
        return {
            activeTab: 1,
            name: "",
            introduction: "",
            location: "",
            socialMedia: "",
        };
    },
    methods: {
        changeTab(tabNumber) {
            this.activeTab = tabNumber;
        },
    },

};