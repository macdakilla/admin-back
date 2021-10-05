export default {
    methods: {
        clipboardCopy(clipboard, toastText = 'Скопировано') {
            navigator.clipboard.writeText(clipboard);
            this.$toast.success(toastText, {timeout: 1000, hideProgressBar: true});
        }
    }
}
