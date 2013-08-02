(function(root, _, $, Backbone) {
    'use strict';

// Force jQuery to emit remove events.
// Our views bind to it to see if they
// have been removed and should be cleaned.
var _cleanData = $.cleanData,
    testElement = $('<span />');

// Check to see if jQuery already
// fires a 'remove' event (jQuery UI).
// If it does, then don't wrap $.cleanData().
testElement.on('remove', function() {
    _cleanData = null;
});
testElement.remove();

if (_cleanData) {
    // $.cleanData() is a jQuery helper that #empty(),
    // #html(), and #remove() will call once.
    // Wrap it, and fire the 'remove' event.
    $.cleanData = function(elems) {
        _.each(elems, function(elem) {
            try {
                // Fire
                $(elem).triggerHandler('remove');
            } catch(e) {}
        });

        // Call the old $.cleanData()
        _cleanData(elems);
    };
}

var _delegateEvents = Backbone.View.prototype.delegateEvents;

// Wrap the old #delegateEvents(), and make sure
// we listen for our $el's 'remove' event.
Backbone.View.prototype.delegateEvents = function() {
    // Call the old #delegateEvents().
    _delegateEvents.call(this);

    // Bind #remove() to the 'remove' event.
    // Use ".delegateEvents + this.cid" so Backbone can
    // undelegate the event (without firing) when the
    // view's $el changes.
    this.$el.on('remove.delegateEvents' + this.cid, _.bind(this.remove, this));
};


    if (typeof exports === 'undefined') {
        var exports = root;
    }
    exports.Backbone = Backbone;
    exports.jQuery = jQuery;

})(this, _, jQuery, Backbone);
