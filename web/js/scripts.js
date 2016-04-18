var Magazine = Backbone.Model.extend({});

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
