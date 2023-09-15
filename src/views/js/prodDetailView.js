export default {
    data() {
        return {
            inCart: 0,
        };
    },
    methods: {
        incrementItem() {
            this.inCart++;
        },
        decrementItem() {
            if (this.inCart > 0) {
                this.inCart--;
            }
        },
    },
};