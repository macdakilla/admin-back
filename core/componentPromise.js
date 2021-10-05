export default (path, slug = false) => new Promise(resolve => {
    const pattern = `${path}${slug ? '/' + slug : ''}`;
    try {
        resolve(require(`~/components/${pattern}`));
    } catch (e) {
        try {
            resolve(require(`~/components/${path}/index`));
            // console.warn(`Component ~/components/${pattern} not found. Loading index.vue`);
        } catch (e) {
            console.error(`Components ~/components/${pattern} || index.vue not found. Loading Error.vue;`);
            resolve(require('~/components/asyncComponent/error'));
        }
    }
});
