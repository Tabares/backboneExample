var Magazine = Backbone.Model.extend({
  defaults: {
    title: '',
    pubDate: '1/1'
  },
  initialize: function(){
    console.log("The model has been initialize");
    this.on("change:title", function(){
      console.log("The model's data has been change");
    })
  }
});
