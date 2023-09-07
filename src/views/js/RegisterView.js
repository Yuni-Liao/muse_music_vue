export default {
    //  script寫這
    data () {
        return {
            current: 0
        }
    },
    methods: {
        next () {
            if (this.current == 3) {
                this.current = 0;
            } else {
                this.current += 1;
            }
        }
    }
}