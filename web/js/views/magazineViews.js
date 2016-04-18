var MagazineView = Backbone.View.extend({
  render: function () {
    var markup = '<h1>' +this.model.get("title")+ '</h1>';
    this.$el.html(markup);
    return this;
  }
});
