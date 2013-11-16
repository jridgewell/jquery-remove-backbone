define(function() {
    describe("Backbone.View#delegateEvents", function() {
        beforeEach(function() {
            this.view = new Backbone.View();
        });
        afterEach(function() {
            delete this.view;
        });

        describe("#delegateEvents()", function() {
            it("calls Backbone.View's #delegateEvents()", function() {
                var spy = this.sinon.spy();
                this.view.events = {
                    test: spy
                };

                this.view.delegateEvents();
                this.view.$el.trigger('test');

                expect(spy).to.have.been.called;
            });

            it("calls #remove() on the 'remove' event", function() {
                var spy = this.sinon.spy(this.view, 'stopListening');
                this.view.delegateEvents();

                this.view.$el.trigger('remove');

                expect(spy).to.have.been.called;
            });

            it("uses eventname compatible with #undelegateEvents()", function() {
                var spy = this.sinon.spy(this.view, 'remove');
                this.view.delegateEvents();

                this.view.undelegateEvents();
                this.view.$el.trigger('remove');

                expect(spy).to.not.have.been.called;
            });
        });
    });
});
