
/**
 * Its always nice to keep our app's constants in an
 * isolated globally accessible file, given the scale of
 * this app
 */
const settings = Object.freeze({
    PORT : 8080,
    HOST : '0.0.0.0',
    FRONTEND_DIR : process.env.PWD + '/frontend/public',
    INDEX_PATH : process.env.PWD + '/frontend/index.html'
});

module.exports = settings;