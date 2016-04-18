var MagazineView = Backbone.View.extend({
  template: Handlebars.compile(
    '<div>' +
    '<h1>{{title}}</h1>'+
    '<p>{{pubDate}}<p>'+
    '<p><img src="{{image}}" /><p>'+

    '</div>'
  ),
  render: function(){
    this.$el.html(this.template(this.model.attributes));
    return this;
  }
});
