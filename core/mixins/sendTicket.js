import goals from "./goals";
import Errors from "../Errors";

export default {
    mixins: [
        goals

    ],

    data() {
        return {
            form: {
                submitted: false,
            },
            errors: new Errors(),
        }
    },

    computed: {
        getSettingScript() {
            return this.$store.getters['getSettings'].scripts || [];
        },
    },

    methods: {
        async sendTicket(data = null, beforeSend = null, afterSend = null, errorSend = null) {
            this.form.submitted = true;

            let utm = localStorage.getItem('utm');

            if (utm) {
                utm = JSON.parse(utm);
            }

            if (typeof beforeSend === 'function') {
                beforeSend(data);
            }

            await this.$axios.$post('/action/ticket/', data)
                .then(response => {
                    this.modalShow('final');

                    this.goals(data, this.getSettingScript);

                    if (typeof afterSend === 'function') {
                        afterSend(response);
                    }

                    this.form.submitted = false;
                })
                .catch(err => {
                    if ((err.response || {}).status || 0 === 422 && ((err.response) || {}).data) {

                        if (typeof errorSend === 'function') {
                            errorSend(err);
                        }

                        this.errors.record(err.response.data);
                        this.form.submitted = false;
                    }
                })
        }
    }
}


