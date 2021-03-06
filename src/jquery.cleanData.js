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
        $.each(elems, function() {
            // Fire
            $(this).triggerHandler('remove');
        });

        // Call the old $.cleanData()
        _cleanData(elems);
    };
}
