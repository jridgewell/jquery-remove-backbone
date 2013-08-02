define(function(require) {
    window.$ = window.jQuery = require('jquery');
    window.chai              = require('chai');
    window.sinon             = require('sinon');
    window.sinonChai         = require('sinon-chai');

    require('jquery.cleandata');
    require('backbone.remove');

    window.expect = chai.expect;
    chai.use(sinonChai);

    return window;
});
