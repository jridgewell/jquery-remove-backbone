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
    // $.cleanData() is a jQuery helper that
    // #empty(), #html(), and #remove() will once.
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
