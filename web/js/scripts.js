
var MagazineRouter = Backbone.Router.extend({
  routes: {
    "title/:id" : "showTitle"
  },
  showTitle : function(id) {
    $("#theList").html("Title: " + id);
    console.log("The page is being visited");
  }
});

var router = new MagazineRouter();

Backbone.history.start();


var magazineModel = new Magazine();
magazineModel.set('title', 'Screaming Zebras');
magazineModel.set('pubDate', '2/4');
magazineModel.set('image', 'img/zebra.jpg');

var zebras = new Magazine({title: "Screaming Zebras", pubDate: "2/4", image : 'img/zebra.jpg' });
var sombrero = new Magazine({title: "Sombrero Monthly", pubDate: "2/14", image : 'img/zebra.jpg' });
var carousel = new Magazine({title: "Carousel Lovers", pubDate: "3/1", image : 'img/zebra.jpg' });


var magazines = new MagazineCollection([zebras, sombrero, carousel]);
console.log(magazines.length);
var alphaSort = magazines.sortBy(function(magazine){
  return magazine.get("title");
})

magazines.forEach(function(model){
  console.log(model.get("title"));
});
alphaSort.forEach(function(model){
  console.log(model.get("title"));
});

var count = 1;

var numberedList = magazines.map(function(model){
  return count++ + ". " + model.get("title");
});

console.log(numberedList);

var titles = magazines.pluck("title");
$.each(titles, function(index, value){
  console.log(value)
});

var count2 = 1;
var sortedMap = magazines.chain()
  .sortBy(function(model){return model.get("title");})
  .map(function(model){return count2++ + ". " + model.get("title");})
  .value();

$.each(sortedMap, function(index, value){
  console.log(value);
})

var magazineView = new MagazineView({
  model: magazineModel
});

$(document).ready(function(){
  $("#theList").html(magazineView.render().el);
});
















/*var Magazine = Backbone.Model.extend({
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

var magazine1 = new Magazine();

magazine1.set("title", "Screaming Zebras");
console.log("Title has been set:"+magazine1.get("title"));

magazine1.set("pubDate", "1/2");
console.log("Pubdate has been set:"+magazine1.get("pubDate"));
*/
/*var Magazine = Backbone.Model.extend({});

var magazine = new Magazine();
console.log(JSON.stringify(magazine));

var magazine1 = new Magazine({
  title: "Screaming Zebras"
});
console.log(JSON.stringify(magazine1));

var Magazine1 = Backbone.Model.extend({
  defaults: {
    title: '',
    pubDate: '1/1'

  }
});

var magazine2 = new Magazine1();
console.log(JSON.stringify(magazine2));

var magazine3 = new Magazine1();
console.log(magazine3.get("pubDate"));

var magazine4 = new Magazine1({
  title:"Screaming Zebras"
});
console.log(magazine4.get("title"));

var magazine4 = new Magazine1({
  title:"Screaming Zebras"
});
console.log("Magazine 1 title: " + magazine4.get("title") );

var magazine5 = new Magazine1();
magazine5.set("title", "Sobrero Monthly");
console.log("Magazine 1 title: " + magazine5.get("title") );
*/
