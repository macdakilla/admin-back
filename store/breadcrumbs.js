export const state = () => (
    {
        crumbs: {},
    }
);

export const getters = {
    getItems(state) {
        return state.crumbs;
    },
};

export const mutations = {
    update(state, data) {
        const backup = JSON.parse(JSON.stringify(state.crumbs));
        const route = data.route;
        const crumbs = data.crumbs;
        const nameArr = route?.name?.split('-');

        state.crumbs = {};

        if (Array.isArray(nameArr) && nameArr.length && nameArr[0] !== 'index') {
            nameArr.forEach((item, index) => {
                const newCrumb = {
                    name: item,
                    text: item,
                    to: { name: item, params: route.params },
                };

                if (nameArr[index - 1]) {
                    newCrumb.to.name = `${state.crumbs[nameArr[index - 1]].to.name}-${item}`;
                }

                if (crumbs?.[item]?.text) {
                    newCrumb.text = crumbs[item].text;
                } else if (backup[item]?.text) {
                    newCrumb.text = backup[item].text;
                } else {
                    newCrumb.text = route?.params[item] ? route?.params[item] : newCrumb.text;
                }

                state.crumbs[item] = newCrumb;
            });
        }
    },

    add(state, data) {
        state.crumbs.push(data);
    },

    remove(state, data) {
        state.crumbs.pop();
    },

    clear(state) {
        state.crumbs = {};
    },
};
