// Escriu una consulta per mostrar tots els documents en la col·lecció Restaurants
var query = db.restaurants.find();
// Escriu una consulta per mostrar el restaurant_id, name, borough i cuisine per tots els documents en la col·lecció Restaurants
var query2 = db.restaurants.find({}, { restaurant_id: 1, name: 1, borough: 1, cuisine: 1});
// Escriu una consulta per mostrar el restaurant_id, name, borough i cuisine, però excloure el camp _id per tots els documents en la col·lecció Restaurants
var query3 = db.restaurants.find({}, { _id: 0 ,restaurant_id: 1, name: 1, borough: 1, cuisine: 1});
// Escriu una consulta per mostrar restaurant_id, name, borough i zip code, però excloure el camp _id per tots els documents en la col·lecció Restaurants
var query4 = db.restaurants.find({}, {  _id: 0,restaurant_id: 1, name: 1, borough: 1, "address.zipcode": 1});
// Escriu una consulta per mostrar tot els restaurants que estan en el Bronx
var query5 = db.restaurants.find({borough: "Bronx"});
// Escriu una consulta per mostrar els primers 5 restaurants que estan en el Bronx
var query6 = db.restaurants.find({borough: "Bronx"}).limit(5);
// Escriu una consulta per mostrar el pròxim 5 restaurants després de saltar els primers 5 del Bronx
var query7 = db.restaurants.find({borough: "Bronx"}).skip(5).limit(5);
// Escriu una consulta per trobar els restaurants que tenen un score de més de 90
var query8 = db.restaurants.find({ "grades.score": { $gt: 90 } });
// Escriu una consulta per trobar els restaurants que tenen un score de més que 80 però menys que 100
var query9 = db.restaurants.find({ "grades.score": { $gt: 80, $lt: 100 } });
// Escriu una consulta per trobar els restaurants quins localitzen en valor de latitud menys que -95.754168
var query10 = db.restaurants.find({ "address.coord.0": { $lt: -95.754168 } });
// Escriu una consulta de MongoDB per a trobar els restaurants que no preparen cap cuisine de 'American' i el seu puntaje de qualificació superior a 70 i latitud inferior a -65.754168
var query11 = db.restaurants.find({ cuisine: { $ne: 'American ' }, "grades.score": { $gt: 70 }, "address.coord.0": { $lt: -65.754168 } });
// Escriu una consulta per trobar els restaurants quins no preparen cap cuisine de 'American' i va aconseguir un marcador més que 70 i localitzat en la longitud menys que -65.754168. Nota : Fes aquesta consulta sense utilitzar $and operador
var query12 = db.restaurants.find({ cuisine: { $ne: 'American'  }, "grades.score": { $gt: 70 }, "address.coord.1": { $lt: -65.754168 } });
// Escriu una consulta per trobar els restaurants quins no preparen cap cuisine de 'American ' i va aconseguir un punt de grau 'A' no pertany a Brooklyn. S'ha de mostrar el document segons la cuisine en ordre descendent
var query13 = db.restaurants.find({ cuisine: { $ne: 'American ' }, "grades.grade":  'A' , borough: { $ne: 'Brooklyn' } }).sort({ cuisine: -1 });
// Escriu una consulta per trobar el restaurant_id, name, borough i cuisine per a aquells restaurants quin contenir 'Wil' com les tres primeres lletres en el seu nom
var query14 = db.restaurants.find({ name: /^Wil/ }, { restaurant_id: 1, name: 1, borough: 1, cuisine: 1});
// Escriu una consulta per trobar el restaurant_id, name, borough i cuisine per a aquells restaurants quin contenir 'ces' com les últim tres lletres en el seu nom
var query15 = db.restaurants.find({ name: /ces$/ }, { restaurant_id: 1, name: 1, borough: 1, cuisine: 1});
// Escriu una consulta per trobar el restaurant_id, name, borough i cuisine per a aquells restaurants quin contenir 'Reg' com tres lletres en algun lloc en el seu nom
var query16 = db.restaurants.find({name: /Reg/} , { restaurant_id: 1, name: 1, borough: 1, cuisine: 1});
// Escriu una consulta per trobar els restaurants quins pertanyen al Bronx i va preparar qualsevol plat American o xinès
var query17 = db.restaurants.find({borough: "Bronx", cuisine: { $in: ['American ', 'Chinese'] } });
// Escriu una consulta per trobar el restaurant_id, name, borough i cuisine per a aquells restaurants que pertanyen a Staten Island o Queens o Bronx  Brooklyn
var query18 = db.restaurants.find({borough: { $in: ['Staten Island', 'Queens', 'Bronx', 'Brooklyn'] } }, { restaurant_id: 1, name: 1, borough: 1, cuisine: 1});
// Escriu una consulta per trobar el restaurant_id, name, borough i cuisine per a aquells restaurants que no pertanyen a Staten Island o Queens o Bronx o Brooklyn
var query19 = db.restaurants.find({borough: { $nin: ['Staten Island', 'Queens', 'Bronx', 'Brooklyn'] } }, { restaurant_id: 1, name: 1, borough: 1, cuisine: 1});
// Escriu una consulta per trobar el restaurant_id, name, borough i cuisine per a aquells restaurants que aconsegueixin un marcador quin no és més que 10
var query20 = db.restaurants.find({ "grades.score": { $gt: 10 } }, { restaurant_id: 1, name: 1, borough: 1, cuisine: 1});
// Escriu una consulta per trobar el restaurant_id, name, borough i cuisine per a aquells restaurants que preparen marisc ('seafood') excepte 'American' i 'Chinese' o el name del restaurant comença amb lletres 'Wil'
var query21 = db.restaurants.find({ cuisine: { $nin: ['American ', 'Chinese'] }, $or:[{name: {$regex: /fish/i}},{name: {$regex: /^Wil/i}}] }, { restaurant_id: 1, name: 1, borough: 1, cuisine: 1});
// Escriu una consulta per trobar el restaurant_id, name, i grades per a aquells restaurants que aconsegueixin un grau "A" i un score 11 en dades d'estudi ISODate "2014-08-11T00:00:00Z"
var query22 = db.restaurants.find({ grades: {$elemMatch: { score: 11, date: ISODate("2014-08-11T00:00:00Z") }}, "grades.grade": "A" }, { restaurant_id: 1, name: 1, grades: 1 });
// Escriu una consulta per trobar el restaurant_id, name i grades per a aquells restaurants on el 2n element de varietat de graus conté un grau de "A" i marcador 9 sobre un ISODate "2014-08-11T00:00:00Z"
var query23 = db.restaurants.find({ "grades.1.score": 9, "grades.1.date": ISODate("2014-08-11T00:00:00Z"), "grades.1.grade": "A" }, { restaurant_id: 1, name: 1, grades: 1 });
// Escriu una consulta per trobar el restaurant_id, name, adreça i ubicació geogràfica per a aquells restaurants on el segon element del array coord conté un valor quin és més que 42 i fins a 52
var query24 = db.restaurants.find({ "address.coord.1": { $gt: 42, $lt: 52 } }, { restaurant_id: 1, name: 1, "address.street": 1, "address.coord": 1 });
// Escriu una consulta per organitzar el nom dels restaurants en ordre ascendent juntament amb totes les columnes
var query25 = db.restaurants.find().sort({ name: 1 });
// Escriu una consulta per organitzar el nom dels restaurants en descendir juntament amb totes les columnes
var query26 = db.restaurants.find().sort({ name: -1 });
// Escriu una consulta a organitzar el nom de la cuisine en ordre ascendent i per el mateix barri de cuisine. Ordre descendent
var query27 = db.restaurants.find().sort({ cuisine: 1, borough: -1 });
// Escriu una consulta per saber tant si totes les direccions contenen el carrer o no
var query28 = db.restaurants.find({"address.street": null }).count();
// Escriu una consulta quin seleccionarà tots el documents en la col·lecció de restaurants on els valors del camp coord és Double
var query29 = db.restaurants.find({ $and:[{"address.coord.0": { $type: "double" }},{"address.coord.1": { $type: "double" }}] }, { restaurant_id: 1, name: 1, "address.street": 1, "address.coord": 1});
// Escriu una consulta que seleccionarà el restaurant_id, name i grade per a aquells restaurants que retornen 0 com a residu després de dividir algun dels seus score per 7
var query30 = db.restaurants.find({ "grades.score": { $mod: [7, 0] } }, { restaurant_id: 1, name: 1, "grades.grade": 1 });
// Escriu una consulta per trobar el name de restaurant, borough, longitud i altitud i cuisine per a aquells restaurants que contenen 'mon' com tres lletres en algun lloc del seu name
var query31 = db.restaurants.find({name: /mon/}, {name: 1, borough: 1, "address.coord": 1, cuisine: 1});
// Escriu una consulta per trobar el name de restaurant, borough, longitud i latitud i cuisine per a aquells restaurants que conteinen 'Mad' com primeres tres lletres del seu name
var query32 = db.restaurants.find({name: /^Mad/}, {name: 1, borough: 1, "address.coord": 1, cuisine: 1});
