// const { json } = require("body-parser");

window.addEventListener('DOMContentLoaded', () => {
    const tabs = require('./modules/tabs'),
          modal = require('./modules/modal'),
          calc = require('./modules/calc'),
          forms = require('./modules/forms'),
          slider = require('./modules/slider'),
          cards = require('./modules/cards'),
          timer = require('./modules/timer');

    tabs();
    modal();
    timer();
    cards();
    calc();
    forms();
    slider();
   
})