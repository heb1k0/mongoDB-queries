db.restaurants.find();
db.restaurants.find({}, { restaurant_id: 1, name: 1, borough: 1, cuisine: 1});
db.restaurants.find({}, { _id: 0 ,restaurant_id: 1, name: 1, borough: 1, cuisine: 1});
db.restaurants.find({}, {  _id: 0,restaurant_id: 1, name: 1, borough: 1, "address.zipcode": 1});
db.restaurants.find({borough: "Bronx"});
db.restaurants.find({borough: "Bronx"}).limit(5);
db.restaurants.find({borough: "Bronx"}).skip(5).limit(5);
db.restaurants.find({ "grades.score": { $gt: 90 } });
db.restaurants.find({ "grades.score": { $gt: 80, $lt: 100 } });
db.restaurants.find({ "address.coord.0": { $lt: -95.754168 } });
db.restaurants.find({ cuisine: { $ne: 'American ' }, "grades.score": { $gt: 70 }, "address.coord.0": { $lt: -65.754168 } });
db.restaurants.find({ cuisine: { $ne: 'American'  }, "grades.score": { $gt: 70 }, "address.coord.1": { $lt: -65.754168 } });
db.restaurants.find({ cuisine: { $ne: 'American ' }, "grades.grade":  'A' , borough: { $ne: 'Brooklyn' } }).sort({ cuisine: -1 });
db.restaurants.find({ name: /^Wil/ }, { restaurant_id: 1, name: 1, borough: 1, cuisine: 1});
db.restaurants.find({ name: /ces$/ }, { restaurant_id: 1, name: 1, borough: 1, cuisine: 1});
db.restaurants.find({name: /Reg/} , { restaurant_id: 1, name: 1, borough: 1, cuisine: 1});
db.restaurants.find({borough: "Bronx", cuisine: { $in: ['American ', 'Chinese'] } });
db.restaurants.find({borough: { $in: ['Staten Island', 'Queens', 'Bronx', 'Brooklyn'] } }, { restaurant_id: 1, name: 1, borough: 1, cuisine: 1});
db.restaurants.find({borough: { $nin: ['Staten Island', 'Queens', 'Bronx', 'Brooklyn'] } }, { restaurant_id: 1, name: 1, borough: 1, cuisine: 1});
db.restaurants.find({ "grades.score": { $gt: 10 } }, { restaurant_id: 1, name: 1, borough: 1, cuisine: 1});
db.restaurants.find({ cuisine: { $nin: ['American ', 'Chinese'] }, $or:[{name: {$regex: /fish/i}},{name: {$regex: /^Wil/i}}] }, { restaurant_id: 1, name: 1, borough: 1, cuisine: 1});
db.restaurants.find({ grades: {$elemMatch: { score: 11, date: ISODate("2014-08-11T00:00:00Z") }}, "grades.grade": "A" }, { restaurant_id: 1, name: 1, grades: 1 });
db.restaurants.find({ "grades.1.score": 9, "grades.1.date": ISODate("2014-08-11T00:00:00Z"), "grades.1.grade": "A" }, { restaurant_id: 1, name: 1, grades: 1 });
db.restaurants.find({ "address.coord.1": { $gt: 42, $lt: 52 } }, { restaurant_id: 1, name: 1, "address.street": 1, "address.coord": 1 });
db.restaurants.find().sort({ name: 1 });
db.restaurants.find().sort({ name: -1 });
db.restaurants.find().sort({ cuisine: 1, borough: -1 });
db.restaurants.find({"address.street": null }).count();
db.restaurants.find({ $and:[{"address.coord.0": { $type: "double" }},{"address.coord.1": { $type: "double" }}] }, { restaurant_id: 1, name: 1, "address.street": 1, "address.coord": 1});
db.restaurants.find({ "grades.score": { $mod: [7, 0] } }, { restaurant_id: 1, name: 1, "grades.grade": 1 });
db.restaurants.find({name: /mon/}, {name: 1, borough: 1, "address.coord": 1, cuisine: 1});
db.restaurants.find({name: /^Mad/}, {name: 1, borough: 1, "address.coord": 1, cuisine: 1});