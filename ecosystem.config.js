const base = require("./base.config");

module.exports = {
    apps: [{
        name: base.name, // App name that shows in `pm2 ls`
        exec_mode: 'cluster', // enables clustering
        instances: 2, // or an integer
        cwd: '../../current',
        script: './node_modules/nuxt-start/bin/nuxt-start.js', // The magic key
    }]
};
