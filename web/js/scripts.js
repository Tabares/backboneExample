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
