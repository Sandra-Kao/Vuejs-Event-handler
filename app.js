Vue.createApp({
    data() {
        return {
            inputText: 'write'
        }
    },
    methods: {
        showAlert() {
            alert('Show Alert:' + this.inputText);
        },
        getInputText(event) {
            this.inputText = event.target.value;
        }
    }
}).mount('#assignment');