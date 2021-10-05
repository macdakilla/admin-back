export default {
    data() {
        return {
            breadcrumbs: {
                getItems: () => {
                    return this.$store.getters['breadcrumbs/getItems'];
                },

                addItems: () => {
                    this.$store.commit('breadcrumbs/add', 'kek2');
                },

                update: (crumbs, route = this.$route) => {
                    this.$store.commit('breadcrumbs/update', { crumbs: crumbs, route: route });
                },
            },
        };
    },


};

