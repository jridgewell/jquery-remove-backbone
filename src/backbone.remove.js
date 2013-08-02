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
