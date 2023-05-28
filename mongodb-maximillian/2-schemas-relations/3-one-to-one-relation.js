// create a database called carData
use carData

// create persons collection and insert data
db.persons.insertOne({ name: "Max", age: 29, salary: 3000 })

db.persons.find()
     // output
[
  {
    _id: ObjectId("6432a32109e69161ff63525c"),
    name: 'Max',
    age: 29,
    salary: 3000
  }
]

// create a new collection called car and insert data and give reference id to it

db.cars.insertOne({ model: "BMW", price: 40000, owner: ObjectId("6432a32109e69161ff63525c") })

db.cars.find()
// output
[
  {
    _id: ObjectId("6432a69909e69161ff63525d"),
    model: 'BMW',
    price: 40000,
    owner: ObjectId("6432a32109e69161ff63525c")
  }
]