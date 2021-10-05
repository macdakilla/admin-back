export const state = () => ({
    settings: null,
    baseURL: null,
});

export const getters = {
    getSettings(state) {
        return state.settings;
    },

    getBaseURL(state) {
        return state.baseURL;
    },
};

export const mutations = {
    setSettings(state, data) {
        state.settings = data;
    },

    setBaseURL(state, data) {
        state.baseURL = data;
    }
};

export const actions = {
    async nuxtServerInit(store, {req}) {
        let promiseList = [];
        let settings = null;

      /*  const host = req?.headers?.host;

        if (host) {
            store.commit('setBaseURL', host);
        }
*/

        /*await this.$axios
            .$get('settings')
            .then(response => {
                settings = response;
            })
            .catch(err => console.log(err));*/
        //
        // await Promise.all(promiseList)
        //     .then(() => {
        //         store.commit('setSettings', settings);
        //     })
        //     .catch(err => console.log(err));
    },
};
