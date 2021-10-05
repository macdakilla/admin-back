export default {
    methods: {
        goals(form, settingsScripts) {
            let goal = settingsScripts.counters.goal ? settingsScripts.counters.goal : '';
            let ctid = settingsScripts.counters.calltouch_site_id ? settingsScripts.counters.calltouch_site_id : '';
            let cts = settingsScripts.counters.calltouch_server ? settingsScripts.counters.calltouch_server : '';

            let code = form.code ? form.code : '';
            let name = form.name ? form.name : '';
            let phone = form.phone ? form.phone : '';
            let page = form.page ? form.page : '';
            let model = form.model ? form.model : '';

            if (code) {
                if (typeof ym === 'function' && goal) {
                    ym(goal, 'reachGoal', code);
                }

                if (typeof reachGoal == 'function' && goal) {
                    window['yaCounter' + goal].reachGoal(code);
                }
                if (typeof gtag == 'function') {
                    gtag('event', code + '_form', {'event_category': code, 'event_action': 'send'});
                }

                if (typeof dataLayer == 'function') {
                    dataLayer.push({'event': 'event-to-ga', 'eventCategory': code, 'eventAction': 'send'});
                }
            }

            if (typeof roistatGoal == "object" && form) {
                roistatGoal.reach({
                    name: name,
                    phone: phone,
                    is_need_callback: '1',
                    leadName: code,
                    text: page,
                });
            }

            if (form && ctid && cts) {
                let ct_data = {
                    fio: name,
                    phoneNumber: phone,
                    subject: code,
                    orderComment: model ? 'Модель: ' + model : '',
                    sessionId: window.call_value
                };

                this.$axios.post('https://api-node' + cts + '.calltouch.ru/calls-service/RestAPI/' + ctid + '/requests/orders/register/',
                    ct_data, {})
                    .then(async (response) => {
                        console.log(response);
                    })
                    .catch((error) => {
                        error.response && error.response.data.errors ? console.log(error.response.data.errors) : '';
                    });
            }
        }
    }
}
