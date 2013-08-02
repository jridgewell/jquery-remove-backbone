jQuery-remove-Backbone
==========

Remove your Backbone views when you remove it's root element.

Can you spot what's wrong with the following code?

```javascript

var model = new Backbone.Model({name: 'jQuery-remove-Backbone'});
(function() {
    var View = Backbone.View.extend({
        initialize: function() {
            this.listenTo(this.model, 'change', this.alert);
        },
        alert: function() {
            alert('Why am I still around?');
            alert(this.model.get('name'));
        }
    });

    var view = new View({model: model});

    $(view.el).remove();
})();
model.set('name', 'model still holds a reference to the view.');

```

Just in that bit of code, we already have a zombie view. Since `view`'s
variable is gone, there's no way to `view.remove()` to release its
listeners. Ever create a view for your collection and instantiate views
for each model on the fly? Then you've probably wasted precious memory
and computations dealing with zombie model views you didn't even
realize you've made.

jQuery-remove-Backbone aims to fix this issue, by forcing jQuery to emit
a special 'remove' event when a DOM element is removed, and making
Backbone Views to remove themselves once its root element emits it.
Easy-peasy, and all in just 358 bytes after being gzipped.


Compatible with RequireJS
-------------------------

```javascript
requirejs.config({
    shim: {
        'jquery-remove-backbone': {
            deps: ['underscore', 'jquery', 'backbone']
        }
    }
});

require(['backbone', 'otherlib', 'jquery-remove-backbone'], function(Backbone, Other) {
    // ...
});
```
