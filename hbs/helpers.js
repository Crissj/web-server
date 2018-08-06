const hbs = require('hbs');

hbs.registerHelper('getAnio', () => {
    return new Date().getFullYear();
});

hbs.registerHelper('getNombre', (nombre) => {
    return `Hola ${nombre}`;
})